import React from 'react'

function PuppyCard(props) {
    return(
        <div className="puppy-card">
            <h2>{props.puppy.name}</h2>
            <img className="puppy-image" alt="puppy" src={props.puppy.imageURL}></img>
            <h3>{props.puppy.breed}</h3>
            <h3>{props.puppy.description}</h3>
        </div>
    )
}

export default PuppyCard;