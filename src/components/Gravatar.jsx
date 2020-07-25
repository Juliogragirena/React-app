import React from 'react'
import md5 from 'md5'


function Gravatar (props) {
    const email = props.email
    const hash = md5(email);
    // console.log(hash)
    return (
        <img className={props.className} src={`https://s.gravatar.com/avatar/${hash}?d=identicon`} alt={`${props.name}`} />
    )
}

export default Gravatar