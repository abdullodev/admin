import { AppSidebar } from "@/app/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./header/header";

export default function Layout() {
  const sidebar_state = `${document.cookie}`.split(`sidebar_state=`);
  const def = sidebar_state.length > 1 ? sidebar_state[1] === "true" : false;

  return (
    <SidebarProvider defaultOpen={def}>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex w-full flex-col overflow-hidden bg-background transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:pt-0">
          <div className="flex overflow-auto w-full max-w-[100rem] flex-col items-center justify-center gap-8 p-4">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
