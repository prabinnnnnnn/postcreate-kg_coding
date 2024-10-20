import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList:[],
  addPost: ()=> {},
  addPosts: ()=>{},
  deletePost: ()=>{}
})

const postListRecuder = (currentPostList,action)=>{
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList = currentPostList.filter((post)=> post.id !== action.payload.PostId)
  }
  else if(action.type ==='ADD_POST'){
    newPostList = [action.payload, ...currCreateForm]
  }
  else if(action.type === 'ADD_POSTS'){
    newPostList = action.payload.products;
  }
  return newPostList
}

const PostListProvider = ({children})=> {
  
  const [postList, dispatch] = useReducer(postListRecuder,[])

  const addPost = (userName, postTitle, postContent, reaction, hastage)=>{
    dispatch({
      type:'ADD_POST',
      payload:{
          user:userName,
          title:postTitle,
          body:postContent,
          reaction:reaction,
          tags:hastage,
          id: Date.now(),
      }
    })
  }

    const addPosts = (products)=>{
    dispatch({
      type:'ADD_POSTS',
      payload:{
        products,
      }
    })
  }

  const deletePost = (PostId)=>{
    dispatch({
      type:'DELETE_POST',
      payload:{PostId}
    })
  }

  return <PostList.Provider value={{postList,addPost,deletePost,addPosts}}>{children}</PostList.Provider>
}

export default PostListProvider;
