import React from 'react';

const Register=()=>{
    return(
        <>
         <div className="md:my-16 my-8 md:mx-auto md:max-w-[1186px]">
        <div className="container ">
          <div className="bg-[#FF6B58] banner md:py-10 py-6 md:px-10 px-5 rounded-lg flex justify-between items-center shadow-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Register your
              <br /> child today!
            </h1>
            <button className="font-semibold px-3 md:px-6 lg:py-3 py-2 bg-white rounded">
              Request A quote
            </button>
          </div>
        </div>
      </div>
        </>
    );
};

export default Register;