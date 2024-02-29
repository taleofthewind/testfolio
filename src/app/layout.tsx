import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import  "../styles/globals.css"
import Header from '@/components/header/Header'
import Home from '@/app/home/page'
import About from '@/app/about/page'
import Footer from '@/components/footer/page'
import Contact from '@/app/contact/page'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "testapp",
  description: "Generated by create next app",
};

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${poppins.variable}`}>
    <body>
      <section>
        <Header />
        <Home />
        <About />
        <Contact />
        <Footer />
      </section>
    </body>
  </html>
  );
}
