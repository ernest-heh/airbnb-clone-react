import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Holiday Homes & Apartment Rentals | Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
