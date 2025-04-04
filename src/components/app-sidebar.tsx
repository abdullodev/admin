import {
  Calendar,
  Home,
  Inbox,
  Settings,
  Users,
  FolderKanban,
  User2,
  ChevronUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Menu items
const items = [
  {
    title: "Main",
    children: [
      { title: "Home", url: "/home", icon: Home },
      { title: "Inbox", url: "/inbox", icon: Inbox },
      { title: "Calendar", url: "/calendar", icon: Calendar },
    ],
  },
  {
    title: "Tools",
    children: [{ title: "Settings", url: "/settings", icon: Settings }],
  },
  {
    title: "Management",
    children: [
      { title: "Users", url: "/users", icon: Users },
      { title: "Projects", url: "/projects", icon: FolderKanban },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Sidebar className="w-64 border-r min-h-screen">
      <SidebarHeader className="bg-gray-200 dark:bg-gray-800 h-14 flex items-center justify-center">
        <h2 className="text-xs font-bold">My App</h2>
      </SidebarHeader>
      <SidebarContent>
        {items.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.children.map((item) => {
                  const isActive =
                    pathname === item.url ||
                    pathname.startsWith(item.url + "/");
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          to={item.url}
                          className={cn(
                            "flex items-center gap-2 py-2 px-3 rounded transition-colors text-sm",
                            isActive
                              ? "font-semibold text-primary bg-indigo-50 dark:bg-gray-700"
                              : "hover:bg-muted text-muted-foreground"
                          )}
                        >
                          <item.icon size={18} />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="cursor-pointer">
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
