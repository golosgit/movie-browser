import { createSlice }  from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    status: "initial",
},
  reducers: {
    fetchPeopleList: () => ({
      status: "loading",
    }),
    fetchPeopleListSuccess: (_, { payload: peopleList }) => ({
      status: "success",
      peopleList: peopleList,
    }),
    fetchError: () => ({
      status: "error",
    }),
  },
});

export const { fetchPeopleList, fetchPeopleListSuccess, fetchError } = peopleListSlice.actions;

const selectPeopleListState = state => state.peopleList;

export const selectPeopleList = state => selectPeopleListState(state).peopleList;
export const selectStatus = state => selectPeopleListState(state).status;

export default peopleListSlice.reducer;