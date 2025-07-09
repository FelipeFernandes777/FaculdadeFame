import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"],
})

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
    },
    keywords: ["Faculdade Mineira de Educação EaD", "EAD", "Faculdade Mineira", "Fame", "Pos graduação", "Pos graduacao", "Engenharia", "EAD", "Faculdade EAD"],
    category: "Educacional",
    generator: "NextJS",
    robots: {index: true, follow: true},
    referrer: "origin"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
