import React, { useState } from 'react'
 import styled from 'styled-components';


function BlogCard({title,author,content,likes,image}) {
   
   
   return (
    <Container>
      <Left>
         <img src={image} alt="" />
      </Left>
      <Right>
        <h1>{title}</h1>
         <p>{content}</p>
        <h4>By- {author}</h4>
        {/* <button>👍</button> */}
      </Right>
    </Container>
  )
}

const Container = styled.div`
  margin:0;
  padding:0;
  width:98%;
  display:flex;
  justify-content:center;
  align-items:center;
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

  h1{
    text-align:center;
  }
  h4{
    text-align:left;
  }
  p{
    
    text-align:justify;

  }
`;

export default BlogCard;