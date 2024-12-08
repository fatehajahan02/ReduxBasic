import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log(state.value, 'state');
            console.log(action.payload, 'action');
            state.value += 1
        },
        decrement: (state, action) => {
            console.log(state.value, 'state');
            console.log(action.payload, 'action');

            if (state.value > 0) {
                state.value -= 1
            }
        },
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer