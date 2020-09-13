import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import "./Shipment.css"

const Shipment = () => {

    const [logInUser, setLogInUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log("form submitted", data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
     <input name="name" defaultValue={logInUser.name} ref={register({ required: true })} placeholder="your name" />
       {errors.name && <span className="error" >name field is required</span>}
       <input type="submit" />
       <input name="email" defaultValue={logInUser.email} ref={register({ required: true })} placeholder="your email" />
       {errors.name && <span className="error" >email field is required</span>}
       <input type="submit" />
       <input name="address" ref={register({ required: true })} placeholder="address" />
       {errors.name && <span className="error" > address field is required</span>}
       <input type="submit" />
      </form>
    );
};

export default Shipment;
