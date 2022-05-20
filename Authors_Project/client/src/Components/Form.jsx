import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Form = () => {

    const[name, setName]=useState()
    const navigate=useNavigate()
    const [errors, setErrors]=useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/author`, {name})
        .then(response=>{
            console.log(response)
            navigate("/")
        })
        .catch(err=>{
            const errArr=[]
            const errResData = err.response.data.errors
            console.log(errResData)
            
            for(const key in errResData){
                errArr.push(errResData[key]["message"])
                console.log(errResData[key]["message"])
            }
            setErrors(errArr)
            console.log(errArr)
        })
    }

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

export default Form