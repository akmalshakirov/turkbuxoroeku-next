import ClientLayout from "@/components/layout/ClientLayout";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Турк Бухара Эку Центр",
    description: "Турк Бухара Эку Центр",
    icons: {
        icon: "/favicon.svg",
    },
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ru'>
            <meta name='description' content='Турк Бухара Эку Центр' />
            <body className={`antialiased`}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}

export default RootLayout;
