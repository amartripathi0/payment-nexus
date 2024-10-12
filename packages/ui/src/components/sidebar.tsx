"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Send, FileText, PieChart, Settings, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@ui/lib/utils";

const sidebarItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Transfer", href: "/dashboard/transfer", icon: Send },
  { name: "Transactions", href: "/dashboard/transactions", icon: FileText },
  { name: "Analytics", href: "/dashboard/analytics", icon: PieChart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4">
          {expanded && <span className="text-xl font-semibold">Menu</span>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setExpanded(!expanded)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            {sidebarItems.map((item) => (
              <li key={item.name} className="px-2 py-1">
                <Link href={item.href} passHref>
                  <span
                    className={cn(
                      "flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200",
                      pathname === item.href && "bg-gray-100 text-blue-600",
                      !expanded && "justify-center"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {expanded && <span className="ml-3">{item.name}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
