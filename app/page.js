'use client'

import { useRouter } from "next/navigation"

function page() {

  
  const router= useRouter()
  return (
  <section>
    <h1>Google Fonts</h1>
    <h2>Hello this is a roboto font</h2>
    <button className="text-blue-600 h-10 w-20 shadow-lg rounded-md hover:font-extrabold" onClick={(e)=>router.push('about')}>Click me</button>
  </section>
  )
}

export default page


