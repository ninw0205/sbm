import { BookMarkedIcon, SquareLibraryIcon } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social BookMark",
  description: "Social BookMark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto flex h-screen flex-col justify-center">
          <header className="flex justify-between bg-cyan-500">
            <Link
              href="/"
              className="flex items-center font-semibold text-3xl text-white tracking-tighter"
            >
              <BookMarkedIcon size={30} />
              Bookmark
            </Link>
            <div className="flex items-center gap-5">
              <Link
                href="/bookcase"
                className="rounded-full border border-blue-300 p-1 transition-all duration-100 hover:ring-1 hover:ring-blue-500 active:scale-75 [&>svg:hover]:stroke-blue-800 [&>svg]:stroke-blue-500"
              >
                <SquareLibraryIcon />
              </Link>
              <Link href="/my" className="font-semibold">
                My
              </Link>
              <Link href="/sign" className="font-semibold">
                Login
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="text-center text-cyan-500">
            &#169; ninw0205 2025
          </footer>
        </div>
      </body>
    </html>
  );
}
