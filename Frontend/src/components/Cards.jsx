import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="m-4 my-3 p-1 ">
        <div className="card  bg-base-100 w-90 shadow-xl p-3 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className=" badge bg-pink-500">{item.author}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs.{item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]
              hover:bg-pink-500 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;