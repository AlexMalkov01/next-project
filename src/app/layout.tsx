import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { MENU_CATEGORY } from "./enum/menu-catygory.enum";
import { IMenuItem } from "./interface/menu.inteface";
import axios from "axios";
import { AppContextProvider } from "./context/app.context";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "IBRAIN",
  description: "Curses",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { menu } = await getMenuItem()
  return (
    <html lang="ru">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </Head>
      <body> 
      <AppContextProvider menu={[]} >  
        {children}
      </AppContextProvider>  
      </body>
    </html>
  );
}


// async function getMenuItem () {
        
//   const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.API_DAIMON}top-page/find`,{firstCategory:MENU_CATEGORY.CURSES})
  
//   return {
//     menu
//   }
// }
