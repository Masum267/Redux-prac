const { createStore } = require("redux");

const initialState = {
	count: 0,
	counter: 100,
};

// action identifier
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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
			counter: state.counter + action.payload,
		};
	} else if (action.type === DECREMENT) {
		return {
			...state,
			count: state.count - action.payload,
			counter: state.counter - action.payload,
		};
	} else {
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