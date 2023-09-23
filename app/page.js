import Image from 'next/image'
import Header from './components/Header'
import Message from './components/Message'

export default function Home() {
  return (
    <main className="flex  justify-center">
      <div className=' flex justify-between w-[1344px] mt-5 h-screen'>
        <Header/>
        <Message/>
      </div>
    </main>
  )
}
