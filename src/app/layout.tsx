import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "700"],
  style: ["normal", "italic"],
});

// Replace with your exact Cloudinary favicon PNG/SVG URL
const CLOUDINARY_FAVICON = "https://res.cloudinary.com/daxjf0uyj/image/upload/v1786996826/LOGO_BROMEN_tgx87q.png";

export const metadata: Metadata = {
  title: "Bromen | Official Links",
  description: "Official links for Bromen Indonesia.",
  icons: {
    icon: CLOUDINARY_FAVICON,
    shortcut: CLOUDINARY_FAVICON,
    apple: CLOUDINARY_FAVICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}