import React from 'react'


{/* <Detail
        id='1'
        title="queen panel bed"
        price={10.99}
        image='/images/hero-bcg.jpeg'
        detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      /> */}

export default function Detail({ title, image, price, detail }) {
    return (
        <div>
            <div>
                <img src={image} />
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