import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import BlogCard from './BlogCard';
import Login from './Login';
function Home() {
 const [check,setCheck] = useState("");
 const [blog,setBlog] = useState(null);
 const navigate = useNavigate();
 const getBlog = async()=>{
   const data = await fetch('https://blog-post-opal.vercel.app/get-blog');
   const Jdata =await data.json();
   console.log(Jdata);
   setBlog(Jdata);
  }
  useEffect(()=>{
    if(!blog)
    {
      getBlog();
    }
    setCheck(window.localStorage.getItem('USER'));
  });
   

  const Logout = ()=>{
    window.localStorage.clear();
    navigate("/");
  }
  
    
 
    return(
       <Container>


        <TopBar>
          <Logo onClick={(e)=>{
              navigate("/")
            }}>
            <img  src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-12.png" alt="logo image" />
          </Logo>
          <Intro>
            <h3>Welcome..to BlogPost</h3>
            <h5>{check}</h5>
          </Intro>
          <RightButton>
                   
                  {  
                    check?<LogOut onClick={Logout}>Logout</LogOut>:<SignUp onClick={(e)=>{
                      navigate("/login")
                    }}>Register Your Self</SignUp>
                  }
                   
          </RightButton>
        </TopBar>

      

         <Mid>
          {
            
            check?
            <Log>
             
            <h1>Sometimes I think of blogging as finger exercises for a violinist; 
            <br/>sometimes I think of it as mulching a garden. It is incredibly useful and helpful to my “real” writing.</h1>
              <h2>~Kate Christenson</h2>
              <button onClick={(e)=>{navigate("addblog")}}>Add Your Blog from here</button>
            </Log>:
            <Register><h1>Register Your Self &</h1><br/>
            <h1>"Don’t say anything online that you wouldn’t want plastered on a billboard with your face on it"</h1>
            <button onClick={(e)=>{navigate("/login")}}>Start Posting</button>
       </Register>
          }
         </Mid>
       
         <End>
          {
            blog&&blog.map((x,key)=>(
             <BlogCard key={key} title={x.title} like = {x.likes} image = {x.image} author={x.author} content={x.content}/>
            ))
          }
         </End>
         <span>Created by Hunter </span>
         <a target="_blank" href="https://github.com/hunter1290">Connect with me</a>
       </Container>
     )

    


}

const Container = styled.div`
overflow-x:hidden;

 display:flex;
 align-items:center;
 flex-direction:column;
 justify-content:center;

 span{
  padding-top:3%;
  width:100%;
  text-align:center;
  font-size:22px;
  font-weight:800;
 }
 a{
  width:100%;
  text-align:center;
  font-size:22px;
  font-weight:800;
  text-decoration:none;
  color:#000;
 }
`;

const TopBar = styled.div`
width:100%;
display:flex;
z-index:10;
align-items:center;
justify-content:center;
gap:30%;

@media (max-width: 768px) {
  gap:15%;
  }


`;
const Logo = styled.div`
  ${'' /* border:2px solid; */}
  cursor:pointer;
  img{
    height:8vh;
  }
`;
const RightButton = styled.div`
 
`;

const LogOut = styled.button`
 border:none;
 font-size:18px;
 background-color:#000;
 color:#fff;
 border-radius:2px;
 font-weight:700;
 &:hover{
  background-color:gray;
  color:#000
 }
`;
const SignUp = styled.button`
border:none;
 font-size:18px;
 background-color:#000;
 color:#fff;
 border-radius:2px;
 font-weight:700;
 &:hover{
  background-color:gray;
  color:#000
 }

`;

const Intro = styled.div`
 text-align:center;
 h3{
  font-weight:900;
    font-size:27px;
 }
  h5{
    font-weight:900;
    font-size:18px;
   
  }
`;


const Mid = styled.div`
  height:75vh;
  background:url('https://w0.peakpx.com/wallpaper/634/425/HD-wallpaper-old-paper-texture-old-letter-paper-backgrounds-paper-textures-old-paper-brown-paper-background-retro-paper-background-paper-design.jpg');
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  ${'' /* filter: blur(8px); */}
  ${'' /* -webkit-filter: blur(8px); */}
`;
const Log = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
 padding-bottom:10%;
 
 button{
  margin-top:10%;
  border:none;
 font-size:18px;
 background-color:#000;
 color:#fff;
 border-radius:2px;
 font-weight:700;
 &:hover{
  background-color:gray;
  color:#000
 }
 }
`;

const End = styled.div`
overflow-x:hidden;

 margin-top:2%;
`;

const Register = styled.div`
 display:flex;
 justify-content:center;
 flex-direction:column;
 align-items:center;
button{
  width:15%;
  border:none;
 font-size:18px;
 background-color:#000;
 color:#fff;
 border-radius:2px;
 font-weight:700;
 &:hover{
  background-color:gray;
  color:#000
 }
 }
`;

export default Home
