"use client";

import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <>
            <ToastContainer
                autoClose={5000}
                limit={4}
                newestOnTop
                position='top-right'
                draggable
            />
            <Header isActive={false} />
            <main className={`${pathname !== "/" && "pt-[93px]"}`}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default ClientLayout;
