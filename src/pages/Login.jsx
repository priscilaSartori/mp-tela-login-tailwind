import { useState } from 'react';
import CeuEstrelado from '../images/CeuEstrelado.png';
import Ellipse from '../images/Ellipse.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [buttonDisabled, setButtonDisabled] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email && password) {
      navigate('bemVindo');
    }
  };

  return (
    <div className={`flex flex-row items-center justify-center p-24 bg-gradient-to-r from-zinc-950 to-zinc-900`}>
      <div className={`flex flex-row justify-center items-center space-y-8 bg-black overflow-hidden rounded-3xl p-0`}>
        <div className={`flex flex-col justify-center items-center m-10`}>
          <div className={`flex flex-row`}>
            <h1 className={`text-3xl font-black text-white `}>Faça seu login</h1>
            <img src={Ellipse} className='relative m-1 py-3' width={12} height={12} alt="" />
          </div>
          <form 
            className={`flex flex-col justify-center items-center w-max h-max bg-black rounded-2xl" action="#" method="POST`}
            onSubmit={ handleSubmit }
          >           
            <div>
              <label htmlFor="email" className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-8`}>
                  Email address
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
              <label htmlFor="password" className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-2`}>
                Password
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
            <div className={`flex items-end justify-end w-full mt-6 mb-6 underline`}>
              <a href="/redefinir" className={`text-zinc-500 text-right text-sm`}>Esqueci minha senha</a>
            </div>
            <button
              type="submit"
              // disabled={ buttonDisabled }
              className={`w-80 h-12 px-4 py-2 mb-8 rounded-lg font-bold text-white focus:outline-none bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]`}
            >
              Entrar
            </button>
            <p className={`flex items-end justify-end w-full mt-2 mb-2 underline text-zinc-500 text-right text-sm`}>
              <a href="/cadastro">Ainda não tenho uma conta</a>
            </p>
          </form>
        </div>
        <div className={`flex justify-center items-center bg-black overflow-hidden`}>
          <img src={CeuEstrelado} className={`relative top-0 opacity-20 object-cover overflow-hidden`} width={406} height={454} alt="text" />
        </div>
      </div>
    </div>
  )
}
