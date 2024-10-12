import Navbar from "@repo/ui/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="flex h-screen overflow-hidden w-screen">
          {/* <Sidebar /> */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
              <div className="container mx-auto px-6 py-8">{children}</div>
            </main>
          </div>
        </div>
  );
}

