import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import { counterSlice } from './counterSlice'

export default configureStore({
  reducer: {
      counter: reducer
  },
})