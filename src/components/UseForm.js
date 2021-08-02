import {useState,useEffect} from 'react';

const UseForm = () => {
   const[values,setValues] = useState({
       username:'',
       email:'',
       password:'',
       password2:''  
   })
   const[erors,setErors] = useState({});
   const handleChange = e =>{
       const{name,value}=e.target;
       setValues({
           ...value,
           [name]:value
       });
    };
    const handleSubmit = e =>{
        e.preventDefault();
    }
   return {handleChange,values,handleSubmit}
}

export default UseForm
