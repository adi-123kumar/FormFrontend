import { useState } from "react"
import { Button } from "./Button"
import "./form.css"
import axios from "axios"

import React from 'react'

export const Form = () => {
  let [user, setUser] = useState({
  name:"",
    email: "",
  text:""
  })
  let onInputChange = (event) => {
    setUser(prev => ({
      ...prev,
      [event.target.name]: event.target.value
   }))
  }

  let onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/submit", user)
      console.log("successfull data sent from frontend.")
    } catch (err) {
     console.log("error occurend in frontend")
    }
  }

  
  return (
    <div className="mainbox">
      <div className="left">
        <div className="buttons">
          <Button text="VIA SUPPORT CHAT"></Button>
          <Button text="VIA CALL"></Button>
        </div>
        <div className="emailBtnDiv">
          <Button text="VIA EMAIL FORM" className="btnEmail"></Button>
        </div>

        <form onSubmit={onFormSubmit}>
          <div className="input-name">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={onInputChange} />
          </div>
          <div className="input-email">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" onChange={onInputChange} />
          </div>
          <div className="input-text-area">
            <label htmlFor="textArea">Text</label>
            <textarea
              name="text"
              className="textBox"
              onChange={onInputChange}
            ></textarea>
          </div>
          <div className="submit">
            <Button text="btnSubmit" type="submit"></Button>
          </div>
        </form>
      </div>
      <div className="right">
        <img src="/images/form.svg" alt="" />
      </div>
    </div>
  );
}
