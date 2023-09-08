"use client";

import React, {useState} from "react";
import NewsLatterBox from "./NewsLatterBox";
import nodemailer from 'nodemailer';
import { toast } from 'react-toastify';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    if(!email || !validateEmail(email)) {
      toast.error('Email inválido');
      setLoading(false);
      return;
    }

    if(!name) {
      toast.error('Nome inválido');
      setLoading(false);
      return;
    }

    if(!message) {
      toast.error('Mensagem inválida');
      setLoading(false);
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email,
        message,
        name
      })
    })

    if(res.status === 200) {
      toast.success('Mensagem enviada com sucesso');
      setEmail('');
      setMessage('');
      setName('');
      setLoading(false);
    } else {
      toast.error('Erro ao enviar mensagem');
      setLoading(false);
    }
  }


  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Deseja entrar em contato?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </p>
              <form className="relative"
                onSubmit={handleSubmit}
              >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Seu nome
                      </label>
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Seu email
                      </label>
                      <input
                        type="email"
                        placeholder="Digite seu email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Escreva detalhes sobre o que deseja
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Digite sua mensagem"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    disabled={loading}
                    >
                      {
                        loading ? 'Enviando...' : 'Entrar em contato'
                      }
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
