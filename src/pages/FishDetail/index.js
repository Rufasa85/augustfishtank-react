import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import Fish from '../../components/Fish';
import API from  "../../utils/API"
import AddFishForm from '../../components/AddFishForm';
import EditFishForm from '../../components/EditFishForm';

export default function FishDetail(props) {
    const [fishState,setFishState] = useState({
        name:'Joe',
        width:100,
        color:"pink",
    })
    const params = useParams();
    useEffect(()=>{
        API.getOneFish(params.id).then(fishData=>{
            setFishState({
                name:fishData.name,
                width:fishData.width,
                color:fishData.color
            })
        })
    },[])

    const handleInputChange = event=>{
        const {name,value}=event.target;
        setFishState({
            ...fishState,
            [name]:value
        })
    }

    const handleFormSubmit= event=>{
        event.preventDefault();
        console.log('updating.....')
    }

    return (
        <div>
            <EditFishForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} fish={fishState}/>
            <Fish name={fishState.name} width={fishState.width} color={fishState.color}/>
        </div>
    )
}
