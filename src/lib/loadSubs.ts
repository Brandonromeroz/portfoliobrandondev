// src/lib/loadSubs.ts
export async function getSubscriberCount() {
  // Usa import.meta.env (Astro lo soporta)
  const apiKey = import.meta.env.PUBLIC_YT_API_KEY;
  const channelId = import.meta.env.PUBLIC_YT_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.error("❌ Faltan variables de entorno");
    return "0";
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("📊 Datos API:", JSON.stringify(data, null, 2));
    return data.items?.[0]?.statistics?.subscriberCount || "0";
  } catch (error) {
    console.error("Error al obtener suscriptores:", error);
    return "0";
  }
}