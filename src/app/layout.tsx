import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import Header from "./header/header";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col flex-1 min-h-screen bg-gray-50 dark:bg-gray-700">
        <header className="h-14 sticky top-0 z-10 bg-gray-200 dark:bg-gray-800">
          <Header />
        </header>
        <section className="p-4">
          <Outlet />
        </section>
      </main>
    </SidebarProvider>
  );
}
