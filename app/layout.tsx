import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Unsplash API",
  description: "Searching pictures with unsplash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container max-w-[1600px] m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
