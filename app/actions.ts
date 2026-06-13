"use server";

type SendResult = { ok: true } | { ok: false; error: string };

export async function sendToTelegram(
  name: string,
  phone: string
): Promise<SendResult> {
  const trimmedName = name.trim();
  const trimmedPhone = phone.trim();

  if (!trimmedName || !trimmedPhone) {
    return { ok: false, error: "Заполните имя и телефон" };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error(
      "TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы в .env.local"
    );
    return { ok: false, error: "Сервис временно недоступен" };
  }

  const text = [
    "Новая заявка с сайта",
    `Имя: ${trimmedName}`,
    `Телефон: ${trimmedPhone}`,
  ].join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    if (!response.ok) {
      console.error("Telegram API error:", await response.text());
      return { ok: false, error: "Не удалось отправить заявку" };
    }

    return { ok: true };
  } catch (error) {
    console.error("Telegram request failed:", error);
    return { ok: false, error: "Не удалось отправить заявку" };
  }
}
