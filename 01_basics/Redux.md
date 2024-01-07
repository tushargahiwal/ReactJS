 react-dom is used for browser application
react-native is used for mobile or android application

redux
  - it is a independent state mangement library

react-redux
 - it provides a pair of custom react hooks that allow you to react components are interact with redux store

 react-redux toolkit
   -it is a standard way to to write redux logic

reducer
  -  it takes the state of an application and action as arguments and return a new state

useSelector
   - it is used for to select the value from dispatch

useDispatch
    -it is used for to dispatch or return the value from store
    - it is come from react-redux
    - it is used reducers and then change the value in store

steps for create store
  1. import configureStore from @reduxjs/toolkit
  2.create reducers - slices
    createSlice method is import from @reduxjs/toolkit
  3.export individual reducers through actions


payload 
   - it stores the additional information about what happened
