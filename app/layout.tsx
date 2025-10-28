import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-expect-error Missing type definitions for next/font/google
import "./globals.css";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ThaiGuideline | คู่มือแนะนำการท่องเที่ยวไทย',
    description: 'ค้นพบและสำรวจสถานที่ท่องเที่ยวที่สวยงามและน่าตื่นตาตื่นใจทั่วประเทศไทย',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // หากต้องการใช้ Font ให้เพิ่ม className={inter.className} ตรงนี้
        <html lang="th">
            {/* สมมติว่าใน globals.css คุณได้กำหนด font-family แล้ว */}
            <body className={`${inter.className} font-sans antialiased`}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    {/* ใช้ 'grow' แทน 'flex-grow' ตามคำแนะนำของ Tailwind/ESLint */}
                    <main className="grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
