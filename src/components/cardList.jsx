import { useContext, useState } from "react";
import { PostList } from "../store/list-card-store";
import Card from "./card";
import Message from "./message";
import Loader from "./loader"

function CardList(){
  const {postList, addPosts} = useContext(PostList)
  const [feaching, setFeacthing] = useState(false)

  useState(() => {
    setFeacthing(true)

    const controler = new AbortController()
    const signal = controler.signal
    
    fetch('https://dummyjson.com/products',{signal})
      .then(res => res.json())
      .then((data) => {
        addPosts(data.products)
        console.log(data.products)
        setFeacthing(false)
      });
    
    return () => {
    };
    
  }, []);

  return (
    <>
      {feaching && <Loader/>}
      {!feaching && postList.length === 0 && <Message/> }
      {!feaching && postList.map((post)=> <Card  key={post.id} post={post}/>)}
    </>
  )

}

export default CardList;

