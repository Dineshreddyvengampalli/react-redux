import { createSlice,configureStore} from '@reduxjs/toolkit'
// import { createStore } from 'redux'




// let reducer = (state = {counter : 0},action)=>{
//     if(action.type === 'increment'){
//         return{
//             counter : state.counter + 1
//         }
//     }
//     if(action.type === 'decrement'){
//         return{
//             counter : state.counter - 1
//         }
//     }
//     else{
//         return state
//     }


// }

// let store  = createStore(reducer)

const initialState = {
    counter: 0,
  };
  

let counterSclice = createSlice({
    name : 'counter-sclice',
    state : initialState,
    reducers : {
        increment (state){
            state.counter++
        },
        // decrement (state){
        //     state.counter--
        // }
    }
})


let store = configureStore({
    reducer : counterSclice.reducer
})
export const redFunctions = counterSclice.actions
export default store