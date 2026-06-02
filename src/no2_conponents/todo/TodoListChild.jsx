import React, {useContext, useState} from 'react'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from "react-icons/md"
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todoDeleteSlice,todoPutSlice, todoToggleSlice } from '../../no3_store/slice/todoSlice'

// import {TodoContext } from '../../no0_context/TodoContext'

const TodoListChild = ({item}) => {
    const dispatch = useDispatch();

    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(item.subject)


   const handleUpdate = () => {
    dispatch(todoPutSlice({
        ...item,
        subject: value
    }));

    setEditing(false);
}
    return (
        <ItemBlock>

            <CheckBox onClick={()=> dispatch(todoToggleSlice(item))}>
                {
                    item.checked
                    ? <MdCheckBox/>
                    : <MdCheckBoxOutlineBlank/>
                }
            </CheckBox>

            <TextArea>
                {
                    editing
                    ?
                    <EditInput
                        type="text"
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        onBlur={handleUpdate}
                        onKeyDown={(e)=>{
                            if(e.key==="Enter"){
                                handleUpdate()
                            }
                        }}
                        autoFocus
                    />
                    :
                    <Checked
                        $checked={item.checked}
                        onDoubleClick={()=>setEditing(true)}
                    >
                        {item.subject}
                    </Checked>
                }
            </TextArea>

            <DeleteBtn onClick={()=> dispatch(todoDeleteSlice(item.id))}>
                <MdRemoveCircleOutline/>
            </DeleteBtn>

        </ItemBlock>
    )
}

export default TodoListChild


const ItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 10px;
    border-bottom: 1px solid #eee;
`;

const CheckBox = styled.div`
    font-size: 24px;
    color: #7950f2;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const TextArea = styled.div`
    flex: 1;
    margin-left: 15px;
`;

const Checked = styled.div`
    font-size: 18px;
    cursor: pointer;
    text-decoration: ${({$checked}) =>
        $checked ? "line-through" : "none"
    };

    color: ${({$checked}) =>
        $checked ? "#999" : "#222"
    };
`;

const DeleteBtn = styled.div`
    font-size: 24px;
    color: #ff6b6b;
    cursor: pointer;

    &:hover{
        color: red;
    }
`;

const EditInput = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
`;