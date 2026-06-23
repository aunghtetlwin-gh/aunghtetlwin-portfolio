import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0B0F1A",
};

export const metadata: Metadata = {
  // TODO: update metadataBase to your final deployment URL before going live
  metadataBase: new URL("https://aunghtetlwin.com"),
  title: "Aung Htet Lwin — DevOps & Cloud Engineer",
  description:
    "Portfolio of Aung Htet Lwin, a CNCF Kubestronaut and DevOps/Cloud Engineer specialising in AWS, Kubernetes, Terraform, and cloud-native infrastructure.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Aung Htet Lwin — DevOps & Cloud Engineer",
    description:
      "CNCF Kubestronaut | AWS | Kubernetes | Terraform | Cloud-native infrastructure",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1920,
        height: 1080,
        alt: "Aung Htet Lwin — DevOps & Cloud Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aung Htet Lwin — DevOps & Cloud Engineer",
    description:
      "CNCF Kubestronaut | AWS | Kubernetes | Terraform | Cloud-native infrastructure",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
