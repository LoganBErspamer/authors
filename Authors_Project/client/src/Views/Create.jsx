import React from 'react'
import Form from '../Components/Form'
import { Link } from 'react-router-dom'
const Create = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        {<Form/>}
    </div>
  )
}

export default Create