import Image from "next/image";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Middle from "./components/Middle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Middle />
      </div>
  );
}
