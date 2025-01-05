import "./globals.css";
import WhatsappButton from "@/components/WhatsApp";

import { Dancing_Script, Lato } from "next/font/google";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"], // Adjust weights based on your needs
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Light, Regular, Bold for flexibility
});

export const metadata = {
  title: "Sacred Vows",
  description: "Sacred Vows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${lato.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
