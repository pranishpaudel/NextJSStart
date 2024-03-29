import { Inter } from "next/font/google";
import "./globals.css";
import JotaiProvider from "../component/jotaiProvider.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "💻Insdsn💻",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <JotaiProvider>
        <body className={inter.className}>{children}</body>
      </JotaiProvider>
    </html>
  );
}
