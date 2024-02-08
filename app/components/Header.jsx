import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section>
      <div className="bg-cover bg-bottom  img-header h-[35rem]  flex items-center justify-center bg-fixed relative opacity-95">
        <h1 className="text-white text-5xl z-1 Lowercase font-title font-semibold text-header">Trouvez votre chemin vers la sérénité avec mes soins bien-être personnalisés</h1>
      </div>
    </section>
  );
};

export default Header;
