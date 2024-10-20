function Message({fetchPost}){
  return (
    <center className="message">
      <h1>There are no post aviable</h1>
      <button className="btn btn-success" onClick={fetchPost}>GET POST</button>
    </center>
  )
}

export  default Message