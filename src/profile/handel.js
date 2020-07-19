import React from 'react'

function handel() {
    function handelClick(e) {
        e.preventDefault();
        alert("im a alert checking ");
    }
    return (
        <div>
            <a href="/" onClick={handelClick} > click me to checking </a>
        </div>
    );
}
export default handel ;