// src/lib/loadSubs.ts
export async function getSubscriberCount() {
  const apiKey = import.meta.env.YT_API_KEY;
  const channelId = import.meta.env.YT_CHANNEL_ID;

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.items?.[0]?.statistics?.subscriberCount || "0";
  } catch (error) {
    console.error("Error obteniendo suscriptores:", error);
    return "0";
  }
}
