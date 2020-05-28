import React from "react";
import outline from "../images/outline.png";
import coloredin from "../images/coloredin.png";

const CustomerSurvey = () => {
  let count = 0;
  const ratingEquals = (e) => {
    count++;
    if (count <= 1) {
      let rating = e.target.id;
      for (let i = 0; i < rating; i++) {
        let imageOfStar = document.getElementById(`${i + 1}`);
        imageOfStar.src = coloredin;
      }
    } else {
      alert("You have already rated once!");
    }
  };

  const coloringHover = (e) => {
    let star = document.getElementsByClassName("star");
    let star2 = document.getElementsByClassName("star2");
    let target = e.target.closest('img');
    if (!target || target === null) {
      star[0].style.display = "flex";
      star[1].style.display = "flex";
      star[2].style.display = "flex";
      star[3].style.display = "flex";
      star[4].style.display = "flex";
      star2[0].style.display = "none";
      star2[1].style.display = "none";
      star2[2].style.display = "none";
      star2[3].style.display = "none";
      star2[4].style.display = "none";
    }else if(target.id === '1'){
      star[0].style.display = "none";
      star[1].style.display = "flex";
      star[2].style.display = "flex";
      star[3].style.display = "flex";
      star[4].style.display = "flex";
      star2[0].style.display = "flex";
      star2[1].style.display = "none";
      star2[2].style.display = "none";
      star2[3].style.display = "none";
      star2[4].style.display = "none"
    } else  if (target.id === '2') {
      star[0].style.display = "none";
      star[1].style.display = "none";
      star[2].style.display = "flex";
      star[3].style.display = "flex";
      star[4].style.display = "flex";
      star2[0].style.display = "flex";
      star2[1].style.display = "flex";
      star2[2].style.display = "none";
      star2[3].style.display = "none";
      star2[4].style.display = "none"
    } else if (target.id === '3') {
      star[0].style.display = "none";
      star[1].style.display = "none";
      star[2].style.display = "none";
      star[3].style.display = "flex";
      star[4].style.display = "flex";
      star2[0].style.display = "flex";
      star2[1].style.display = "flex";
      star2[2].style.display = "flex";
      star2[3].style.display = "none";
      star2[4].style.display = "none"
    } else if (target.id === '4') {
      star[0].style.display = "none";
      star[1].style.display = "none";
      star[2].style.display = "none";
      star[3].style.display = "none";
      star[4].style.display = "flex";
      star2[0].style.display = "flex";
      star2[1].style.display = "flex";
      star2[2].style.display = "flex";
      star2[3].style.display = "flex";
      star2[4].style.display = "none";
    } else if (target.id === '5'){
      star[0].style.display = "none";
      star[1].style.display = "none";
      star[2].style.display = "none";
      star[3].style.display = "none";
      star[4].style.display = "none";
      star2[0].style.display = "flex";
      star2[1].style.display = "flex";
      star2[2].style.display = "flex";
      star2[3].style.display = "flex";
      star2[4].style.display = "flex";
    }else{
      return;
    }
  };
  let currentElement = null;
  const noColorHover = (e) => {
    let star = document.getElementsByClassName("star");
    let star2 = document.getElementsByClassName("star2");
    let target = e.target.closest('img');
    if (currentElement) {
      star[0].style.display = "flex";
      star[1].style.display = "flex";
      star[2].style.display = "flex";
      star[3].style.display = "flex";
      star[4].style.display = "flex";
      star2[0].style.display = "none";
      star2[1].style.display = "none";
      star2[2].style.display = "none";
      star2[3].style.display = "none";
      star2[4].style.display = "none";
    }else if(!target){
      star[0].style.display = "flex";
      star[1].style.display = "flex";
      star[2].style.display = "flex";
      star[3].style.display = "flex";
      star[4].style.display = "flex";
      star2[0].style.display = "none";
      star2[1].style.display = "none";
      star2[2].style.display = "none";
      star2[3].style.display = "none";
      star2[4].style.display = "none";
    }else if(!e.target.contains(target)){
      star[0].style.display = "flex";
      star[1].style.display = "flex";
      star[2].style.display = "flex";
      star[3].style.display = "flex";
      star[4].style.display = "flex";
      star2[0].style.display = "none";
      star2[1].style.display = "none";
      star2[2].style.display = "none";
      star2[3].style.display = "none";
      star2[4].style.display = "none";
    }else if(target.id === '1'){
      star[0].style.display = "flex";
      star2[0].style.display = "none";
    } else  if (target.id === '2') {
      star[0].style.display = "flex";
      star[1].style.display = "flex";
      star2[0].style.display = "none";
      star2[1].style.display = "none";
    } else if (target.id === '3') {
      star[0].style.display = "flex";
      star[1].style.display = "flex";
      star[2].style.display = "flex";
      star2[0].style.display = "none";
      star2[1].style.display = "none";
      star2[2].style.display = "none";
    } else if (target.id === '4') {
      star[0].style.display = "flex";
      star[1].style.display = "flex";
      star[2].style.display = "flex";
      star[3].style.display = "flex";
      star2[0].style.display = "none";
      star2[1].style.display = "none";
      star2[2].style.display = "none";
      star2[3].style.display = "none";
    } else if (target.id === '5'){
      star[0].style.display = "flex";
      star[1].style.display = "flex";
      star[2].style.display = "flex";
      star[3].style.display = "flex";
      star[4].style.display = "flex";
      star2[0].style.display = "none";
      star2[1].style.display = "none";
      star2[2].style.display = "none";
      star2[3].style.display = "none";
      star2[4].style.display = "none";
    }else{
      return;
    }
  };

  return (
    <div className="rating-system" onMouseOver={(e) => coloringHover(e)} onMouseLeave={(e)=> noColorHover(e)}>
      <div>
        <img 
          className="star"
          alt="star"
          id="1"
          src={outline}
        />
      </div>
      <div>
        <img
          className="star2"
          onClick={ratingEquals}
          alt="star"
          id="1"
          src={coloredin}
        />
      </div>
      <div>
        <img
          className="star"
          alt="star"
          id="2"
          src={outline}
        />
      </div>
      <div>
        <img
          className="star2"
          onClick={ratingEquals}
          alt="star"
          id="2"
          src={coloredin}
        />
      </div>
      <div onMouseEnter={() =>{let onEntering = true}}>
        <img
          className="star"
          alt="star"
          id="3"
          src={outline}
        />
      </div>
      <div>
        <img
          className="star2"
          onClick={ratingEquals}
          alt="star"
          id="3"
          src={coloredin}
        />
      </div>
      <div>
        <img
          className="star"
          alt="star"
          id="4"
          src={outline}
        />
      </div>
      <div>
        <img
          className="star2"
          onClick={ratingEquals}
          alt="star"
          id="4"
          src={coloredin}
        />
      </div>
      <div>
        <img
          className="star"
          alt="star"
          id="5"
          src={outline}
        />
      </div>
      <div>
        <img
          className="star2"
          onClick={ratingEquals}
          alt="star"
          id="5"
          src={coloredin}
        />
      </div>
    </div>
  );
};

export default CustomerSurvey;
