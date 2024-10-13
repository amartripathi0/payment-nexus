import { getServerSession } from "next-auth";
import Navbar from "@repo/ui/components/navbar";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if(session?.user) {
     redirect("/dashboard");
  }
  return (
    <div className="h-screen">
      <Navbar />
    </div>
  );
}
