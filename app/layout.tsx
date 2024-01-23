import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Provider";

export const metadata: Metadata = {
  title: "Unsplash Gallery",
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
        <Providers>
          <Header />
          <main className="container max-w-[1600px] m-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
