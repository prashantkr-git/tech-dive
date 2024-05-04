import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Dive",
  description: "Software downloading web app with mobile & laptop specification information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
