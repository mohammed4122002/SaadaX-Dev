//layout.tsx

import Navbar from "@/components/main/Navbar";
import "../styles/globals.css";
import VideoBackground from "../components/VideoBackground";
import Footer from "../components/main/Footer";

// تعريف البيانات الوصفية لتحسين SEO ومشاركة الوسائط الاجتماعية
export const metadata = {
  title: "SaadaX - Mohammed Saada's Portfolio",
  description:
    "Discover Mohammed Saada's portfolio, showcasing innovative web development projects and expertise in full-stack development.",
  keywords: "portfolio, web development, full-stack developer, Mohammed Saada",
  author: "Mohammed Saada",
  openGraph: {
    title: "Mohammed Saada | Full-Stack Developer Portfolio",
    description:
      "Explore Mohammed Saada's projects, skills, and passion for building modern web applications.",
    url: "https://saadax-portfolio.vercel.app", // استبدل بالرابط الفعلي
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Saada Portfolio Preview",
      },
    ],
    type: "website",
  },
};

// مكون التخطيط الجذري الذي يغلف جميع الصفحات
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="../favicon.ico" />
      </head>
      <body>
      <Navbar />
        <VideoBackground />
        {children}
        <Footer />

       
        </body>
    </html>
  );
}
