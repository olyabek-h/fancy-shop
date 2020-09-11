import React from 'react'

export default function Detail({ title, image, price, detail }) {
    return (
        <div>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <span>{title}</span>
                <span> Price: </span>
                <span>{price}</span>
            </div>
            <div>
                <h1>{detail}</h1>
            </div>
        </div>
    )
}