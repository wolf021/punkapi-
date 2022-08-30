import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../Css/productdetails.css'
import { Link} from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const [user, setUser] = useState([])
  const [product, setProduct] = useState("")

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    const data = await response.json()
    setUser(data)
    console.log(user)
  }

  return (
    <div className="ProductDetails" >
        <Link to='/' style={{color:"white", textDecoration:"none"}} >
      Home
      </Link>
      
      {user.map((user) => (
       <div className="product_details_p" >
       <div className="image_container">
        <img src={user.image_url} height="70%" width="70%"/>
        
       </div>
       <div className="info_container_p">
        <h3 className="name" style={{fontSize:"2rem"}}>{user.name}</h3>
        <p><strong style={{fontSize:"1rem"}}>ID: </strong> {user.id}</p>
        <p className="tag_line"> <strong style={{fontSize:"1rem"}}>TagLine:  </strong> {user.tagline}</p>
        <p className="attenuation_level">
         <strong style={{fontSize:"1rem"}}>Attenuation Level :  </strong>{user.attenuation_level}
        </p>
        <p className="description">  <strong style={{fontSize:"3rem"}}>Description:  </strong>  <br/> <br/> {user.description}</p>
       
        
       </div>
        </div>
      ))}
      
    </div>
  )
}

export default ProductDetails
