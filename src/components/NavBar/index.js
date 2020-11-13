import React from 'react'
import {Link} from 'react-router-dom';
import "./style.css"

export default function NavBar(props) {
    return (
        <div className="NavBar">
            <Link to ="/">Home</Link>
            {props.profile.isLoggedIn?<Link to="/profile">my page</Link>:<Link to="/signup">signup</Link>}
            {props.profile.isLoggedIn?<p>Welcome, {props.profile.name}</p>:(<form onSubmit={props.formSubmit}>
                <input onChange={props.inputChange} value={props.loginFormState.email} type='text' name="email" placeholder="email" />
                <input onChange={props.inputChange} value={props.loginFormState.password} type='password' name="password" />
                <input type="submit" value="login" />
            </form>)}
        </div>
    )
}
