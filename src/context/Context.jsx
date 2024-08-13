import {createContext, useState} from "react";
import First from '../assets/Images/first.svg'
import Second from '../assets/Images/second.svg'
import Third from '../assets/Images/third.svg'
import Kebab from '../assets/Images/kebab.png'

const Context = createContext()

const TokenContext = ({children}) =>  {
    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
    const [postList, setPostList] = useState(JSON.parse(window.localStorage.getItem('postList')) ||[
        {
          id:1,
          name:'Designsta',
          imgUrl:First,
          mail:'@inner · 25m',
          text:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
          comentcount:'10',
          replycount:'1',
          likecount:"8",
          img:null
        },
        {
          id:2,
          name:'cloutexhibition',
          imgUrl:Second,
          mail:'@RajLahoti · 22m',
          text:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.witterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
          comentcount:null,
          replycount:'5',
          likecount:"9",
          img:null
        },
        {
          id:3,
          name:'CreativePhoto',
          imgUrl:Third,
          mail:'@cloutexhibition · 1h',
          text:"Обетда.....  Кечиринглар",
          comentcount:'10',
          replycount:'1',
          likecount:"8",
          img:Kebab
        },
      ]) 
    window.localStorage.setItem("token" , JSON.stringify(token))
    window.localStorage.setItem('postList',JSON.stringify(postList))
    return(
        <Context.Provider value={{token , setToken,postList,setPostList}}>{children}</Context.Provider>
    )
}

export {Context, TokenContext}