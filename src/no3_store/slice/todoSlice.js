import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { 
    todoAllGetApi,
    todoPutApi,
    todoPostApi,
    todoDeleteApi
 } from "../api/todo.api"
 




export const todoAllGetSlice = createAsyncThunk(
    "todoAllGetSlice",
    async(_, thunkAPI)=> {
        try{
            return await todoAllGetApi();
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const todoPostSlice = createAsyncThunk(
    "todoPostSlice",
    async(dataObj, thunkAPI)=> {
        try{
            return await todoPostApi(dataObj);
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const todoPutSlice = createAsyncThunk(
    "todoPutSlice",
    async(dataObj, thunkAPI)=> {
        try{
            return await todoPutApi(dataObj);
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const todoToggleSlice = createAsyncThunk(
    "todoToggleSlice",
    async(dataObj, thunkAPI)=> {
        try{
            const newObj ={
                ...dataObj,
                checked: !dataObj.checked
            }
            return await todoPutApi(newObj);
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const todoDeleteSlice = createAsyncThunk(
    "todoDeleteSlice",
    async(id, thunkAPI)=> {
        try{
            await todoDeleteApi(id);
            return id;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const initialObj = {
    subject: "",
    checked: false
  }
const initialState = {
    todoList: [],
    todoObj: initialObj,
    loading: false,
    error: null
  }

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        change: (state, action) => {
            state.todoObj = {
                ...state.todoObj,
                [action.payload.name] : action.payload.value
            }
        },
       
      
    },
    extraReducers: (builder)=> {
        builder
        .addCase(todoAllGetSlice.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(todoAllGetSlice.fulfilled, (state, action)=>{
            state.todoList = action.payload
            state.loading = false
        })
        .addCase(todoAllGetSlice.rejected, (state, action)=>{
            state.error = action.payload
            state.loading = false
        })
        .addCase(todoPostSlice.fulfilled, (state, action)=>{
            state.todoList.push(action.payload);
            state.loading = false;
        })
        .addCase(todoPutSlice.fulfilled, (state, action)=>{
            state.todoList = state.todoList.map(todo =>
                todo.id === action.payload.id
                ? action.payload
                : todo
            );

            state.loading = false;
        })
        .addCase(todoToggleSlice.fulfilled, (state, action)=>{
            state.todoList = state.todoList.map(todo =>
            todo.id === action.payload.id
            ? action.payload
            : todo
            );
            state.loading = false
        })

        .addCase(todoDeleteSlice.fulfilled, (state, action)=>{
            state.todoList = state.todoList.filter(
                todo => todo.id !== action.payload
            );

            state.loading = false;
    })
        }
    })

export const{change} = todoSlice.actions;
export default todoSlice.reducer;
