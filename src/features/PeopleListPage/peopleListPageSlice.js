import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    status: "initial",
  },
  reducers: {
    fetchPeopleList: (_, { payload: { pageNumber, searchParam } }) => ({
      status: "loading",
      page: pageNumber,
      query: searchParam,
    }),
    fetchPeopleListSuccess: (_, { payload: { status, results } }) => ({
      status: status,
      peopleList: results,
    }),
    fetchError: () => ({
      status: "error",
    }),
  },
});

export const { fetchPeopleList, fetchPeopleListSuccess, fetchError } = peopleListSlice.actions;

const selectPeopleListState = state => state.peopleList;

export const selectUrlPageParam = state => selectPeopleListState(state).page;
export const selectUrlSearchParam = state => selectPeopleListState(state).query;
export const selectPeopleList = state => selectPeopleListState(state).peopleList?.results;
export const selectStatus = state => selectPeopleListState(state).status;
export const selectPage = state => selectPeopleListState(state).peopleList?.page;
export const selectTotalPages = state => selectPeopleListState(state).peopleList?.total_pages;
export const selectTotalResults = state => selectPeopleListState(state).peopleList?.total_results;

export default peopleListSlice.reducer;
