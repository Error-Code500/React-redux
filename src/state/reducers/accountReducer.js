  const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit": // deposit is the action
            return state + action.payload    // change state to what ever state originally was which is 0 plus the 
                                            // action.payload;
        case "withdraw":
            return state - action.payload // decrement
            
            
            default:
                return state 
    }
}

export default reducer;



// NOTE : YOU CAN HAVE ONE OR MORE REDUCER
//        import to index.js