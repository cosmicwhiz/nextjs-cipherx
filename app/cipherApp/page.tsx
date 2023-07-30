import React from 'react'
import { Password } from '@/components/Password'
import Nav from '@/components/Nav'
import Link from 'next/link'

const CipherApp = () => {
  return (
    <>
        <Nav launchedApp={true}></Nav>
        <section className='cipher_container'>
          <h1 className="heading sub">Cipher App</h1>
          <div className="chat_desc">
            <div className="character_chat">
              <span className="character cipher_guard">Cipher Guardian</span>
              <span>:&nbsp;&nbsp;</span>
              <span>I see, you have chosen to know about your key strength!</span>
            </div>
            <div className="character_chat">
              <span className="character coordinator">Coordinator</span>
              <span>:&nbsp;&nbsp;</span>
              <span>Input your key below and I will show its strength</span>
            </div>
          </div>
            <Password></Password>
        </section>
    </>
  )
}

export default CipherApp