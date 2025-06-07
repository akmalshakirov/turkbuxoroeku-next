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

export default function RootLayoutd({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <meta name='description' content='Турк Бухара Эку Центр' />
            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
                integrity='sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=='
                crossOrigin='anonymous'
                referrerPolicy='no-referrer'
            />
            <body className={`antialiased`}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
