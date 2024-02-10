import Image from "next/image";
import React from "react";
import Logo from "./Logo";


const Header = () => {
  return (
    // <section className="h-auto w-screen">
    //   <div className="bg-cover bg-bottom  img-header h-[35rem] z-10 flex items-center justify-center bg-fixed relative opacity-95">
    //     <h1 className="text-pink text-5xl z-20 Lowercase font-title font-semibold text-header">Trouvez votre chemin vers la sérénité avec mes soins bien-être personnalisés</h1>
    //   </div>
    // </section>
    <section className=" w-screen flex flex-col items-center px-36 pb-32">
      <Logo />
      {/* <h1 className="text-4xl mt-10 text-center font-text2 leading-relaxed text-header">
        Plongez dans un océan de bien-être où l'énergie revitalisante du Reiki
        et du Lahochi fusionne harmonieusement avec l'apaisement profond de
        l'hypnose et la libération des tensions du massage Tui Na. Réveillez
        votre vitalité intérieure, libérez votre esprit et ressentez une
        transformation profonde à chaque séance.
      </h1>
      <div className=" flex place-content-around mt-20 flex-wrap gap-20">
        <div className="bg-turquoise w-[32rem] h-[32rem] rounded-full mb-10">
          <h1 className="text-3xl text-center font-title p-10">Soins énergétiques</h1>
          <p className="p-10 text-lg font-text2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem inventore atque consequatur asperiores rem magni
            dignissimos minus sit ex adipisci error, officiis nisi ipsam quo?
            Magni quae soluta a et. Perspiciatis repudiandae dolor ipsa quas eos
            rem pariatur assumenda nihil laudantium cum mollitia, minus nemo ea.
            Distinctio minus iusto excepturi!
          </p>
        </div>
        <div className="bg-turquoise w-[32rem] h-[32rem] rounded-full">
          <h1 className="text-3xl text-center font-title p-10">Hypnose</h1>
          <p className="p-10 text-lg font-text2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem inventore atque consequatur asperiores rem magni
            dignissimos minus sit ex adipisci error, officiis nisi ipsam quo?
            Magni quae soluta a et. Perspiciatis repudiandae dolor ipsa quas eos
            rem pariatur assumenda nihil laudantium cum mollitia, minus nemo ea.
            Distinctio minus iusto excepturi!
          </p>
        </div>
        <div className="bg-turquoise w-[32rem] h-[32rem] rounded-full">
          <h1 className="text-3xl text-center font-title p-10">Massage Twina</h1>
          <p className="p-10 text-lg font-text2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem inventore atque consequatur asperiores rem magni
            dignissimos minus sit ex adipisci error, officiis nisi ipsam quo?
            Magni quae soluta a et. Perspiciatis repudiandae dolor ipsa quas eos
            rem pariatur assumenda nihil laudantium cum mollitia, minus nemo ea.
            Distinctio minus iusto excepturi!
          </p>
        </div>
      </div> */}

      <div className=" middle-care  bg-bottom bg-cover flex items-center justify-end">
        <div className="flex items-center justify-start h-screen w-1/2">
          <div className="h-96 w-4/5 bg-teal translate-x-10 flex flex-col items-center justify-center text-center">
            <p className="text-5xl font-man p-10">Trouvez votre chemin vers la sérénité avec mes protocoles  personnalisés</p>
            <button className="bg-red p-3 rounded uppercase hover:scale-110 transition">Mon histoire</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
