import { createSlice }  from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    status: "initial",
},
  reducers: {
    fetchPersonDetails: (_, { payload: id }) => ({
      status: "loading",
      personId: id,
    }),
    fetchPersonDetailsSuccess: (_, { payload: results }) => ({
      status: "success",
      personDetails: results.personDetails,
      creditsCast: results.credits.cast,
      creditsCrew: results.credits.crew,
    }),
    fetchError: () => ({
      status: "error",
    }),
  },
});

export const { fetchPersonDetails, fetchPersonDetailsSuccess, fetchError } = personDetailsSlice.actions;

const selectPersonDetailsState = state => state.personDetails;

export const selectPersonDetails = state => selectPersonDetailsState(state).personDetails;
export const selectStatus = state => selectPersonDetailsState(state).status;
export const selectPersonId = state => selectPersonDetailsState(state).personId;

export default personDetailsSlice.reducer;