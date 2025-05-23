import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Турк Бухара Эку Центр",
    description: "Турк Бухара Эку Центр",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <meta name='description' content='Турк Бухара Эку Центр' />
            <body className={`antialiased`}>
                <Header isActive={false} />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
