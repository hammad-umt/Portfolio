'use client'
import Image from 'next/image'
import React from 'react'
const StickyWhatsapp = () => {
    function whatsappBtn () {
        window.open("https://wa.me/923349711129/");
    }
  return (
    <div className='fixed bottom-4 left-4  animate-bounce hover:scale-110 hover:cursor-pointer'>
    <Image src="/skills_icons/whatsapp.svg" alt="whatsapp" width={70} height={70} onClick={whatsappBtn}/>
    </div>
  )
}

export default StickyWhatsapp
