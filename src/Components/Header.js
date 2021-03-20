import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1>Lets built our app</h1>
            <p>
                {props.test}
            </p>
        </header>
    )
}

export default Header
