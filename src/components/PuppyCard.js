import React from 'react'

function PuppyCard(props) {

    const handleClick = () => {
        props.addPuppyToFavorites(props.puppy)
    }

    return(
        <div className="puppy-card" onClick={handleClick}>
            <h2>{props.puppy.name}</h2>
            <img className="puppy-image" alt="puppy" src={props.puppy.imageURL}></img>
            <h3>{props.puppy.breed}</h3>
            <h3>{props.puppy.description}</h3>
        </div>
    )
}

export default PuppyCard;