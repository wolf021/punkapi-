import React from 'react'
import '../Css/card.css'
import {Link} from 'react-router-dom'

const Card = ({Img,Id, Name, Tagline,Plink}) => {
  return (
    <>
    <Link to={`/productdetails/${Plink}`} className="card_link" >

   
    <div className="card">
        <div className="card_image"  > 
            <img src={Img} alt="imgae" height="100%" width="50%" />
            </div>

            <div className="info_container">
                <h3 className="name">{Name}</h3>
                <p>{Id}</p>
                <p className="tagline">{Tagline}</p>
            </div>
        
    </div>
    </Link>
    </>
  )
}

export default Card;