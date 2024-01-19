import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karim Menna ",
  description: "Front end developer, with experties in various technologies like webflow shopify and more advanced ones like react, next js and node js, redux...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" data-wf-domain="karimmenna.com">
      <body>{children}</body>
    </html>
  );
}
