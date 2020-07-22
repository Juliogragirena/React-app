// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from './components/Badge';
import './global.css'


        
const container = document.getElementById('app')

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge 
    firstname="Julio"
    lastname="Gragirena"
    avatar="https://www.gravatar.com/avatar/HASH"
    jobTitle="Platzi Student"
    twitter="juliogragirena"

     />, container);
