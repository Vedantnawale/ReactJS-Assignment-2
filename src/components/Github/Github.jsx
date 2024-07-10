import React from 'react'
import './Github.css'
import { Link } from 'react-router-dom'

const Github = ({ name, image, id }) => {
    return (
        <div className='github'>
            <Link to={`/github/${id}`}>
                <div className='github-name'>
                    {name}
                </div>
                <div>
                    <img className='github-image' src={image} />
                </div>
            </Link>
        </div>
    )
}

export default Github