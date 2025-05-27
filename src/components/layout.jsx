"use client";
import StoreProvider from "@/store/provider";
import Footer from "./footer";
import Header from "./header";
import Lenis from "./lenis";

const Layout = ({ children }) => {
  return (
    <Lenis>
      <StoreProvider>
        <main className="w-full max-w-[2180px] mx-auto p-1 md:p-3">
          <Header />
          {children}
          <Footer />
        </main>
      </StoreProvider>
    </Lenis>
  );
};

export default Layout;
