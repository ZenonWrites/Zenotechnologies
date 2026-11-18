import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-black pt-20 text-white font-sans">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
