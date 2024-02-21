import React from "react";
import Converter from "./Converter";
import ContactForm from "./ContactForm";




const Form = () => {


    return (
        <div className=''>
            <Converter />
            <h1>Заявка на обмен валюты</h1> 
            <ContactForm />
           
        </div>
    )
}

export default Form;