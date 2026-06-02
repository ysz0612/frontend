import styled from 'styled-components'
import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../../no0_context/TodoContext'
import { useDispatch, useSelector } from 'react-redux'
import {  todoPostSlice, change, todoAllGetSlice } from '../../no3_store/slice/todoSlice'

const TodoInsert = () => {
    const {todoObj} = useSelector(state=>state.todo);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(todoAllGetSlice());
    }, []);

    const handleChange = (e) => {
        const {name, value} =e.target
       dispatch(change({name, value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(todoPostSlice(todoObj))
    }  

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="subject"
                value={todoObj.subject}
                onChange={handleChange}
                required
                placeholder='할 일을 입력하세요'
            />

            <Button>입력</Button>
        </Form>
    )
}

export default TodoInsert

const Form = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;

    &:focus{
        outline: none;
        border-color: #7950f2;
    }
`;

const Button = styled.button`
    padding: 0 20px;
    border: none;
    background: #7950f2;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;

    &:hover{
        background: #6741d9;
    }
`;