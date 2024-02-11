import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Middle />
      <Contact />
      <Footer />
    </div>
  );
}
