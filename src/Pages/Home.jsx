import React, { useState, useEffect } from "react"
import Card from "../Components/Card"
import { Link } from "react-router-dom"
import "../Css/home.css"
import Button from "../Components/Button"

const Home = () => {
  const [Users, setUsers] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [items, setItems] = useState(10)
  const [filters, setFilters] = useState('p')

  useEffect(() => {
    getData()
  }, [items])


  const LoadMore = () => {
    setPageNo(pageNo +1)
    setItems(items + 10)
    console.log(pageNo)
   
  }

  const getData = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?&per_page=${items}`)
    const data = await response.json()
    setUsers(data)

    console.log(Users)
  }
  const getSearch = async () => {
    
    const response = await fetch(`https://api.punkapi.com/v2/beers?&per_page=${items}&beer_name=${filters}`)
    const data = await response.json()

    setUsers(data)
    console.log(Users)
  }

  return (
    <div className="Home">
      <h3 style={{ color: "white", textAlign: "center" }}>Punk Api</h3>
      <br />
      <br />
      <br />
      <div style={{ width: "100%", textAlign: "center" }}>
      <div className="search_bar" style={{width: "100%"}}>
        <input type="text" className="search" onChange={e => setFilters(e.target.value)} style={{width: "50%", height:"2.24rem"}} />
        <Button Title="Search" onClick={getSearch}  />
    </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="card_container">
        {Users.map((user) => (
          <Card
            Img={user.image_url}
            Name={user.name}
            Id={user.id}
            Tagline={user.tagline}
            Plink={user.id}
          />
        ))}
      </div>
      <button className="home_button" onClick={LoadMore}>
        Load More
      </button>
    </div>
  )
}

export default Home
