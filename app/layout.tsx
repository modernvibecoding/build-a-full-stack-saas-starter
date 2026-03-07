import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build a Full-Stack SaaS App",
  description: "Starter for the Build a Full-Stack SaaS App guided project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
