"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

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
    <div className="text-center mb-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-10 mb-10 text-5xl capitalize font-title">contact</h2>
        <p className="w-9/12 text-2xl mb-10 font-text2">
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
        className="flex flex-col items-center justify-center space-y-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="name">nom</label>
          <input
            className="text-black h-9 w-96 outline-none p-5"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <label htmlFor="email">email</label>
        <input
          className="text-black h-9 w-96 outline-none p-5"
          type="email"
          id="email"
          name="email"
          required
        />
        <label htmlFor="message">message</label>
        <textarea
          className="text-black h-32 w-96 outline-none p-5"
          id="message"
          name="message"
          required
        ></textarea>
        <button className="bg-green w-24 h-9 rounded uppercase transition hover:scale-110 " type="submit" value="Send">
          envoyer
        </button>
        <div>
          <input
            type="checkbox"
            onChange={handleChange}
            id="rgpd"
            name="RGPD"
          />
          <label htmlFor="rgpd">
            J'ai lu et accepte la{" "}
            <Link href="/RGPD">politique de confidentialité</Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Contact;
