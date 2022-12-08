import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Donate = () => {

    const [donate,setDonate]=useState([])

    useEffect(() => {
       const fetchAllDonate = async ()=>{
        try{
            const res=await axios.get("http://localhost:8800/books")
            setDonate(res.data)
        }
        catch(err){
            console.log(err)
        }
       }
       fetchAllDonate()
    }, []);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <h1>Donating Items</h1>
        <div className='books'>
            {donate.map(don=>(
                <div className='book'>
                    {don.cover && <img src={don.cover} alt=""></img>}
                    <h2>{don.title}</h2>
                    <p>{don.desc}</p>
                    
                    <button className='delete' onClick={()=>handleDelete(don.id)}>delete</button>
                    <button className="update"><Link to={`/update/${don.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <button><Link to="/add">Add new Item</Link></button>
    </div>
  );
}

export default Donate;
