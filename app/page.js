'use client'

import { useRouter } from "next/navigation"

function page() {

  const router= useRouter()
  return (
  <section>
    <h1>useRouter</h1>
    <button className="text-blue-600 h-10 w-20 shadow-lg rounded-md hover:font-extrabold" onClick={(e)=>router.push('about')}>Click me</button>
  </section>
  )
}

export default page


