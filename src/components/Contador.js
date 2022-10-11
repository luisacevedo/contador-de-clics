import React from "react";
import '../stylesheets/Contador.css';

function Contador({ numClicks = 0 }) {
    return (
        <div className='contador'>
            {numClicks}
        </div>
    );
}
export default Contador;