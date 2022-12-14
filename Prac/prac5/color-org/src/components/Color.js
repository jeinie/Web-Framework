import React from "react";
import StarRating from './StarRating';

const Color = function({title, color, rating, onRemove=f=>f, onRate=f=>f}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={ () => onRemove(id) }>
                <FaTrash/>
            </button>
            <div style={{backgroundColor: color, height:50}}/>
            <StarRating 
                selectedStars={rating}
                onRate={rating => onRate(id, rating)}/>
        </section>
    )
}

export default Color;