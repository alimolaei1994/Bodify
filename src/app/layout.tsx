import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Genetics Fitness Social App",
  description: "AthleteDNA - Genetics Fitness Social App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

