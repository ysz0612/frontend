import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_conponents/layout/HeaderBar'
import SiderBar from './no2_conponents/layout/SiderBar'

import styled from 'styled-components'
import LoginPage from './no1_pages/user/LoginPage'
import RegisterPage from './no1_pages/user/RegisterPage'
import EmployeeProvider, { EmployeeContext } from './no0_context/EmployeeContext'
import UserProvider from './no0_context/UserContext'
import TodoProvider from './no0_context/TodoContext'
import { Provider } from 'react-redux'
import store from './no3_store/Index'



function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
        
          <HeaderBar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        
        <SiderBar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <Content>
          <Routes>
            
          
                  <Route path="/login" element={ <LoginPage/>}
               />
               <Route path="/register" element={
                <RegisterPage
                />}
               /> 

             
            
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={
                <TodoPage/>
              } />
            <Route path="/employee" element={
            
                <EmployeePage />
            
              } />

          </Routes>
        </Content>

      </Layout>
      </Provider>
    </BrowserRouter>
  )
}

export default App

const Layout = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`

const Content = styled.main`
  flex: 1;
  margin-left: 240px;
  padding: 90px 30px 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 80px 20px;
  }
`