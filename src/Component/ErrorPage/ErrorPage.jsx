import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div>
            <h1>opss!!</h1>
           <Link to='/'> <button className='btn'>Home</button></Link>
        </div>
    )
}
