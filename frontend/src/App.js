import React from 'react'
import './App.css'
import styled from "styled-components"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import AddBlog from './components/AddBlog'
import PrivateComponent from './components/PrivateComponent'
import Profile from './components/Profile'
function App() {
  return (
     < Router>
        <Container>
                  <Routes>
                   <Route element={<PrivateComponent/>}>
                   <Route path="/addblog" element={<AddBlog/>}/>
                   <Route path="/profile" element = {<Profile/>}/>
                   </Route>
                     <Route path="/" element={<Home/>}/>
                     <Route path="/login" element={<Login/>}/>
                     <Route path="signup" element={<SignUp/>}/>
                  </Routes> 
        </Container>
     </ Router>
  )
}

const Container = styled.div`
 width:100vw;
`;

export default App