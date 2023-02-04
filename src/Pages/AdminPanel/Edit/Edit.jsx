import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context';
import "./Edit.css"
function Edit(props) {
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
      const data = useLocation();
      const navigate = useNavigate();
      function handleEdit(e)
      {
        e.preventDefault()
        axios.post('http://127.0.0.1:3000/update/anime',formData,{headers:{auth:login},params:{_id:data.state._id}})
        .then(
            (response)=>{
                console.log(response.statusText);
                navigate('/admin');
            }
        )
      }
      useEffect(
        ()=>{
          console.log(data)
          axios.get("http://127.0.0.1:3000/anime_id",{headers:{auth:login},params:{_id:data.state._id}}).
          then(
            (response)=>{
                  
                  setFormData(
                    {
                        title: response.data[0].title,
                        synopsis: response.data[0].synopsis,
                        episodes: response.data[0].episodes,
                        rank: response.data[0].rank,
                        rating: response.data[0].rating,
                        img_url: response.data[0].image
                    }
                  )
            }
          )
        },[]
      )
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      return (
        admin!==""?<div className="form-container">
        <form onSubmit={(e)=>{handleEdit(e)}}>
          <div className="form-group">
            <label htmlFor="textField">Title:</label>
            <input
              type="text"
              id="textField"
              name="title"
              value={formData.title}
              defaultValue={formData.title}
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
              defaultValue={formData.synopsis}
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
              defaultValue={formData.episodes}
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
              defaultValue={formData.rating}
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
              defaultValue={formData.rank}
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
              defaultValue={formData.img_url}
              onChange={handleChange}
              className="form-control"
            />
          </div>
  
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </form>
      </div>:<></>
      );
}

export default Edit;