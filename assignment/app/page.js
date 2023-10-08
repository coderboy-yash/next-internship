"use client"
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Subscription from '@/components/Subscription'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [color,setColor]=useState("blue-600");
  return (
    <div>
      <Header setColor={setColor} color={color}></Header>
      <Details color={color}></Details>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  )
}
