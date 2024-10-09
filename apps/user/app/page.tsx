import PrismaClient  from "@repo/db/client";
import { useBalance } from "@repo/store/useBalance";

export default function Home() {
  return (
    <div className="text-red-600">
      Hello from user app
    </div>
  );
}
