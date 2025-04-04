import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/feature/toggle-mode";

const Header = () => {
  return (
    <div className="flex items-center h-full justify-between px-4">
      <SidebarTrigger />
      <ThemeProvider />
    </div>
  );
};

export default Header;
