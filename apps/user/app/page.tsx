import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export default function Home() {
  return (
    <div className="text-red-600">
      Hello from user app
    </div>
  );
}
