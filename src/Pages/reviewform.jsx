
import React, { useState } from 'react';  
// import StarRating from './starrating';   
import { Rate } from 'antd';

const ReviewForm = () => {  
  const [name, setName] = useState('');  
  const [review, setReview] = useState('');  
  const [rating, setRating] = useState(0);
  const handleSubmit = (e) => {  
    e.preventDefault();  
    console.log({ name, review, rating });  
    setName('');  
    setReview('');  
    setRating(5); 
  };  
  const handleRatingChange = (newRating) => {
    setRating(newRating); 
  };


  return (  
    <div className="max-w-md mx-auto p-4 rounded-lg ">  
      <h2 className="text-lg font-semibold mb-4">Doctor Review Form</h2>  
      <form onSubmit={handleSubmit}>  
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="name">Your Name</label>  
          <input  
            type="text"  
            id="name"  
            value={name}  
            onChange={(e) => setName(e.target.value)}  
            className="w-full px-3 py-2 border border-gray-300 rounded-md"  
            required  
          />  
        </div>  
        <label className="block mb-1" htmlFor="review">Rate the session :</label>  
            <Rate/>
        <div className="mb-4">  
          <label className="block mb-1" htmlFor="review">Your Review</label>  
          <textarea  
            id="review"  
            value={review}  
            onChange={(e) => setReview(e.target.value)}  
            className="w-full px-3 py-2 border border-gray-300 rounded-md"  
            rows="4"  
            required  
          />  
        </div>  

        <button  
          type="submit"  
          className="w-full bg-[#4F9451] text-white py-2 rounded-md hover:bg-green-500 transition duration-200"  
        >  
          Submit Review  
        </button>  
      </form>  
    </div>  
  );  
};  

export default ReviewForm;