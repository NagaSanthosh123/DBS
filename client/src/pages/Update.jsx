import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const [book,setBook]= useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    });

    const navigate = useNavigate()

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put(`http://localhost:8800/books/${book.id}`,book)
            navigate("/books")
        }catch(err){
            console.log(err)
        }
    }

    const handleChange=(e) =>{
        setBook(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    console.log(book);
  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title"></input>
      <input type="text" placeholder="desc" onChange={handleChange} name="desc"></input>
      <input type="text" placeholder="cover" onChange={handleChange} name="cover"></input>
      <input type="number" placeholder="price" onChange={handleChange} name="price"></input>
      <button className='formButton' onClick={handleClick}>Add</button>
    </div>
  );
}

export default Update;
