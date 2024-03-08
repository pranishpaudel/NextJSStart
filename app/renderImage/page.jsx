

import NatureImage from '/Users/air/Desktop/NextJS/firstnext/public/myImg.jpg'
import Image from 'next/image'
function Users() {
  return (
    <div>
      <Image src={NatureImage} />
    </div>
  )
}

export default Users