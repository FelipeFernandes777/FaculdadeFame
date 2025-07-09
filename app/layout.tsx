import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAME - Faculdade Mineira de Educação EaD",
  description: "Site da faculdade Mineira de Educação EAD",
  publisher: "Hostinger",
  authors: [{
      name: "RJ Digital",
      url: "Empresa de marketing digital"
  },
      {
      name: "FelipeFernandes777",
      url: "https://github.com/FelipeFernandes777"
  }],
    icons: [
        "localhost:3000/fame3.png"
    ],
    manifest: "https://site.com.br/manifest.json",
    openGraph: {
      title: "FAME - Faculdade Mineda de Educação EAD",
        description: "Sua pós graduação está aqui",
        images: {
          url: "fame1.png",
            alt: "Logo da Faculdade"
        },
        type: "website",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
