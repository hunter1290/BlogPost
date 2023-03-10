import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import SignUp from './SignUp';

function Login() {
    const navigate = useNavigate();
      const [email,setEmail] = useState("");
       const [password,setPassword] = useState("");
       const LoginUser = async(e)=>{
        e.preventDefault();
               const res = await fetch("https://blog-post-liart-two.vercel.app/login-user",{
                 method:'post',
                 body:JSON.stringify({
                   email,password
                 }),
                 headers:{
                   "Content-Type" : "application/json"
                }
               })

               const data = await res.json();
               console.log(data);
               
               if(data.message!="NO USER FOUND")
               {
                 localStorage.setItem("USER",data.name);
                 localStorage.setItem('EMAIL',email)

                 setEmail("");
                 setPassword("");
                 navigate("/");
               }
               else{
                 alert("NO USER FOUND");
                 navigate("/login");
               }
               
     }
       
  return (
    <Container>
        <Logo>
            
        </Logo>
        
        <FormContainer>
         <h3>Log-In</h3>
          
            <InputContainer>
            <p>Email</p>
            <input type="email" placeholder="example@example.com" 

              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
            </InputContainer>

            <InputContainer>
            <p>Password</p>
            <input type="password" placeholder="*******"
              
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
             />
            </InputContainer>
           <LoginButton onClick={LoginUser}>Login</LoginButton>
         
        </FormContainer>
        <SignUpButton onClick={()=>navigate("/signup")}>Create Account for BlogPost</SignUpButton>

        </Container>
  )
}

const  Container = styled.div`
width:40%;
min-width:450px;
height:fit-content;
padding:15px;
margin:auto;
display:flex;
flex-direction:column;
align-items:center; 

`;

const Logo = styled.div`
 width:120px;
 margin-bottom:20px;
  img{
    width:100%;
  }
`;

const FormContainer = styled.div`
  border:1px solid lightgray; 
  width:55%;
  height:400px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 15px;
  h3{
    font-size:28px;
    font-weight:400;
    line-height:33px;
    align-self:flex-start;
    margin-bottom:10px;
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

const LoginButton = styled.button`
  width:70%;
  height:35px;
  background-color:#ADD8E6;
  border-radius:10px;
  outline:none;
  margin-top:30px;
`;



const SignUpButton = styled.button`
   border:1px solid black;
  width:55%;
   height:35px;
   font-size:12px;
   margin-top:20px;
   &:hover{
    background-color:#dfdfdf;
     border:1px solid grey;
   }
`;

export default Login