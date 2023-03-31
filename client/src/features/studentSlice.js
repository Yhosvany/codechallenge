import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const slice = createSlice({
    name: 'studentSlice',
    initialState: {
        value: []
    },
    reducers: {
        getAll: (state, action) => {
            state.value = action.payload;
        },
        deleteOne: (state, action) => {
            state.value.splice(action.payload, 1);
        }
    }
});

export const { getAll, deleteOne } = slice.actions;

export const getAllAsync = async dispatch => {
    try {
        const res = await axios.get('http://localhost:3003/api/students');
        dispatch( getAll(res.data) );

    } catch (error) {
        console.log(error);
    }
};

export const deleteOneAsync = (id, index) => async dispatch => {
    if (window.confirm(`Seguro que desea eliminar estos datos?`)) {
        try {
            await axios.delete(`http://localhost:3003/api/students/${id}`);
            dispatch(deleteOne(index));

        } catch (error) {
            console.log(error);
        }
    }
}

export const addOneAsync = async (data) => {
    try {
        await axios.post(`http://localhost:3003/api/students`, data);

    } catch (error) {
        console.log(error);
    }
}

export const students = state => state.studentSlice.value;

export default slice.reducer;