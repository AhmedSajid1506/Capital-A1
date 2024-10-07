import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { AOSInit } from "./utils/AOSInit";
import "./animate.compat.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capital Æther1",
  description: "Capital Æther1 Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <AOSInit /> */}
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
