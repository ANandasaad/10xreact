import React, { useEffect, useState } from "react";
import { REST_API } from "../../utils/constant";
import PostAPI from "./PostAPI";
import { Link, useNavigate } from "react-router-dom";

const RestApi = () => {
  const [data, setData] = useState(null);
const navgiate=useNavigate();
  useEffect(() => {
    getdata();
  }, []);
  async function getdata() {
    fetch("http://localhost:8000/employee")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  const userEdit=(id)=>{
      navgiate('/edit/'+id);
  }
  const userDel=(id)=>{

    if(window.confirm("Do you want to delete?"))
    {
        const options={
            method:'DELETE'
          }
          fetch('http://localhost:8000/employee/'+id,options).then((res)=>{
            alert("Deleted Successully")
            
            window.location.reload();
               
            
        }).catch((err)=>{
          console.error(err.message);
        })
    }

  }

  return (
    <div>
      <h1>Rest Api</h1>
      <div>
        <Link to="/create">Add +</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>author</th>
          </tr>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <button onClick={()=>userEdit(item.id)} >Edit</button>
                <button onClick={()=>userDel(item.id)}>Delete</button>
                
              </tr>
            ))}
        </thead>
      </table>
    </div>
  );
};

export default RestApi;
