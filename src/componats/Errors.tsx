import { FC } from "react"

interface IProps{
msg:string
}

const errors : FC <IProps> = ({msg}) => {
  return (
  msg ? <span className=" text-red-700 font-semibold text-sm inline-block">{msg}</span> : null
  
  )
}

export default errors