import React, { useEffect, useState } from 'react'
 import styled from 'styled-components';


function BlogCard({id,title,author,content,likes,image}) {
   
    const [like,setLike] = useState(likes);
     const [flag,setFlag] = useState(true);
      const [check,setCheck] = useState(window.localStorage.getItem("Liked"));
      const [user,setUser] = useState(window.localStorage.getItem("USER"));
     const get_like = async(like)=>{
      if(check=="NO")
      {
        const data = await fetch('https://blog-post-liart-two.vercel.app/update-likes',{
          method:'POST',
          body : JSON.stringify({id:id,like:like}),
          headers:{
            "Content-Type" : "application/json"
         }
        })
        window.localStorage.setItem("Liked","Yes");
        setCheck("Yes");
      }
      
     }

     useEffect(()=>{
      window.localStorage.setItem("Liked","NO");
     })

   return (
    <Container>
      <Left>
         <img src={image} alt="" />
      </Left>
      <Right>
        <h1>{title}</h1>
         <p>{content}</p>
        <h4>By- {author}</h4>
        
         {
           user? <button onClick={(e)=>{
          if(flag)
          {
            setFlag(false)
            setLike(like+1)
            get_like(like+1);

          }
          else{
            setFlag(true)
            setLike(like-1)
          get_like(like-1);
          }

        }}>👍{like}</button>:<></>
         }
      </Right>
      <End></End>
    </Container>
    
  )
}

const Container = styled.div`
  margin:0;
  padding:0;
  width:q;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  flex-wrap:wrap
`;
const Left = styled.div`
 img{
   height:30vh;
   width:30vw;
 }
 
`;
const Right = styled.div`
 width:auto;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 flex-wrap:wrap;
  button{
    width:auto;
    &:hover{
      background-color:#ADD8E6;
      cursor:pointer;

    }

  }
  h1{
    text-align:center;
  }
  h4{
    text-align:left;
  }
  p{
    padding-left:2%;
    padding-right:2%;
    text-align:justify;
  }
`;

const End = styled.div`
 margin-top:2%;
 border:4px solid gray;
 width:98%;
 border-radius:5px;
 margin-bottom:2%;
`;
export default BlogCard;