import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WorkCo",
  description: "The New Way to Work Together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} class="light-theme">
        {children}
      </body>
    </html>
  );
}
