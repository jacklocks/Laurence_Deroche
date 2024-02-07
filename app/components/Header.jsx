import Image from "next/image";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <section>
      <div className="bg-cover bg-bottom  img-header h-[40rem] flex items-center justify-center bg-fixed relative">
      {<Logo/>}
        <h1 className="text-white text-5xl z-10  Lowercase font-text z-0 mt-10">Trouvez votre chemin vers la sérénité avec mes soins bien-être personnalisés</h1>
      </div>
    </section>
  );
};

export default Header;
