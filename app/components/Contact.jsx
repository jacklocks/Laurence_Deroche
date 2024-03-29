"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";


const Contact = () => {
  const serviceId = "service_n0xep7j";
  const templateId = "template_vygg6gg";
  const publicKey = `${process.env.NEXT_PUBLIC_ID}`;

  const form = useRef();
  const [checkbox, setCheckbox] = useState(false);
  const handleChange = () => setCheckbox(!checkbox);

  const sendEmail = (e) => {
    e.preventDefault();
    if (checkbox === false) {
      alert("vous devez accepter les RGPD");
    } else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Message envoyé");
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur est survenue");
        }
      );
    }
  };

  return (
    <div className="text-center mb-20 mt-32">
      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-10 mb-10 text-5xl capitalize font-text text-black">contact</h2>
        <p className="w-9/12 mb-10 font-text text-2xl lg:text-3xl mt-10 text-center text-black leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ex
          dolorum quibusdam possimus perspiciatis non et sed soluta dicta
          accusantium delectus labore dolor voluptatem adipisci ab, velit saepe
          neque veritatis. Laudantium, eos earum. Voluptas magni asperiores
          nobis veniam est autem natus voluptate at nostrum veritatis dicta amet
          sapiente obcaecati aliquid provident suscipit nam harum quo, quasi
          laborum facilis perferendis possimus!
        </p>
      </div>
      <form
        className="flex flex-col items-center justify-center space-y-4 text-black font-text capitalize"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="name">nom</label>
          <input
            className="text-black font-text h-9 w-66 sm:w-96 outline-none p-5 border-2 border-teal rounded"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <label htmlFor="email">email</label>
        <input
          className="text-black h-9 w-66 sm:w-96 outline-none p-5 border-2 border-teal rounded"
          type="email"
          id="email"
          name="email"
          required
        />
        <label htmlFor="message">message</label>
        <textarea
          className="text-black h-32 w-72 sm:w-96 outline-none p-5 border-2 border-teal rounded"
          id="message"
          name="message"
          required
        ></textarea>
        <button className="bg-red p-3 rounded uppercase hover:scale-110 transition w-36 text-white font-text" type="submit" value="Send">
          envoyer
        </button>
        <div>
          <input
          className="h-4 w-4 mr-2  accent-teal"
            type="checkbox"
            onChange={handleChange}
            id="rgpd"
            name="RGPD"
          />
          <label className="h-5 font-text" htmlFor="rgpd">
            J'ai lu et accepte la{" "}
            <Link className="cursor-pointer underline" href="/RGPD">politique de confidentialité</Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Contact;
