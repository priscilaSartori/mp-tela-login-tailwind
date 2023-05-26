import React from 'react'
import Ellipse from '../images/Ellipse.png';

export default function BemVindo() {

  return (
    <div className={`flex flex-row items-center justify-center p-24 bg-gradient-to-r from-zinc-950 to-zinc-900`}>
    <div className={`flex flex-row justify-center items-center p-8 space-y-8 bg-black overflow-hidden rounded-3xl p-0`}>
      <div className={`flex flex-col justify-center items-center m-10`}>
        <div className={`flex flex-row`}>
          <h1 className={`text-3xl font-black text-white `}>Bem Vindo</h1>
          <img src={Ellipse} className='relative m-1 py-3' width={12} height={12} alt="" />
        </div>
        <div>
          <p className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-6`}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-6`}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-6`}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-6`}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>           
          <p className={`text-zinc-500 text-left flex items-start justify-start w-full -mb-6 mt-6`}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
