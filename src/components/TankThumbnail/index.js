import React from 'react'
import "./style.css"
import FishThumbnail from '../FishThumbnail';

export default function TankThumbnail(props) {
    return (
        <div className="TankThumbnail">
            <h3>{props.name}</h3>
            {props.fish.map(fishObj=><FishThumbnail name={fishObj.name} color={fishObj.color} width={fishObj.width}/>)}
        </div>
    )
}
