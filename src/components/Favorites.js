import React from 'react'
import PuppyCard from './PuppyCard'

function Favorites(props) {

    const makeFavoriteCards = props.favorites.map(favoritePuppy => {
        return <PuppyCard key={`favorite-${favoritePuppy.id}`} puppy={favoritePuppy} />
    })

    return (
        <div className="favorites">
            Favorites
            {makeFavoriteCards}
        </div>
    )
}

export default Favorites;