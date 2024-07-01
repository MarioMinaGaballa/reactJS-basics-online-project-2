import { FC } from "react"

interface IProps{
  title : string,
 description :string
}

const Product : FC <IProps> = () => {
  return (
    <h1 className="text-3xl font-bold underline">
        Mario
    </h1>
  )
}

export default Product