import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Telegram Notifications
  app.post("/api/notify-order", async (req, res) => {
    const { orderData } = req.body;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.log("Telegram configuration missing. Notification skipped.");
      return res.json({ success: true, message: "Logged but not sent (Config missing)" });
    }

    const { type, customer, plan, orderId, total } = orderData;
    
    // Formatted message for Telegram
    const statusIcon = type === 'DRAFT' ? '🕒 [ĐƠN NHÁP]' : '✅ [XÁC NHẬN CHUYỂN KHOẢN]';
    const text = `${statusIcon}\n\n` +
                 `👤 Khách hàng: ${customer.name}\n` +
                 `📞 SĐT/Zalo: ${customer.phone}\n` +
                 `🔗 FB: ${customer.fb || 'Không có'}\n\n` +
                 `📦 Gói: ${plan}\n` +
                 `💰 Tổng tiền: ${total}\n` +
                 `🆔 Mã đơn: ${orderId}\n` +
                 `------------------\n` +
                 `Quân TradingView Admin`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML' // Change back to markdown or keep as plain text if needed
        })
      });
      
      const result = await response.json();
      res.json({ success: result.ok });
    } catch (error) {
      console.error("Telegram notify failed:", error);
      res.status(500).json({ success: false });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
