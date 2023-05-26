import React from 'react'
import { useState } from 'react';
import Ellipse from '../images/Ellipse.png';
import { useNavigate } from 'react-router-dom';
import CeuEstrelado from '../images/CeuEstrelado.png';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (nome && email && password) {
      navigate('/bemVindo');
    }
  };

  return (
    <div className={`flex flex-row items-center justify-center p-20 bg-gradient-to-r from-zinc-950 to-zinc-900`}>
    <div className={`flex flex-row justify-center items-center space-y-8 bg-black overflow-hidden rounded-3xl p-0`}>
      <div className={`flex justify-center items-center bg-black overflow-hidden`}>
        <img src={CeuEstrelado} className={`relative top-0 opacity-20 object-cover overflow-hidden`} width={406} height={454} alt="text" />
      </div>
      <div className={`flex flex-col justify-center items-center m-10`}>
        <div className={`flex flex-row`}>
          <h1 className={`text-3xl font-black text-white `}>Cadastro</h1>
          <img src={Ellipse} className='relative m-1 py-3' width={12} height={12} alt="" />
        </div>
        <form 
          className={`flex flex-col justify-center items-center w-max h-max bg-black rounded-2xl" action="#" method="POST`}
          onSubmit={ handleSubmit }
        > 
          <div>
            <label htmlFor="text" className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-6`}>
                Nome Completo
            </label>
            <input
              id="text"
              name="text"
              type="text"
              autoComplete="text"
              required
              className={`w-80 h-12 px-4 py-2 mt-8 mb-2 rounded-lg bg-zinc-950 text-white`}
              onChange={ (e) => setNome(e.target) }
            />
          </div>   
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
          <div>
            <label htmlFor="password" className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-6`}>
              Crie uma senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={`w-80 h-12 px-4 py-2 mt-8 mb-2 rounded-lg bg-zinc-950 text-white`}
              onChange={ (e) => setPassword(e.target) }
            />
          </div>
          <button
            type="submit"
            className={`w-80 h-12 px-4 py-2 mb-6 mt-6 rounded-lg font-bold text-white focus:outline-none bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]`}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
