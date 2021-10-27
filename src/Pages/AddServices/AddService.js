import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'



const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{

    axios.post('https://agile-garden-68563.herokuapp.com/services',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('succecfully added')
            reset();
        }
    })
      
  };
    return (
        <div className="addService">
            <h2>Plase add a service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description", )}  placeholder="description" />
      <input type="number" {...register("price", )} placeholder="price" />
      <input {...register("img", )} placeholder="image url" />
      <input type="submit" />
    </form>

        </div>
    );
};

export default AddService;