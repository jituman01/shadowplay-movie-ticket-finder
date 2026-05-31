import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShadowPlay-Movie-Ticket",
  description: "Full Stack Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">

  {/* Background Glow */}
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-0 w-100 h-100 bg-red-600/20 rounded-full blur-3xl" />

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[250px]" />

   <div className="absolute top-1/3 -right-20 w-[700px] h-[700px] bg-red-500/20 rounded-full blur-[300px]" />

   <div className="absolute -bottom-30 right-20 w-[600px] h-[600px] bg-red-700/25 rounded-full blur-[220px]" />
          
  </div>
        <Navbar />

        <main className="flex-grow relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
