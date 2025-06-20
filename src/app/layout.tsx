import "./globals.css";
import { GenderProvider } from "@/context/GenderContext"; // ✅ import
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google"; // ✅ import Inter font

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional, for CSS vars
  display: "swap",
});

export const metadata = {
  title: "Ecommerce Site",
  description: "Ecommerce site",
  favicons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GenderProvider>
          <Navbar /> {/* ✅ Show the Navbar on every page */}
          <main className="flex-grow">{children}</main>{" "}
          {/* ✅ Allow footer to stay at bottom */}
          <Footer />
        </GenderProvider>
      </body>
    </html>
  );
}
