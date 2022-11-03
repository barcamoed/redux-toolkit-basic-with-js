const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;


console.log('Initial StateEEEE',store.getState());

const unSub = store.subscribe(()=>{
    console.log('State Updated',store.getState());
});

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.reStocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.reStocked(3))

//------------- Async Request ------------//

store.dispatch(fetchUsers());

// unSub();
