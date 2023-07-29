'use client'

import React, { useState } from 'react'

export const Password = () => {
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [inputType, setInputType] = useState<string>("password");
  const [visibilityLabel, setVisibilityLabel] = useState<string>("Show");
  const [passStrengthColor, setPassStrengthColor] = useState<string>("");
  const [passwordStrenghtLabel, setPasswordStrenghtLabel] = useState<string>("");

  /**
   * @dev five checks to get the strength of the password and display it accordingly
   * @param inputValue gets the value of the password input
   */
  const checkPasswordStrength = (inputValue: string) => {
    let passStrength = 0;
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const length = inputValue.length
    if (length) {
        if (length >= 8) passStrength += 1
        if (inputValue !== inputValue.toLowerCase()) passStrength += 1
        if (inputValue !== inputValue.toUpperCase()) passStrength += 1
        if (/\d/.test(inputValue)) passStrength += 1
        if (specialChars.test(inputValue)) passStrength += 1

        if (passStrength < 3) {
            setPassStrengthColor('#ed0e0e')
            setPasswordStrenghtLabel('Password is Weak')
        } else if (passStrength === 3 || passStrength === 4) {
            setPassStrengthColor('#ffc926')
            setPasswordStrenghtLabel('Password is Moderate')
        } else {
            setPassStrengthColor('#3fff0f')
            setPasswordStrenghtLabel('Password is Strong')
        }
    } else {
        setPasswordStrenghtLabel('')
    }
  }

  /* Set the value in the password input on input change */
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
    checkPasswordStrength(event.target.value)
  }

  /* Set the visibility of the entered password and change visibility button labels */
  const handlePasswordVisibility = () => {
    if (inputType == "password") {
        setVisibilityLabel("Hide")
        setInputType("text")
    }  
    else {
        setVisibilityLabel("Show")
        setInputType("password")
    }   
  }

  /* clear the password input on clicking clear button */
  const handleClearPassword = () => {
    setPasswordValue('')
    setPasswordStrenghtLabel('')
  }

  return (
    <div className='pass_container'>
        <input className='password' type={inputType} value={passwordValue} onChange={handlePasswordChange}></input>
        <label style={{ color: passStrengthColor }} className='pass_strength_label'>{passwordStrenghtLabel}</label>
        <div className='pass_buttons'>
            <button className='pass_btn' id='show_hide_btn' onClick={handlePasswordVisibility}>{visibilityLabel}</button>
            <button className='pass_btn' id='clear_btn' onClick={handleClearPassword}>Clear</button>
        </div>
        <div className='requirements'>
          <p className='pass_requirement'>- Must be at least 8 characters long</p>
          <p className='pass_requirement'>- Must contain an uppercase letter</p>
          <p className='pass_requirement'>- Must contain a lowercase letter</p>
          <p className='pass_requirement'>- Must contain a special character</p>
          <p className='pass_requirement'>- Must contain a numeric digit</p>
        </div>   
    </div>
  )
}
