import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Profile() {
  
     const [user,setUser] = useState(null);
     const [mail,setMail] = useState(null);
     const [blog,setBlog] = useState(null);
     const [id,setId] = useState(null);
     const navigate = useNavigate();
     const user_get_blog = async()=>{
          const data = await fetch("https://blog-post-liart-two.vercel.app/user-blog",{
            method:'POST',
            body:JSON.stringify({mail}),
            headers:{
              "Content-Type" : "application/json"
           }
          })
          const data_blog = await data.json();
          setBlog(data_blog);
     }

     const Delete_blog = async(id)=>{
      const data = await fetch("https://blog-post-liart-two.vercel.app/delete-blog",{
        method:'DELETE',
        body : JSON.stringify({id:id}),
        headers:{
          "Content-Type" : "application/json"
       }
      })
      window.location.reload();
     }



     useEffect(()=>{
      
        setUser(window.localStorage.getItem('USER'));
        setMail(window.localStorage.getItem('EMAIL'));
  
          if(!blog)
          {
             user_get_blog();
          }
     })

  return (
   
      <Container>
       <h1>Welcome to Profile Page ..{user}</h1>
       <BackButton onClick={(e)=>{
      navigate("/")
     }}>🏠</BackButton>

        <Down>
        {
        blog&&blog.map((x,key)=>(
        <Card key={key}>
          <img src={x.image}></img>
          <h3>{x.title}</h3>
          <p>{x.content}</p>
          <button onClick={(e)=>{Delete_blog(x._id)}}>🗑️</button>
        </Card>
      ))
       }
        </Down>

      </Container>
     
  )
}
const Container = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;

`;
 const Down = styled.div`
  display:flex;
  justify-content:center;
 align-items:center; 
  flex-wrap:wrap;
 `;
const Card = styled.div`
 display:flex;

 justify-content:center;
 align-items:center;
 flex-direction:column;
 flex-wrap:wrap;
 @media (max-width: 768px) {
   width:auto;
  }
 
 p {
  text-align:justify;

     width: 250px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
}
 
 img{
  height:25vh;
 }
 button{
  border:none;
  font-size:18px;
  cursor:pointer;
   &:hover{
    background-color:red;
   }
 }
`;

const BackButton = styled.div`
 margin-top:4%;
 margin-bottom:5%;
 font-size:29px;
 cursor:pointer;
`; 

export default Profile