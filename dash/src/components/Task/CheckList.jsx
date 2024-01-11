import React, { useState } from 'react';

const CheckList = () => {
  const [items, setItems] = useState([
    { id: 2, text: 'Apply for a frontend job for the 899th time', completed: false },
    { id: 3, text: 'Learn Typescript to boost my selection chances', completed: false },
    { id: 4, text: 'Transfer $100k to my younger ones', completed: false },
    { id: 5, text: 'Visit my Grandmother in Dubai', completed: false },
    { id: 6, text: 'Play mini militia and cod with friends and families', completed: false },
  ]);

  const toggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
      <div className="container-lg mx-auto mt-5">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-md font-bold opacity-60">Task Progress: 1 done, 4 left</p>
            </div>
          </li>
          {items.map((item) => (
            <li key={item.id} className="list-group-item bg-dark d-flex justify-content-between px-3 py-2 mb-2">
              <div className="d-flex opacity-70 align-items-center mb-2 text-lg pb-3">
                <input
                  type="checkbox"
                  className="form-check-input cursor-pointer mr-2"
                  checked={item.completed}
                  onChange={() => toggleItem(item.id)}
                />
                <span className={`text-white ${item.completed ? 'text-decoration-line-through text-gray-500' : ''}`}>
                  {item.text}
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <div className="d-flex gap-2 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="green" viewBox="0 0 512 512">
                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                    </svg>
                    <p className="text-sm">Edit</p>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" fill="red" className="opacity-70" viewBox="0 0 448 512">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                    </svg>
                    <p className="text-sm">Delete</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default CheckList;
