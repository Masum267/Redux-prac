const { createStore } = require("redux");

const initialState = {
	count: 0,
	counter: 100,
};

// action identifier
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


const INCREMENT2 = "INCREMENT2";

// action
const increment = (value) => {
	return {
		type: INCREMENT,
		payload: value,
	};
};
const decrement = (value) => {
	return {
		type: DECREMENT,
		payload: value,
	};
};

const counterReducer = (state = initialState, action) => {
	if (action.type === INCREMENT) {
		return {
			...state,
			count: state.count + action.payload,
		};
	} else if (action.type === DECREMENT) {
		return {
			...state,
			count: state.count - action.payload,
			counter: state.counter - action.payload,
		};
	} else if(action.type===INCREMENT2){
		return{
			...state,
			counter:state.counter+1
		}
	}
	else {
		return state;
	}
};

const store = createStore(counterReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(increment(2));

store.dispatch(increment(4));

store.dispatch(increment(6));

store.dispatch(increment(8));

store.dispatch(decrement(10));


store.dispatch({
	type:INCREMENT2
})