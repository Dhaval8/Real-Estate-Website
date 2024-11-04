import React, { useState } from 'react'
import './Properties.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import useProperties from '../../hooks/useProperties'
import {PuffLoader} from 'react-spinners'
import PropertiesCard from '../../components/PropertiesCard/PropertiesCard'
const Properties = () => {
  const {data , isError , isLoading} = useProperties()
  const[filter,setFilter] = useState("")
  if(isError)
  {
    return(
      <div className='wrapper'>
        <span>Error while fetching the data</span>
      </div>
    )
  }
  if(isLoading)
  {
      return(
        <div className='wrapper flexCenter' style={{height:"60vh"}}>
          <PuffLoader height="80"
            width="80"
            radius={1}
            color='#000000'
          />
        </div>
      )
  }
  
  return (
    <div className='wrapper'>
      <div className='flexColCenter paddings innerWidth properties-container'>
        <SearchBar filter={filter} setFilter={setFilter}/>
        <div className='paddings flexCenter properties'>
        {
          data.filter((property)=>property.title.toLowerCase().includes(filter.toLowerCase())||
          property.city.toLowerCase().includes(filter.toLowerCase())||
          property.country.toLowerCase().includes(filter.toLowerCase())
          )
          .map((card,i)=>(<PropertiesCard card={card} key={i}/>))
        }
        </div>

      </div>
    </div>
  )
}

export default Properties