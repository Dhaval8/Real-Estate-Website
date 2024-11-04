import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from '../../hooks/useAuthCheck'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import UserContextDetail from '../../Context/UserContextDetail'
import { checkFavourites, updateFavourites } from '../../utils/common'
import { fav } from '../../utils/api'

const Heart = ({id}) => {
    const [HeartColor,setHeartColor] = useState("white")
    const {validateLogin} = useAuthCheck()
    const {user} = useAuth0()
    const {userDetails:{favourites},setUserDetails,} = useContext(UserContextDetail);
    useEffect(()=>{
        setHeartColor(()=>checkFavourites(id,favourites))
    },[favourites])

    const {mutate} =useMutation({
        mutationFn:()=> fav(id,user?.email),
        onSuccess:()=>{
            setUserDetails((prev)=>(
                {
                    ...prev,
                    favourites:updateFavourites(id,prev.favourites)
                }
            ))
        }
    })

    
    const handleLike = () =>{
        if(validateLogin()){
            mutate()
            setHeartColor((prev)=> prev=== "red" ? "white" : "red")
        }
    }
  return (
    <AiFillHeart size={24} color={HeartColor} onClick={(e)=>{
        e.stopPropagation()
        handleLike()
    }}/>
  )
}

export default Heart