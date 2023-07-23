'use client'

import React, { useState } from 'react'

export const Password = () => {
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [inputType, setInputType] = useState<string>("password");
  const [visibilityLabel, setVisibilityLabel] = useState<string>("Show");
  const [passStrengthColor, setPassStrengthColor] = useState<string>("");
  const [passwordStrenghtLabel, setPasswordStrenghtLabel] = useState<string>("");

  const checkPasswordStrength = (inputValue: string) => {
    let passStrength = 0;
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const length = inputValue.length
    if (length) {
        console.log("checking Strength")
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

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
    checkPasswordStrength(event.target.value)
  }

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
        <p className='pass_requirement'>- Must be at least 8 characters long</p>
        <p className='pass_requirement'>- Must contain an uppercase letter</p>
        <p className='pass_requirement'>- Must contain a lowercase letter</p>
        <p className='pass_requirement'>- Must contain a special character</p>
        <p className='pass_requirement'>- Must contain a numeric digit</p>
    </div>
  )
}
