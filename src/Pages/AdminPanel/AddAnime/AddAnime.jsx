import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context';
import "./../Edit/Edit.css"
function AddAnime(props) {
    const [formData, setFormData] = useState({
        title: "",
        synopsis: "",
        episodes: "",
        rank: "",
        rating: "",
        img_url: ""
      });
      const loginData = useContext(UserContext)
      const {login,setLogin,admin,setAdmin} = loginData
      
      const navigate = useNavigate();
      function handleAdd(e)
      {
        e.preventDefault()
        axios.post('http://127.0.0.1:3000/add/anime',{formData},{headers:{
            auth: login            
        }}).then(
            (response)=>{
                console.log(response.statusText);
                navigate('/admin')
            }
        )
      }
     
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      return (
        admin!==""?<div className="form-container">
        <form onSubmit={(e)=>{handleAdd(e)}}>
          <div className="form-group">
            <label htmlFor="textField">Title:</label>
            <input
              type="text"
              id="textField"
              name="title"
              value={formData.title}
            
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="textArea">Synopsis:</label>
            <textarea
              id="textArea"
              name="synopsis"
              value={formData.synopsis}
             
              onChange={handleChange}
              className="form-control"
              rows="5"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="numberField1">Episodes:</label>
            <input
              type="number"
              id="numberField1"
              name="episodes"
              value={formData.episodes}
            
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="numberField2">Rating:</label>
            <input
              type="number"
              id="numberField2"
              name="rating"
              value={formData.rating}
         
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="numberField3">Rank:</label>
            <input
              type="number"
              id="numberField3"
              name="rank"
              value={formData.rank}
         
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="urlField">Image URL:</label>
            <input
              type="url"
              id="urlField"
              name="img_url"
              value={formData.img_url}
          
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>:<></>
      );
}

export default AddAnime;