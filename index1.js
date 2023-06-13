const {createStore}= require('redux');

const initialState ={
    count: 0
}

const dataReducer = (state=initialState, action) =>{
    if(action.type === "increment"){
        return {
            ...state ,
            count:state.count+1
        }
    }else if (action.type==="decrement"){
        return{
            ...state,
            count:state.count-1
        }
    }else{
        return state;
    }
}

const store=createStore(dataReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({
    type: 'increment'
})

store.dispatch({
    type: 'decrement'
})