import { createSlice } from '@reduxjs/toolkit'
import trafficSchema from '../schema/trafficSchema'

export const trafficSlice = createSlice({
  name: 'traffic',
  initialState: {
    ...trafficSchema
  },
  reducers: {
    getDataTotalCase: (state, action) => {
      console.log(`${action.type} -> ${JSON.stringify(action.payload)}`)
      return { ...state, totalCase: { ...state.totalCase, loading: true, action: action.type } }
    },
    getDataTotalCaseSuccess: (state, action) => {
      console.log(`${action.type} -> ${JSON.stringify(action.payload)}`)
      return { ...state, totalCase: { ...state.totalCase, loading: false, action: action.type, data: action.payload } }
    },
    getDataTotalCaseFailed: (state, action) => {
      console.log(`${action.type} -> ${JSON.stringify(action.payload)}`)
      return { ...state, totalCase: { ...state.totalCase, loading: false, action: action.type } }
    },
  },
})

export const { getDataTotalCase, getDataTotalCaseSuccess, getDataTotalCaseFailed } = trafficSlice.actions

export default trafficSlice.reducer
