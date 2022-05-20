import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

const AllDisplay = (props) => {
    const {authors} = props;

    const handleDelete=(deleteId)=>{
        axios.delete(`http://localhost:8000/api/author/${deleteId}`)
        .then(response=>{
            props.reloadList()
        })
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions avaliable</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.authors.map((eachAuthor, i)=>{
                        return(
                            <tr key ={i}>
                                <td>{eachAuthor.name}</td>
                                <td><Link to={`/edit/${eachAuthor._id}`}>Edit</Link></td>
                                <td><button onClick={()=>handleDelete(eachAuthor._id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default AllDisplay