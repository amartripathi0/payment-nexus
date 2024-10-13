import { Bell, Search, User } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
interface NavbarProps {
  handleSignin: any;
  handleSignout: any;
  user?: {
    name?: string | null;
  };
}
export default function Navbar({
  handleSignin,
  handleSignout,
  user,
}: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">
                Payment Nexus
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Button
                variant="default"
                className="bg-neutral-800"
                onClick={user ? handleSignout : handleSignin}
              >
                {user ? "Logout" : "Login"}
              </Button>
              {user && (
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <Button variant="ghost" size="icon" className="ml-3">
                    <Bell className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="ml-3">
                    <User className="h-6 w-6" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
