import React from 'react'
import Image from 'next/image'
import logo from "../assets/logo.png"


const Logo = () => {
  return (
    <>
    <Image src={logo}  className="size-36 flex items-center justify-center absolute left-0  ml-4 mt-4 z-10 rounded-full" />
    </>
  )
}

export default Logo