import { NextResponse } from "next/server";
import { features } from "@/lib/features";

/**
 * GET /api/features - returns feature content for dynamic use (e.g. future CMS integration).
 */
export async function GET() {
  return NextResponse.json(features);
}
