import React from 'react'
import { useState } from 'react';
import Ellipse from '../images/Ellipse.png';
import { useNavigate } from 'react-router-dom';
import CeuEstrelado from '../images/CeuEstrelado.png';

export default function Redefinir() {
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (email) {
      alert(`Redefinição enviada com sucesso. Instruções para fazer uma nova senha foram enviadas para o e-mail cadastrado.`)
      navigate('/');
    }
  };

  return (
    <div className={`flex flex-row items-center justify-center p-24 bg-contain bg-gradient-to-r from-zinc-950 to-zinc-900`}>
      <div className={`flex flex-row justify-center items-center space-y-8 bg-black overflow-hidden rounded-3xl p-9 m-12`}>
        <div className={`flex justify-center items-center bg-black overflow-hidden`}>
          <img src={CeuEstrelado} className={`relative top-0 opacity-20 object-cover overflow-hidden`} width={406} height={454} alt="text" />
        </div>
        <div className={`flex flex-col justify-center items-center m-10`}>
          <div className={`flex flex-row`}>
            <h1 className={`text-3xl font-black text-white `}>Redefinir senha</h1>
            <img src={Ellipse} className='relative m-1 py-3' width={12} height={12} alt="" />
          </div>
          <form 
            className={`flex flex-col justify-center items-center w-max h-max bg-black rounded-2xl" action="#" method="POST`}
            onSubmit={ handleSubmit }
          >       
            <div>
              <label htmlFor="email" className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-6`}>
                  Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`w-80 h-12 px-4 py-2 mt-8 mb-2 rounded-lg bg-zinc-950 text-white`}
                onChange={ (e) => setEmail(e.target) }
              />
            </div>
            <button
              type="submit"
              className={`w-80 h-12 px-4 py-2 mb-6 mt-6 rounded-lg font-bold text-white focus:outline-none bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]`}
            >
              Enviar
            </button>
           </form>
        </div>
      </div>
    </div>
  )
}
