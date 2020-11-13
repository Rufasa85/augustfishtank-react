import React from 'react'

export default function AddTankForm(props) {
    return (
        <div>
            <form onSubmit= {props.handleFormSubmit}>
                <input name="name" onChange = {props.handleInputChange} value={props.tankName}/>
                <input type="hidden" value={props.profile.id}/>
                <input type="submit" value = "add tank"/>
            </form>
        </div>
    )
}
