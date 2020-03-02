import React from 'react';

function Button(props){
    const {decrement, increment} = props
    return (
        <div className='button'>
            <button onClick={decrement}>Previous</button>
            <button onClick={increment}>Next</button>
        </div>
    )
}

export default Button;