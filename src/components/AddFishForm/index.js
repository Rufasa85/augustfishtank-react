import React from 'react'

export default function AddFishForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
        <input onChange={props.handleInputChange} value={props.fishFormState.name}type="text" name="name" placeholder="name"/>
        <input onChange={props.handleInputChange} value={props.fishFormState.width}type="number" name="width" />
        <input onChange={props. handleInputChange} value={props.fishFormState.color}type="color" name="color" />
        <input type="submit" value="submit!"/>
    </form>
    )
}
