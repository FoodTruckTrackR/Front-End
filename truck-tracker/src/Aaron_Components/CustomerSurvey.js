import React from 'react';
import outline from '../images/outline.png'
import coloredin from '../images/coloredin.png'

const CustomerSurvey = () => {
let count = 0;
const ratingEquals = e => {
count ++
if (count <= 1){
let rating = e.target.id
for(let i = 0; i < rating; i++){
    let imageOfStar = document.getElementById(`${i +1}`);
    imageOfStar.src=(coloredin)
    console.log(imageOfStar)
}
}else{
    alert("You have already rated once!")
}
}


    return(
        <form className="rating-system">
            <div>
                <img  onClick={ratingEquals} alt='star' id='1'src={outline} />
            </div>
            <div>
            <img onClick={ratingEquals} alt='star' id='2' src={outline} />
            </div>
            <div>
            <img onClick={ratingEquals} alt='star' id='3' src={outline} />
            </div>
            <div>
            <img onClick={ratingEquals} alt='star' id='4' src={outline} />
            </div>
            <div>
            <img onClick={ratingEquals} alt='star' id='5' src={outline} />
            </div>
        </form>
    )
}

export default CustomerSurvey;