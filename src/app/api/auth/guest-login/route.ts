import { NextResponse } from "next/server";

export async function POST() {
  // Guest login option removed to avoid issues
  return NextResponse.json(
    { error: "Guest login is currently disabled." },
    { status: 403 },
  );
}
