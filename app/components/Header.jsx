import Image from "next/image";
import React from "react";
import Logo from "./Logo";


const Header = () => {
  return (
    <section className=" flex flex-col items-center xl:px-36 pb-32">
      <Logo />
      <div className=" middle-care  bg-bottom bg-cover flex items-center justify-end">
        <div className="flex items-center justify-start h-screen w-1/2">
          <div className="h-96 w-4/5 bg-teal translate-x-10 flex flex-col items-center justify-center text-center">
            <p className="text-3xl 2xl:text-5xl font-man p-10">Trouvez votre chemin<br/> vers la sérénité<br/> avec mes protocoles  personnalisés</p>
            <button className="bg-red p-3 rounded uppercase hover:scale-110 transition">Mon histoire</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
