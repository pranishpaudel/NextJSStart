import {redirect} from 'next/navigation'

function Id({params}) {

  if(params.id==4){
    redirect('/play')
  }
  return (
    <div>{params.id}</div>
  )
}

export default Id