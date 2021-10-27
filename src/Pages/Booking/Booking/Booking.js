import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService]=useState({});
    useEffect(()=>{
        const url=`https://agile-garden-68563.herokuapp.com/services/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setService(data))

    },[])
    return (
        <div>
            <h2>Dettails of  {service.name}</h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;