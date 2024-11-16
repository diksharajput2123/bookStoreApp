import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='max-w-screen-2xl container mb-10 mx-auto md:px-20 px-4'>
        <div className=" mt-20  items-center justify-center text-center">
            <h1 className="font-bold text-2xl md:text-4xl">
            Discover the Minds Behind the <span className='text-pink-500'>Stories!!</span>
            </h1>
        </div>
        <div className="md:flex">
        <div className="mt-16 card card-compact bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
            <figure className='mt-4'>
              <img
                src="https://manybooks.net/sites/default/files/styles/220x330sc/public/author-images/ai-smilessa.jpg?itok=IZAm5Zlk"
                alt="Samuel Smiles" />
            </figure>
            <div className=" card-body items-center justify-center text-center">
              <h2 className="card-title">Samuel Smiles</h2>
              <Link to="/authors" className="underline text-blue-500">about</Link>
              <div className="card-actions justify-end">
               <br/> 
              </div>
            </div>
        </div> 
        <div className=" mt-16 card card-compact bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
            <figure className='mt-4'>
              <img
                src="https://manybooks.net/sites/default/files/styles/220x330sc/public/author-images/ai-wellshg.jpg?itok=9snntWT8"
                alt="H.G. Wells" />
            </figure>
            <div className=" card-body items-center justify-center text-center">
              <h2 className="card-title">H.G. Wells</h2>
              <Link to="/authors" className="underline text-blue-500">about</Link>
              <div className="card-actions justify-end">
               <br/> 
              </div>
            </div>
        </div> 
        <div className=" mt-16 card card-compact bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
            <figure className='mt-4'>
              <img
                src="https://manybooks.net/sites/default/files/styles/220x330sc/public/author-images/ai-ruskinjo.jpg?itok=YyZW3VLM"
                alt="John Ruskin" />
            </figure>
            <div className=" card-body items-center justify-center text-center">
              <h2 className="card-title">John Ruskin</h2>
              <Link to="/authors" className="underline text-blue-500">about</Link>
              <div className="card-actions justify-end">
               <br/> 
              </div>
            </div>
        </div> 
        <div className=" mt-16 card card-compact bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
            <figure className='mt-4'>
              <img
                src="https://manybooks.net/sites/default/files/styles/220x330sc/public/author-images/ai-kiplingr.jpg?itok=XYaB9neC"
                alt="Rudyard Kipling" />
            </figure>
            <div className=" card-body items-center justify-center text-center">
              <h2 className="card-title">Rudyard Kipling</h2>
              <Link to="/authors" className="underline text-blue-500">about</Link>
              <div className="card-actions justify-end">
               <br/> 
              </div>
            </div>
        </div>  
        </div>
    </div>
  )
}

export default About;