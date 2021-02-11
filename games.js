
import React from 'react';
import './games.css';
import moment from 'moment';

function Games(props){

    return(
        <div className='games'>
            <h2>{props.App}</h2>
            <p>{props.Rating}</p>
            <p>{props.Genres}</p>



        </div>

    )

}
export default Games;