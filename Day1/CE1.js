import React from 'react';
function alertMsg=()=>
{
    alert("The alert message");
    console.log("message to developer");
}
function Dis=()=>
{
    return(
        <div className="App">
            <h1>Let us see the output of Javascript</h1>
            <button onClick={alertMsg}>Click</button>
        </div>
    )
}
export default Dis;
