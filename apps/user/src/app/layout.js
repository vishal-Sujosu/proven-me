import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "./i18n-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ProvenMe User",
  description: "Turborepo user app workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="app-shell">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
