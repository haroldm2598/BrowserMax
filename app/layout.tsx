import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterLayout from "@/components/FooterLayout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Browser Max Blog",
    description:
        "Minial but informative blog about web development, programming, and technology.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full">
                <div className="min-h-dvh bg-zinc-200 text-zinc-950">
                    <div className="mx-auto flex flex-col min-h-dvh w-full max-w-[1100px] border-x border-zinc-300 bg-white">
                        <Header />

                        <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">
                            {children}
                        </main>

                        <FooterLayout />
                    </div>
                </div>
            </body>
        </html>
    );
}
