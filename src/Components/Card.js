import React from 'react'

function Card (props){
    console.log(props)
    const {info} = props
    const {id, name, city, country, employer, title, favoriteMovies} = info
    return (
        <div className='card-background'>
            <div className='white-card'>
                <div className='name-id'>
                    <h1 className='name'>{name.first} {name.last}</h1>
                    <h1>{id}/25</h1>
                </div>
                <div className='info'>
                    <h4 className='info-p'>From:</h4>
                    <p>{city} {country}</p>
                </div>
                <div className='info'>
                    <h4 className='info-p'>Title: </h4>
                    <p>{title}</p>
                </div>
                <div className='info'>
                    <h4 className='info-p'>Employer:</h4>
                    <p>{employer}</p>
                </div>

                <div className='movie-list'>
                    <h4 >Favorite Movies:</h4>
                    <ol className='movie'>
                        {favoriteMovies.map((ele, i) => (
                            <li key={i}>{ele}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Card