import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import Form from '../Components/Form'
import { Link } from 'react-router-dom'

const Update = () => {

    const [name, setName]=useState()
    const navigate = useNavigate()
    const {id}=useParams()
    const [errors, setErrors]=useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`, {name})
            .then(response=>{
                console.log(response)
                navigate("/")
            })
            .catch(err=>{
                const errArr=[]
                const errResData = err.response.data.errors
                console.log(err)

                for(const key in errResData){
                    errArr.push(errResData[key]["message"])
                }
                setErrors(errArr)
            })
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response=>{
                const name = response.data
                setName(name.name)
            })
            .catch(err=>console.log(err))
    },[])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Author Name:</label>
                <input type="text" name='name' value={name}
                onChange={e=>setName(e.target.value)}/>
                <button type='submit'>Submit</button>
                <button type="button"><Link to="/">Cancel</Link></button>
            </div>
        </form>
        {
            errors.map((err, i)=>{
                return(
                <p key={i} style={{color: "red"}}>{err}</p>
                )
            })
        }
    </div>
  )
}

export default Update