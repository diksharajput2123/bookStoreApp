import React from "react";
import banner from "../../public/Banner.jpg"
import { Link } from "react-router-dom";
function Banner() {
    return(
        <>
          <div className="w-full h-[400px] md:h-[30rem] bg-[url('https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5919.jpg?t=st=1731852164~exp=1731855764~hmac=d7e7571f44f303d489c061f7aad036944e5379e5047342c2638780f67618da7b&w=996')] bg-cover bg-center  "> 
            <div className="py-32 md:py-44">
              <h1 className="text-pink-950 text-5xl md:text-7xl  font-bold text-center  ">LOTS OF FREE BOOKS AVAILABLE... </h1>
              <h3 className="py-10 md:py-20 text-black text-2xl md:text-4xl font-semibold text-center">Welcome to your friendly bookVerse website!!....</h3>
            </div>
            
          </div> 
          {/* <div className="max-w-screen-2x1 container flex flex-col md:flex-row my-10 bg-black bg-cover "> */}

          {/* <div className="bg-blue-500"> */}
                {/* <img src="https://img.freepik.com/free-photo/pile-books-bookstore_23-2148213789.jpg?ga=GA1.1.1014718278.1731619252&semt=ais_hybrid" className="py-4  w-full h-fit  " alt="books"/> */}
            {/* </div> */}
          {/* </div> */}
          <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
            <div className="order-1 md:order-1 w-full md:w-1/2 mt-1 md:mt-33">
                <div className="space-y-10">
                <h1 className="text-4xl font-bold">Find Your Next Favorite Read - Explore <span className="text-pink-500">Book Verse!!!</span>
                </h1>
                <p>
                Welcome to bookVerse, an online store where you can buy books, explore a wide range of genres and even read books for free. To access our collection of paid books, simply sign in to your account. Start your reading journey with us!
                </p>
                <p>
                {/* Enter your email below to subscribe to our notifications and stay updated! */}
                </p>
                {/* <label className="input input-bordered flex items-center gap-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
                </label> */}
                </div>

                <Link to="/UnlockMore">
                <button className="btn mt-8
                btn-secondary">Explore More</button>
                </Link>
            </div>
            <div className="order-2 md:order-2 w-full md:w-1/2 md:flex md:justify-center md:items-center">
                <img src={banner} className="py-4 w-80 h-90 md:w-200 md:h-100  " alt=""/>
            </div>
          </div>
        </>
    );
}

export default Banner;