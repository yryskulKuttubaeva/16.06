import { createSlice } from "@reduxjs/toolkit";

const counterSlice= createSlice ({
  name:"counter",
  initialState: {
    number:0
  }, 
  reducers: {
    increment: function(store) {
      // store.number = store.number + 1
      // store.number += 1;
      store.number++;
    },
    decrement: function(store) {
      // store.number = store.number - 1
      // store.number -= 1;
      store.number--;
    },
  },
})

export default counterSlice.reducer



// export const counterSlice = {
//   name:"counter",
//   initialState :0,
//   reducer: {
//     increment: (store) => {
//       return store + 1
//     },

//     decrement: (store) => {
//       return store - 1
//   }
//   }
//   };
//   export const {increment, decrement} = counterSlice.actions
// export default counterSlice.reducer;