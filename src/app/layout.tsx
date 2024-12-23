import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karim Menna ",
  description:
    "As a software engineer at Big-mama, I specialize in crafting robust solutions using Docker, Next.js, and Strapi... with a passion for learning new technologies. Additionally, I offer freelance services in Shopify and Webflow development. I love building websites and apps for global businesses and individuals and seeing them rise.",
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
