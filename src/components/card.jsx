import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { PostList } from "../store/list-card-store";

function Card({post}){

  const {deletePost} = useContext(PostList)

  return (
    <div className="card card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{post.title} <RxCross2 className="delete" onClick={()=> deletePost(post.id)}/></h5>
        <p className="card-text">{post.description}</p>
        {post.tags.map((tag)=> <span className="badge text-bg-primary tag" key={tag}>{tag}</span>)}
        <div className="card-reaction"> <FaHeart className="heart"/><p>{`${post.stock} Likes`} </p></div>
      </div>
    </div>
  )
}

export default Card