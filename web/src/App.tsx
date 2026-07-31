import { Outlet } from "react-router-dom";
import { Footer, Header, MobileTabBar } from "@/components/layout/Shell";
import { ToastViewport } from "@/components/ui";

export function AppLayout() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileTabBar />
      <ToastViewport />
    </div>
  );
}
