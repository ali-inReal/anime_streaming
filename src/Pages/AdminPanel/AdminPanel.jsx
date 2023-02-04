import React, { useEffect } from 'react';
import { Space, Table } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../Context';
import remove from "./../../assets/remove.png";
import { IconButton } from '@mui/material';
import edit from "./../../assets/edit.png"
import Search from 'antd/es/input/Search';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function AdminPanel(props) {
    const [animeData,setAnimeData] = useState([])
    const loginData = useContext(UserContext);
    const {login,setLogin,admin,setAdmin} = loginData
    const [count,setCount] = useState(1);
    const [data,setData] = useState();
    useEffect(
        ()=>{
           axios.get('http://127.0.0.1:3000/all-anime',{headers:{auth:login}}).
           then(
            (response)=>{
                setAnimeData(response.data);
            }
           )      
        },[count]
    )
    
    function search()
    {
        axios.get('http://127.0.0.1:3000/search',{headers:{auth:login},params:{title: data}}).
        then(
            (response)=>{
                setAnimeData(response.data)
                // setCount(count+1);
            }
        )
    }
    function deleteAnime(text)
    {
        axios.delete('http://127.0.0.1:3000/delete',{headers:{auth:login},params:{_id:text}}).
        then(
            (response)=>{
                setCount(count+1);
            }
        )
    }
    const navigate = useNavigate();
    const columns =[
        {
            title:"Title",
            key:"title",
            dataIndex:"title",
            render: (text)=><a>{text}</a>
        },
      
        {
            title:"Episodes",
            key:"episodes",
            dataIndex:"episodes"
        },
        {
            title:"Rating",
            key:"rating",
            dataIndex:"rating"
        },
        {
            title:"Rank",
            key:"rank",
            dataIndex:"rank"
        },
        {
            title: "Edit",
           key: "_id",
           dataIndex:"_id",
           render:(text)=><IconButton onClick={()=>navigate('/edit_anime',{state:{_id:text}})} >
            <img src={edit} />
           </IconButton>
        },
        {
           title: "Delete",
           key: "_id",
           dataIndex:"_id",
           render:(text)=><IconButton onClick={()=>{deleteAnime(text)}}>
            <img src={remove} />
            
           </IconButton>
        }
    ]

    return (
        admin!==""?<div style={{
            width: "100%",
            height: "100%",
            padding: "2rem",
            color:"black"
        }}> 
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <Search
      placeholder="input search text"
      onChange={(e)=>{setData(e.target.value)}}
      onSearch={search}
       size='large'
      style={{
        width: "40%",
        height:"40%",
        padding:"20px"
      }}
    />
        <Button onClick={()=>{navigate('/add_anime')}} style={{width:"fit-content"}}>Add</Button>
          </div>
            
             <Table columns={columns} dataSource={animeData} />        
        </div>:<></>
    );
}

export default AdminPanel;