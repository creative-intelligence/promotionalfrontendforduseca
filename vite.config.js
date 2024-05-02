import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


/*

import React from 'react';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const Desk = () => {
 return (
   <div className="bg-gray-100 h-screen flex items-center justify-center">
     <div className="container mx-auto px-4 py-12 flex justify-between items-start">
       <div className="max-w-lg">
         <h1 className="text-5xl font-semibold mb-4">Welcome to</h1>
         <h1 className="text-5xl font-semibold mb-8">Just Breathe Kids Care</h1>
         <p className="text-lg mb-8">
           Where luxury and accessibility converge in school transportation. Our commitment to inclusivity ensures that every student, including those with disabilities, travels with comfort and dignity. With a fully ADA-compliant fleet and specialized services, we prioritize accessibility features such as wheelchair ramps and trained staff to assist students with varying needs.
         </p>
         <div className="flex items-center space-x-8 mb-8">
           <AiFillApple className="text-3xl" />
           <div>
             <p className="text-sm">Download on the</p>
             <p className="text-sm">App Store</p>
           </div>
         </div>
         <div className="flex items-center space-x-8">
           <AiFillAndroid className="text-3xl" />
           <div>
             <p className="text-sm">GET IT ON</p>
             <p className="text-sm">Google Play</p>
           </div>
         </div>
       </div>
       <div className="relative">
         <img className="w-full h-auto max-w-xl" src="img/b2aa0d25d2c3656e4d7f93953fef3a0a.png" alt="Bus" />
       </div>
     </div>
   </div>
 );
}

export default Desk;

*/