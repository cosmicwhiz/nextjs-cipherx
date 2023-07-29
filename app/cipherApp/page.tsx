import React from 'react'
import { Password } from '@/components/Password'
import Nav from '@/components/Nav'
import Link from 'next/link'

const CipherApp = () => {
  return (
    <>
        <Nav launchedApp={true}></Nav>
        <section className='cipher_container'>
            <h1 className="heading">App</h1>
            <Password></Password>
            <Link href="/" className="go_back_button">Go Back</Link>
        </section>
    </>
  )
}

export default CipherApp