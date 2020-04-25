import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';

const Contact = (props) => {
    return (
        <div>
            <h1>This is my CONTACT!</h1>
            <About name="madalina"></About>
            <ul>
                <li><Link to={`${props.match.url}/adress`}>Adresa</Link></li>
                <li><Link to={`${props.match.url}/mail`}>Mail</Link></li>
                <li><Link to={`${props.match.url}/number`}>Numar de telefon</Link></li>
            </ul>
            <div>
                <Route path={`${props.match.url}/adress`} render={() => {return <h1>This is my adress</h1>}}></Route>
                <Route path={`${props.match.url}/mail`} render={() => {return <h1>This is my email</h1>}}></Route>
                <Route path={`${props.match.url}/number`} render={() => {return <h1>This is my number</h1>}}></Route>
            </div>
        </div>
    )
}

export default Contact;