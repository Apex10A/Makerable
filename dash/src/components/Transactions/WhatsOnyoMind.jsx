import React, { useState } from 'react';
import { iconsImgs } from "../../utils/images";
import { ToastContainer, toast } from 'react-toastify';
import './Transactions.css'
import 'react-toastify/dist/ReactToastify.css';

const WhatsOnyoMind = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handlePostButtonClick = () => {
    if (inputText.length >= 3) {
      // Valid input, proceed with posting
      console.log('Posting:', inputText);
      toast.success('Post successful!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close the notification after 3 seconds
      });
  
      // You can reset the input or perform other actions here
      setInputText('');
  
    } else {
      // Invalid input, show a toast notification
      toast.error('Please enter at least 3 characters.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close the notification after 3 seconds
      });
    }
  };

  return (
    <div className="mb-4 mx-3">

      <div className="container-md p-4 rounded shadow">
        <textarea
          className="w-100 bg-light text-dark py-4 px-5 rounded mb-4 placeholder-text-dark form-control"
          placeholder="What's on your mind?"
          id='textarea'
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <div className="d-flex justify-content-between gap-3">
          <div className="d-flex gap-3">
            {/* ... (existing icons) */}
          </div>

          <div>
            <button
              className="btn btn-warning px-4 py-2 rounded"
              onClick={handlePostButtonClick}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default WhatsOnyoMind;
