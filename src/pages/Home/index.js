import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import TankThumbnail from "../../components/TankThumbnail"

export default function Home() {
    const [tanks, setTanks] = useState([])
    useEffect(() => {
        API.getAllTanks().then(tanksData => {
            setTanks(tanksData)
        })
    }, [])
    return (

        <div>
            <h1>look at all the fishies!</h1>
            <div className="TanksWrapper">
                {tanks.map(tankObj => <TankThumbnail key={tankObj.id} id={tankObj.id} name={tankObj.name} fish={tankObj.Fishes} />)}
            </div>
        </div>
    )
}
