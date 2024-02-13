import Image from "next/image";
import Link from "next/link";
import React from "react";
import imageSoins from "../assets/Soins-énergétiques.png";
import imageHypnose from "../assets/Hypnose.webp";
import imageMassage from "../assets/Massage.webp"

const Middle = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-2xl lg:text-3xl mt-10 text-center font-text w-9/12 text-black leading-relaxed text-header">
          Plongez dans un océan de bien-être où l'énergie revitalisante du Reiki
          et du Lahochi fusionne harmonieusement avec l'apaisement profond de
          l'hypnose et la libération des tensions du massage Tui Na. Réveillez
          votre vitalité intérieure, libérez votre esprit et ressentez une
          transformation profonde à chaque séance.
        </h1>
      </div>
      <div className=" flex place-content-around mt-20 flex-wrap gap-20">
        <div className="bg-teal w-[19rem] h-[19rem] rounded-full sm:w-[32rem] sm:h-[32rem] flex flex-col items-center mb-10">
          <div className="h-fit w-fit m-auto -translate-y-6 sm:-translate-y-20 flex flex-col items-center justify-between">
            <Image className="h-24 w-24 sm:h-32 sm:w-32" src={imageSoins} alt="logo soins énergétiques" />
          <h1 className="text-xl sm:text-2xl text-center font-text -translate-y-6">
            Soins énergétiques
          </h1>
          </div>
          <ul className="text-[0.6rem] sm:text-base font-text -translate-y-12 sm:-translate-y-28 list-disc mx-10 sm:mx-16">
            <li>Remet en mouvement, inspire à aller de l’avant</li>
            <li>Accès aux ressources naturelles pour le plein potentiel.</li>
            <li>Libération des blocages et détente totale</li>
            <li>Atténuation de la douleur physique et émotionnelle</li>
            <li>Bienfaits : énergie vitale, système immunitaire, gestion du stress, sommeil, auto-guérison</li>
          </ul>
          <button className="bg-red p-2 sm:p-3 rounded uppercase hover:scale-110 transition font-text text-sm sm:text-lg -translate-y-8 sm:-translate-y-14">
            Je découvre
          </button>
        </div>
        <div className="bg-teal w-[19rem] h-[19rem] rounded-full sm:w-[32rem] sm:h-[32rem] flex flex-col items-center mb-10">
        <div className="h-fit w-fit m-auto -translate-y-6 sm:-translate-y-18 mb-14 flex flex-col items-center justify-between">
            <Image className="h-24 w-24 sm:h-32 sm:w-32" src={imageHypnose} alt="logo hypnose" />
          <h1 className="text-xl sm:text-2xl text-center font-text -translate-y-8">
            Hypnose
          </h1>
          </div>
          <ul className="text-[0.6rem] sm:text-base font-text -translate-y-24 sm:-translate-y-16 list-disc mx-10 sm:mx-16">
            <li>Active les ressources du cerveau et guérit par suggestions en état hypnotique</li>
            <li>Gestion douleurs, stress, sommeil, phobies, dépendances, émotions, favorise la relaxation</li>
            <li>Traite les phobies, renforce la confiance et l'estime de soi</li>
            <li>Surmonter les dépendances et gérer les émotions</li>
            <li>Contre-indications : pathologies psychiatriques, dépression sévère</li>
          </ul>
          <button className="bg-red p-2 sm:p-3 rounded uppercase hover:scale-110 transition font-text text-sm sm:text-lg -translate-y-20 sm:-translate-y-14">
            Je découvre
          </button>
        </div>
        <div className="bg-teal w-[19rem] h-[19rem] rounded-full sm:w-[32rem] sm:h-[32rem] flex flex-col items-center mb-10">
        <div className="h-fit w-fit m-auto -translate-y-6 sm:-translate-y-20 flex flex-col items-center justify-between">
            <Image className="h-24 w-24 sm:h-32 sm:w-32" src={imageMassage} alt="logo hypnose" />
          <h1 className="text-xl sm:text-2xl text-center font-text -translate-y-2 sm:-translate-y-8">
            Massage ventouses Tui Na
          </h1>
          </div>
          <ul className="text-[0.6rem] sm:text-base font-text -translate-y-12 sm:-translate-y-32 list-disc mx-10 sm:mx-16">
            <li>Rééquilibre les énergies du corps</li>
            <li>Booste l’énergie, stimule la circulation, draine les toxines</li>
            <li>Réduit le stress, tonifie les tissus, favorise le transit</li>
            <li>Contre-indications : varices, cancer, grossesse, problèmes cardiaques</li>
          </ul>
          <button className="bg-red p-2 sm:p-3 rounded uppercase hover:scale-110 transition font-text text-sm sm:text-lg -translate-y-6 sm:-translate-y-14">
            Je découvre
          </button>
        </div>
      </div>
    </>
  );
};

export default Middle;
