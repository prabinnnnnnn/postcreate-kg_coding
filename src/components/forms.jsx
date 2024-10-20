import { Form, redirect} from 'react-router-dom'

function CreateForm(){

  return(
    <Form method="post" className="form">

      <div className="mb-3">
        <label htmlFor="username" className="form-label">UserName</label>
        <input type="text" className="form-control" id="username" name='user'/>
      </div>

      <div className="mb-3">
        <label htmlFor="posttitle" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="posttitle" name='title'/>
      </div>

      <div className="mb-3">
        <label htmlFor="postcontent" className="form-label">Post Content</label>
        <textarea rows={4} type="password" className="form-control" id="postcontent" name="body" />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Reaction</label>
        <input type="text" className="form-control" id="reaction" name="reaction" />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Hastages</label>
        <input type="text" className="form-control" id="reaction" name= "tags"/>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </Form>
  )
}

export async function PostCreateAsync(data) {

  const formDate = await data.request.formData()
  const postData = Object.fromEntries(formDate)

      fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        postData
      })
      })
      .then(res => res.json())
      .then(post => {
          post
      });
  
  return redirect('/')
}

export default CreateForm;