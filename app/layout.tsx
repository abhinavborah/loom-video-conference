import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loom",
  description: "A video conference platform",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/loom-logo.svg",
          },
          variables: {
            colorText: "#ebdbb2",
            colorPrimary: "#689d6a",
            colorBackground: "#504945",
            colorInputBackground: "#ebdbb2",
            colorInputText: "#7c6f64",
          },
        }}
      >
        <body className={`${inter.className} bg-gruvbox-bg`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
