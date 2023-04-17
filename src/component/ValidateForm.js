import React, { useRef, useState } from "react";

const ValidateForm = () => {

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      gender: "",
      password: "",
      phonenumber: "",
    });
  
    const [error, setError] = useState({});
    const [user,setUser]=useState('');
    const handleChange=(e)=>{
  
      const {name,value}=e.target;
      setFormData({...formData,[name]:value})
      console.log(formData);
  
  
    }
    const handleGender=(e)=>{
      const {gender,value}=e.target;
      setFormData({...formData,gender:value});
  
  
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault();
  
      const newError={};
      Object.keys(formData).forEach((key)=>{
          if(formData[key]=='')
          {
              newError[key]='All fields are mandotary'
          }
         
      });
  
      //handle name
  
     
           if(!/^[a-zA-Z\s]+$/.test(formData.name))
      {
          newError.name='Name must be alphabet';
  
      }
      
      
  
      //check email 
  
      if(!formData.email.includes('@'))
      {
          newError.email='Email must contain @';
      }
      //check gender
      if(formData.gender!=='male' && formData.gender!=='female' && formData.gender!=='other')
      {
          newError.gender="Please identify as male, female or others";
      }
  
      //check phone number
  
      if(!/^\d+$/.test(formData.phonenumber))
      {
          newError.phonenumber="Phone number must contains only number";
      }
  
      if(formData.password.length<6)
      {
          newError.password="Password must contain atleast 6 letters"
      }
    
      if(Object.keys(newError).length==0)
      {
        const  username=formData.email.split('@')[0];
        setUser(username);
          setError({});
      }
      else{
          setError(newError);
      }
  
      
  
    }
    return (
      <div>
        {formData.email && <h1>Hello{user}</h1>}
        <form onSubmit={handleSubmit} action='#' method='POST'>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              data-testid="name"
            />
           {error.name && <span>{error.name}</span>}
  
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              data-testid="email"
            />
             {error.email && <span>{error.email}</span>}
          </div>
          <div>
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              data-testid="phoneNumber"
            />
         {error.phonenumber && <span>{error.phonenumber}</span>}
  
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleGender}
              name="gender"
              data-testid="gender"
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"other"}>Other</option>
            </select>
            {error.gender && <span>{error.gender}</span>}
  
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              data-testid="password"
            />
      {error.password && <span>{error.password}</span>}
  
          </div>
          <button type="submit" data-testid='submit'>Sign Up</button>
        </form>
        
  
     </div>  
    )
     
 
};

export default ValidateForm;
