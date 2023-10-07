import Details from '@/components/Details'
import Header from '@/components/Header'
import Subscription from '@/components/Subscription'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Details></Details>
      <Subscription></Subscription>
    </div>
  )
}
