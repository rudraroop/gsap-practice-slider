import React, {useRef, useEffect, useState} from "react";
import gsap from "gsap";
import './App.css';

import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg"

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

function App() {

  const [contentState, setContentState] = useState(testimonials);
  const [buttonClicked, setButtonClicked] = useState(false);

  const contentRef = useRef();
  const imageRef = useRef();

  const showPrev = () => {

    if(!buttonClicked){

      setButtonClicked(true);
     
      setContentState(current => 
        {return [current[2], current[0], current[1]]});
      
      gsap.from(imageRef.current.children[1], {duration: 0.8, scale: 1.2, x: -340, ease:"power3.out"});
      gsap.from(imageRef.current.children[2], {duration: 0.8, x: -340, ease:"power3.out"});
      gsap.from(contentRef.current.children[1], {duration: 0.8, opacity: 0});

      setTimeout(() => {setButtonClicked(false)}, 780);
    }

    else{
      return;
    }
  }

  const showNext = () => {
    if(!buttonClicked){

      setButtonClicked(true);

      setContentState(current => {
        return [current[1], current[2], current[0]]});
      
      gsap.from(imageRef.current.children[0], {duration: 0.8, x: 340, ease:"power3.out"});
      gsap.from(imageRef.current.children[1], {duration: 0.8, x: 340, scale: 1.2, ease:"power3.out"});
      gsap.from(contentRef.current.children[1], {duration: 0.8, opacity: 0});

      setTimeout(() => {setButtonClicked(false)}, 780);
    }
    else{
      return;
    }
  }

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="arrows left" onClick={showPrev}>
          <span>
            <img src={leftArrow} alt="left-arrow"></img>
          </span>
        </div>

        <div className="inner">
          <div className="t-image">

            <ul ref={imageRef}>
              
              <li>
                <img src={contentState[0].image} alt={contentState[0].name}></img>
              </li>
              <li>
                <img src={contentState[1].image} alt={contentState[0].name}></img>
              </li>
              <li>
                <img src={contentState[2].image} alt={contentState[0].name}></img>
              </li>

            </ul>

          </div>

          <div className="t-content">

            <ul ref={contentRef}>

              <li>
                <div className="content-inner">
                  <p className="quote">{contentState[0].quote}</p>
                  <h3 className="name">{contentState[0].name}</h3>
                  <h4 className="title">{contentState[0].title}</h4>
                </div>
              </li>

              <li>
                <div className="content-inner">
                  <p className="quote">{contentState[1].quote}</p>
                  <h3 className="name">{contentState[1].name}</h3>
                  <h4 className="title">{contentState[1].title}</h4>
                </div>
              </li>

              <li>
                <div className="content-inner">
                  <p className="quote">{contentState[2].quote}</p>
                  <h3 className="name">{contentState[2].name}</h3>
                  <h4 className="title">{contentState[2].title}</h4>
                </div>
              </li>

            </ul>

          </div>

        </div>

        <div className="arrows right" onClick={showNext}>
          <span>
            <img src={rightArrow} alt="right-arrow"></img>
          </span>
        </div>

      </div>
    </div>
  );
}

export default App;
