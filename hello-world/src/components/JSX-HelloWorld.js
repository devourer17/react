import React from 'react'

function HelloAgain() {
    // JSX
    // return (
    //     <div>
    //         <h1>Hello Vivek, JSX</h1>
    //     </div>
    // )

    // Non - JSX
    return React.createElement('div', {
        id: 'firstId',
        className: 'firstClass'
    }, React.createElement('h1', null, 'Hello Vivek, Non-JSX'))
}

export default HelloAgain