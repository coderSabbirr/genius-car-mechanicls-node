import React, { useEffect, useState } from 'react';

const MangeServices = () => {
    const [services,setServices]= useState([])
   useEffect(()=>{
       fetch('http://localhost:4000/services')
       .then(res =>res.json())
       .then(data => setServices(data))
       console.log(services);
   },[])

   const handleDelete =id =>{
       const url=`http://localhost:4000/services/${id}`
       fetch(url,{
           method:'DELETE'
       })
       .then(res => res.json())
       .then(data =>console.log(data))
       console.log(id);
   }

    return (
        <div>
            <h2>This is </h2>
            {
                services.map(service=><div key={service._id}>
                   <h3>{service.Name}</h3> 
                   <button onClick={()=> handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default MangeServices;