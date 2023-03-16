import React, { useState } from "react";
import { BiWifi } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";

export default function Feedback() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  const [rank, setRanking] = useState(0);
  const [move, setMover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`you typed : ${text}`);
    setText("");
    setRating(0);
    setRanking(0);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const changePage = () => {
    setShow(!show);
  };

   const handleClick = (value) => {
     setRating(value);
   };
   const handleReverse = (value) => {
     setRanking(value);
   };

  return show ? (
    <div className=" w-[600px] bg-white absolute bottom-5 right-5 rounded-md shadow-lg">
      <div className="flex justify-between items-center p-4 border-b-2">
        <div className="flex justify-between items-center">
          <BiWifi size={24} />
          <h2 className="ml-3">Feedback</h2>
        </div>
        <RxCross1 size={24} onClick={changePage} />
      </div>
      <div className="p-4">
        <p>
          Your feedback is valuable to us. It heps us to improve our services.
        </p>
        <div className="flex justify-between items-center mt-5">
          <h3>Ease of using</h3>
          <fieldset className="flex">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => handleClick(ratingValue)}
                    className="hidden"
                  />
                  <AiFillStar
                    className="star"
                    color={
                      ratingValue <= (hover || rating) ? "#ffc107" : "#ddd"
                    }
                    size={24}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              );
            })}
          </fieldset>
        </div>
        <div className="flex justify-between items-center mt-5">
          <h3>Navigation</h3>
          <fieldset className="flex border-none">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating-2"
                    value={ratingValue}
                    onClick={() => handleReverse(ratingValue)}
                    className="hidden float-right"
                  />
                  <AiFillStar
                    className="star"
                    color={
                      ratingValue <= (move || rank) ? "#ffc107" : "#ddd"
                    }
                    size={24}
                    onMouseEnter={() => setMover(ratingValue)}
                    onMouseLeave={() => setMover(0)}
                  />
                </label>
              );
            })}
          </fieldset>
        </div>
      </div>
      <div className="grid p-4">
        <label htmlFor="recommend">Any special recommendations</label>
        <textarea
          className="border border-black mt-4 p-2"
          name="feedback"
          id="recommend"
          rows="5"
          value={text}
          onChange={handleChange}
          placeholder="Type here ..."
        ></textarea>
      </div>
      <div className="flex items-center justify-end p-4">
        <button className="text-violet-600" type="submit">
          Maybe later
        </button>
        <button
          className="ml-5 px-5 py-1 rounded-md bg-violet-600 text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  ) : (
    <BasicPage />
  );
}

function BasicPage() {
    const [show, setShow] = useState(true);
    const handlePage = () => {
        setShow(!show);
    }
  return show ? (
    <div className="relative">
      <h1 
        className="flex items-center absolute top-10 cursor-pointer 
        ml-10 bg-violet-500 w-[max-content] p-2 rounded text-white"
        onClick={handlePage}
        >
        Feedback Form
      </h1>
    </div>
    ) : (
    <Feedback/>
    );
}
