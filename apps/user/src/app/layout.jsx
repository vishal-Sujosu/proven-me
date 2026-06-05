import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import I18nProvider from "../lang/i18n-provider";
import "../styles/globals.css";
import { ProvenMeProvider } from "@/styles/theme/ThemeProvider";
import Header from "@/components/layout/home/Header";
import Footer from "@/components/layout/home/Footer";

// Cabinet Grotesk is not in Google Fonts — load it from Fontshare via <link> in metadata

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-hanken",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="dark"
      data-accent="violet"
      data-density="comfortable"
      className={`${hanken.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin=""
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ProvenMeProvider>
          <I18nProvider>
            <Header />
            {children}
            <Footer />
          </I18nProvider>
        </ProvenMeProvider>
      </body>
    </html>
  );
}
