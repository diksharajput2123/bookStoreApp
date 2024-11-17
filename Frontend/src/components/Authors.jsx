import React from 'react'
import { Link } from 'react-router-dom';

function Authors() {
  return (
    <>  
        <div className='max-w-screen-2xl container mb-10 mx-auto md:px-20 px-4'>
        <div className='mt-20 items-center justify-center text-center '>
        
            <h1 className='font-bold underline text-pink-500'>Samuel Smiles</h1>
            <p>
            Samuel Smiles (1812–1904) was a Scottish author and reformer, best known for his book *Self-Help*, which promoted the virtues of hard work, perseverance, and self-reliance. Often called the "father of personal development," his works inspired readers to achieve success through moral character and determination. Smiles also advocated for social reform and education as pathways to progress.
            </p>
            <br/>
            <h1 className='font-bold underline text-pink-500'>H.G. Wells</h1>
            <p>
            H.G. Wells (1866–1946) was an English writer renowned as one of the pioneers of science fiction, with classics like *The War of the Worlds* and *The Time Machine*. Beyond fiction, he wrote extensively on history, politics, and social issues, envisioning a future shaped by science and human progress. His works remain influential for their imagination and commentary on society. 
            </p>
            <br/>
            <h1 className='font-bold underline text-pink-500'>John Ruskin</h1>
            <p>
            John Ruskin (1819–1900) was a prominent English art critic, writer, and social thinker, celebrated for his works on art, architecture, and social reform. He emphasized the connection between nature, art, and morality in influential books like *The Seven Lamps of Architecture* and *Modern Painters*. Ruskin's ideas profoundly impacted Victorian culture and continue to inspire discussions on aesthetics and ethics.
            </p>
            <br/>
            <h1 className='font-bold underline text-pink-500'>Rudyard Kipling</h1>
            <p>
            Rudyard Kipling (1865–1936) was an English author and poet, best known for his timeless works such as *The Jungle Book* and the poem *If—*. Born in British India, his writings often reflected themes of imperialism, adventure, and cultural exchange. Kipling was awarded the Nobel Prize in Literature in 1907, becoming its youngest recipient at the time. 
            </p>
        </div>
        <div className=" mt-6  flex justify-center text-center">
        <Link to="/aboutAuthors" className=" btn btn-sm bg-pink-500  btn-ghost absolute top-15"
              onClick={()=>document.getElementById("my_modal_3").closest()}
              >Back</Link>
        </div>
        </div>
        
    </>
  )
}

export default Authors;