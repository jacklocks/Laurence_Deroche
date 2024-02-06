import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section>
      <div className="bg-cover bg-bottom  img-header h-[40rem] flex items-center justify-center bg-fixed">
        <h1 className="text-white text-5xl z-10 text-nowrap uppercase font-text">phrase d'accroche</h1>
      </div>
    </section>
  );
};

export default Header;
