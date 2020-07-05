import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RenderBlog = ({post}) => {
  console.log("here in render blog", post)
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}



function App() {

  const [title, setTitle]  = useState('');
  const [body,setBody] = useState('');
  const [posts,setPosts] =useState([])

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setTitle(value)
  }
  const handleBody = (e) => {
    setBody(e.target.value)
  }

  const getBlogPost = () => {
    axios.get('/api')
    .then((response) => {
      const data = response.data;
      setPosts(data)
      console.log('data received', posts)
    })
    .catch(() => {
      alert('error retreiving data')
    })
  }

  const submit = (e) => {
    e.preventDefault()

    const payload = {
      title: title,
      body: body
    }

    axios({
      url:'/api/save',
      method:'POST',
      data:payload
    })
    .then(() => {
      console.log("data has been sent to the server")
      getBlogPost();

    })
    .catch(() => {
      console.log(' internal server error')
    })

  }

  useEffect(() => {
    getBlogPost();
  }, [])

  console.log('meeh', posts)

  const displayBlog = posts.map((post) => {
      return (
        // <div>pee</div>
        <RenderBlog key = {post.index} post = {post} />
      )
    });


  console.log(title,body, posts)
  return (
    <div className="App">
      <h2>Welcome to my App</h2>
      <form onSubmit={submit}>
        <div className="form-input">
          <input type="text"  name="title" onChange={handleChange} value = {title} placeholder="title"/>
        </div>
        <div className="form-input">
          <textarea name="body"  cols="30" rows="10" value={body} onChange={handleBody} placeholder="body"></textarea>
        </div>

        <button>Submit</button>
      </form>
      <div className="blog-">
        {displayBlog}
        {/* <DisplayBlogPost posts = {posts} /> */}
      </div>
    </div>
  );
}



export default App;
