import { jsonResume } from "@/lib/json-resume";

export function GET() {
  return Response.json(jsonResume());
}
