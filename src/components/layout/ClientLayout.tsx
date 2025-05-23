"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <>
            <Header isActive={false} />
            <main className={`${pathname !== "/" && "pt-[93px]"}`}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default ClientLayout;
