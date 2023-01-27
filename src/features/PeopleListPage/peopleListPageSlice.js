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
    fetchPeopleListSuccess: (_, { payload: results }) => ({
      status: "success",
      peopleList: results,
    }),
    fetchError: () => ({
      status: "error",
    }),
  },
});

export const { fetchPeopleList, fetchPeopleListSuccess, fetchError } = peopleListSlice.actions;

const selectPeopleListState = state => state.peopleList;

export const selectPeopleList = state => selectPeopleListState(state).peopleList?.results;
export const selectStatus = state => selectPeopleListState(state).status;
export const selectPage = state => selectPeopleListState(state).peopleList?.page;
export const selectTotalPages = state => selectPeopleListState(state).peopleList?.total_pages;

export default peopleListSlice.reducer;