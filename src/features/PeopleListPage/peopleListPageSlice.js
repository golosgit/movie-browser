import { createSlice }  from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    status: "initial",
},
  reducers: {
    fetchPeopleList: (_, { payload: page }) => ({
      status: "loading",
      page: page,
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

export const selectFetchPage = state => selectPeopleListState(state).page;
export const selectPeopleList = state => selectPeopleListState(state).peopleList?.results;
export const selectStatus = state => selectPeopleListState(state).status;
export const selectPage = state => selectPeopleListState(state).peopleList?.page;
export const selectTotalPages = state => selectPeopleListState(state).peopleList?.total_pages;

export default peopleListSlice.reducer;