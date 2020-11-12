import React from 'react'
import {Link} from "react-router-dom";
import TankThumbnail from "../../components/TankThumbnail";
export default function Home(props) {
    return (
        <div className="Home">
            <div className="TanksWrapper">

            {props.profile.isLoggedIn?props.profile.tanks.map(tankObj=><Link to={`/tanks/${tankObj.id}`}><TankThumbnail key={tankObj.id} name={tankObj.name} fish={tankObj.Fishes}/></Link>):<h1>Login to see your tanks</h1>}
            </div>
        </div>
    )
}
