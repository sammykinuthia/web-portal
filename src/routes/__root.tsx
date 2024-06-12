import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <main className="min-h-96">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
