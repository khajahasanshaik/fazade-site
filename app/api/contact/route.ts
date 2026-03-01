import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing name, email, or message" },
        { status: 400 }
      );
    }
    // Extend here: send email, save to DB, etc.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
