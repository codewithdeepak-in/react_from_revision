### Let's Learn About the Four Important piller of Redux. 

Redux is a state management library for JavaScript applications, often used in conjunction with React it works with react by forming a bridge created using react-redux library. It helps you manage the state of your application in a predictable and organized way. To understand Redux, it's important to grasp four core concepts:

1. store. 
2. action. 
3. reducer
4. dispatch.

### Let's dive into each of them in detail:

1. Store:
   The store is the central piece of Redux. It holds the entire state tree of your application. The state in the store represents the current data of your application. The store is created when you set up your Redux application, and it's the single source of truth for your data.

The store has the following responsibilities:

    Holds the application state.
    Allows access to the state via getState().
    Allows state to be updated via dispatch(action).
    Registers listeners via subscribe(listener).

Action:

    An action is a plain JavaScript object that describes a change in the state. It's the only way your application can interact with the store. An action typically has two properties:

        1. type: A string that describes the type of action being performed.
        2. payload (optional): Data associated with the action, such as new values or parameters.

Actions are created by action creator functions, which are functions that return action objects. They provide a clear and consistent way to define different types of actions your application can take.

Reducer:

A reducer is a function that specifies how the application's state changes in response to an action. It takes in the current state and an action as arguments, and returns the new state. Reducers are pure functions, meaning they don't modify the state directly; instead, they create a new copy of the state based on the changes specified in the action.

A reducer has the following signature:

    javascript
    Copy code   
    (previousState, action) => newState
    
    Redux typically has multiple reducers, each handling a specific part of the application's state. They are then combined into a root reducer using combineReducers, which creates the overall state tree.

Dispatch:

Dispatch is the process of sending an action to the store, triggering a state change. When you call dispatch(action) on the store, Redux runs the reducer functions and calculates the new state based on the current state and the action. The updated state is then stored in the store, and any components subscribed to the store will be notified and re-rendered if the relevant part of the state changes.

Dispatching actions is how you trigger changes in your application's state.

To summarize, Redux operates through a cycle where you dispatch actions to trigger state changes, and the reducers define how those state changes occur. The updated state is stored in the store, which is the single source of truth for your application's data. This cycle helps manage complex state logic in a more organized and predictable manner.




