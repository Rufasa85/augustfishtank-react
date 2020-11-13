import React from 'react'

export default function EditFishForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
        <input onChange={props.handleInputChange} value={props.fish.name}type="text" name="name" placeholder="name"/>
        <input onChange={props.handleInputChange} value={props.fish.width}type="number" name="width" />
        <input onChange={props. handleInputChange} value={props.fish.color}type="color" name="color" />
        <input type="submit" value="submit!"/>
    </form>
    )
}
