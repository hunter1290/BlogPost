import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
function AddBlog() {
    const [image,setImage] = useState('https://thumbs.dreamstime.com/b/beautiful-golden-autumn-scenery-trees-golden-leaves-sunshine-scotland-united-kingdom-beautiful-golden-autumn-124278811.jpg');
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [author,setAuthor] = useState(window.localStorage.getItem('USER'));
    const [likes,setLikes] = useState(0);
    const [email,setEmail] = useState(window.localStorage.getItem("EMAIL"));

    const navigate = useNavigate();

    const add_blog = async(e)=>{
        e.preventDefault();

        const res = await fetch('https://blog-post-liart-two.vercel.app/add-blog',{
       method:'POST',
       body: JSON.stringify({
         image,title,content,author,likes,email
       }),
       headers:{
         "Content-Type" : "application/json"
      }
     })

     setImage('https://thumbs.dreamstime.com/b/beautiful-golden-autumn-scenery-trees-golden-leaves-sunshine-scotland-united-kingdom-beautiful-golden-autumn-124278811.jpg');
     setTitle('');
     setContent('');
     setAuthor('');
     setLikes(0);
     navigate("/");

    }


  return (
    <Container>
     <BackButton onClick={(e)=>{
      navigate("/")
     }}>🏠</BackButton>
     <h3>Add your Blog....</h3>
      
     

      <InputContainer>
      <p>Write the Author Name</p>
      <input type="text" placeholder="Who writing this..." 

    onChange={(e)=>{
          setAuthor(e.target.value)
        }}
        value={author}
      />
      </InputContainer>

      <InputContainer>
      <p>Write our Blog Title</p>
      <input type="text" placeholder="Title here..." 

    onChange={(e)=>{
          setTitle(e.target.value)
        }}
        value={title}
      />
      </InputContainer>

      <InputContainer>
      <p>Give a image link for your Blog</p>
      <input type="text" placeholder="Image link please..." 

    onChange={(e)=>{
          setImage(e.target.value)
        }}
        value={image}
      />
      </InputContainer>


      <InputContainer>
      <p>Write here want you want</p>
      <input type="text" placeholder="write here the content.." 

    onChange={(e)=>{
          setContent(e.target.value)
        }}
        value={content}
      />
      </InputContainer>

    
      <AddButton onClick={add_blog}>Add in BlogPost</AddButton>
        
    </Container>
  )
}
const Container = styled.div`
width:40%;
min-width:450px;
height:fit-content;
padding:15px;
margin:auto;
display:flex;
flex-direction:column;
align-items:center;
border:1px solid lightgray; 
  h3{
    font-size:28px;
    font-weight:400;
    line-height:33px;
    align-self:flex-start;
    margin-bottom:10px;
  }
`;
const BackButton = styled.div`
 font-size:29px;
 cursor:pointer;
`; 

const AddButton = styled.button`
   border:1px solid black;
   height:5vh;
  width:55%;
   font-size:12px;
   margin-top:20px;
   &:hover{
    background-color:#dfdfdf;
     border:1px solid grey;
   }
`;
const InputContainer = styled.div`
width:100%;
padding:10px;
 p{
    font-size:14px;
    font-weight:600;
 }
 input{
    width:95%;
    height:33px;
    padding-left: 5px;
     border-radius:5px;
     border:1px solid lightgray;
     margin-top:5px;
     &:hover{
        border:1px solid orange;
     }
 }
`;
export default AddBlog