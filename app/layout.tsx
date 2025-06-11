import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNav from "@/components/bottom-nav";
import SideNav from "@/components/side-nav";
import "./globals.css";
import styles from "./main-layout.module.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutrition Tracker",
  description: "An app to track your nutritional data",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${styles.body}`}>
        <SideNav />
        <main className={styles.main}>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
