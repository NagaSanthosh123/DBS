import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const [donate,setDonate]= useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    });

    const navigate = useNavigate()

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/books",donate)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    const handleChange=(e) =>{
        setDonate(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    console.log(donate);
  return (
    <div className='form'>
      <h1>Add new Item to Donate</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title"></input>
      <input type="text" placeholder="desc" onChange={handleChange} name="desc"></input>
      <input type="text" placeholder="cover" onChange={handleChange} name="cover"></input>
      <input type="number" placeholder="price" onChange={handleChange} name="price"></input>
      <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  );
}

export default Add;
