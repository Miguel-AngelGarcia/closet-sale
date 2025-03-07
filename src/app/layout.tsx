import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app page-cont">
          <Navbar />
          <div className="app-layers cont-wrap">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
