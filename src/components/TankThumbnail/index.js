import React from 'react'
import {Link} from "react-router-dom"
import "./style.css"
import FishThumbnail from '../FishThumbnail';

export default function TankThumbnail(props) {
    return (
        <div className="TankThumbnail">
           <Link to={`/tanks/${props.id}`}> <h3>{props.name}</h3> </Link>
           {props.delTank?<button onClick={()=>props.delTank(props.id)}>Delete Tank</button>:null}
            {props.fish.map(fishObj=><FishThumbnail key={fishObj.id} name={fishObj.name} color={fishObj.color} width={fishObj.width}/>)}
        </div>
    )
}
