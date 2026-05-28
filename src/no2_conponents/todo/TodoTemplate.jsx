import React from 'react'
import styled from 'styled-components'

const TodoTemplate = ({children}) => {
  return (
    <Container>
        <Title>일정관리</Title>
        <Content>
            {children}
        </Content>
    </Container>
  )
}

export default TodoTemplate

const Container = styled.div`
    width: 500px;
    margin: 50px auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    overflow: hidden;
`;

const Title = styled.div`
    background: #7950f2;
    color: white;
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const Content = styled.div`
    padding: 20px;
`;