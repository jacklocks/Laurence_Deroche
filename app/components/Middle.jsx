import React from "react";

const Middle = () => {
  return (
    <>
      <h1 className="text-4xl mt-10 text-center font-title text-black leading-relaxed text-header">
        Plongez dans un océan de bien-être où l'énergie revitalisante du Reiki
        et du Lahochi fusionne harmonieusement avec l'apaisement profond de
        l'hypnose et la libération des tensions du massage Tui Na. Réveillez
        votre vitalité intérieure, libérez votre esprit et ressentez une
        transformation profonde à chaque séance.
      </h1>
      <div className=" flex place-content-around mt-20 flex-wrap gap-20">
        <div className="bg-teal w-[32rem] h-[32rem] flex flex-col items-center rounded-full mb-10">
          <h1 className="text-3xl text-center font-title p-10">
            Soins énergétiques
          </h1>
          <p className="p-10 text-lg font-text2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem inventore atque consequatur asperiores rem magni
            dignissimos minus sit ex adipisci error, officiis nisi ipsam quo?
            Magni quae soluta a et. Perspiciatis repudiandae dolor ipsa quas eos
            rem pariatur assumenda nihil laudantium cum mollitia, minus nemo ea.
            Distinctio minus iusto excepturi!
          </p>
          <button className="bg-red p-3 rounded uppercase hover:scale-110 transition w-36">Je découvre</button>
        </div>
        <div className="bg-teal w-[32rem] h-[32rem] flex flex-col items-center rounded-full">
          <h1 className="text-3xl text-center font-title p-10">Hypnose</h1>
          <p className="p-10 text-lg font-text2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem inventore atque consequatur asperiores rem magni
            dignissimos minus sit ex adipisci error, officiis nisi ipsam quo?
            Magni quae soluta a et. Perspiciatis repudiandae dolor ipsa quas eos
            rem pariatur assumenda nihil laudantium cum mollitia, minus nemo ea.
            Distinctio minus iusto excepturi!
          </p>
          <button className="bg-red p-3 rounded uppercase hover:scale-110 transition w-36">Je découvre</button>
        </div>
        <div className="bg-teal w-[32rem] h-[32rem] flex flex-col items-center rounded-full">
          <h1 className="text-3xl text-center font-title p-10">
            Massage Twina
          </h1>
          <p className="p-10 text-lg font-text2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem inventore atque consequatur asperiores rem magni
            dignissimos minus sit ex adipisci error, officiis nisi ipsam quo?
            Magni quae soluta a et. Perspiciatis repudiandae dolor ipsa quas eos
            rem pariatur assumenda nihil laudantium cum mollitia, minus nemo ea.
            Distinctio minus iusto excepturi!
          </p>
          <button className="bg-red p-3 rounded uppercase hover:scale-110 transition w-36">Je découvre</button>
        </div>
      </div>
    </>
  );
};

export default Middle;
