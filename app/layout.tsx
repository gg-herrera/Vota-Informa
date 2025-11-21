import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vota Informa 2025",
  description: "Información objetiva sobre candidatos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}