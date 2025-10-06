// app/api/subscribe/route.js
import "../../../envConfig.js"; // eğer projenizdeye ihtiyaç varsa
export async function POST(request) {
  try {
    const { email } = await request.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
      });
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          send_welcome_email: true,
          reactivate_existing: false,
        }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: res.status,
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err) {
    console.error("Subscribe error:", err.message, err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal server error" }),
      { status: 500 }
    );
  }
}
