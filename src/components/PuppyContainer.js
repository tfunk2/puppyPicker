import React from 'react'
import PuppyCard from './PuppyCard'

function PuppyContainer(props) {

    const makePuppyCards = props.puppies.map(puppy => {
        return <PuppyCard 
            addPuppyToFavorites={props.addPuppyToFavorites} 
            key={puppy.id} 
            puppy={puppy}
        />
    })

    return  (
        <div className="puppy-container">
            {makePuppyCards}
        </div>
    )
}

export default PuppyContainer;