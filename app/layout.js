import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpoilFlix - Discover Movies and Series with a Twist",
  description: "SpoilFlix: Your ultimate platform for spoilers, reviews, and lists. Create and share your own movie lists, spoil alerts, and explore detailed movie summaries.",
  keywords: "movies, spoilers, film reviews, movie lists, cinema, movie summaries, SpoilFlix",
  author: "SpoilFlix Team",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    title: "SpoilFlix - Discover Movies and Series with a Twist",
    description: "Your ultimate platform for spoilers, reviews, and lists. Explore and share detailed movie summaries.",
    type: "website",
    url: "https://www.spoilflix.com",
    image: "https://www.spoilflix.com/og-image.jpg", // Remplacez par une URL valide de votre image
  },
  twitter: {
    card: "summary_large_image",
    title: "SpoilFlix - Discover Movies and Series with a Twist",
    description: "Explore and share spoilers, reviews, and detailed summaries on SpoilFlix.",
    image: "https://www.spoilflix.com/twitter-image.jpg", // Remplacez par une URL valide de votre image
    site: "@SpoilFlix", // Remplacez par votre handle Twitter si vous en avez un
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
