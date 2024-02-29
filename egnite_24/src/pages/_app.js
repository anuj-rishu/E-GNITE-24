import Footer from "@/components/Footer";
import Info from "@/components/Info";
import { Navbar } from "@/components/Navbar";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
  <div className="mx-4  md:mx-14 lg:mx-16 xl:mx-16">
  <Navbar />
  
  
  <Component {...pageProps} />
  <Footer />
  </div>
  )
}
