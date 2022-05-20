import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import AllDisplay from '../Components/AllDisplay'

const Main = () => {

    const[authors, setAuthors]=useState([])
    const[refresh, setRefresh]=useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author`)
        .then(response=>{
            setAuthors(response.data)
        })
        .catch(err=>console.log(err))
    },[refresh])

    const reload = ()=>{
        setRefresh(!refresh)
    }

  return (
    <div>
        <h1>Favorite authors</h1>
        <h3><Link to="/new">Add an author</Link></h3>
        <h2>We have quotes by:</h2>
        <AllDisplay authors={authors} reloadList={reload} />
    </div>
  )
}

export default Main