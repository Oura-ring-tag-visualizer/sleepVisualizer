import axios from 'axios'

// ACTION TYPES
const GET_DATES = 'GET_DATES'
const GET_TAGS = 'GET_TAGS'
const CREATE_DATE = 'CREATE_DATE'
const UPDATE_DATE = 'UPDATE_DATE'
const DELETE_DATE = 'DELETE_DATE'

// ACTION CREATORS

const getDates = dates => ({
  type: GET_DATES,
  dates
})

const getTags = tags => ({
  type: GET_TAGS,
  tags
})

const createDate = date => ({
  type: CREATE_DATE,
  date
})

const updateDate = date => ({
  type: UPDATE_DATE,
  date
})

const deleteDate = date => ({
  type: DELETE_DATE,
  date
})

// THUNK CREATORS
export const fetchAllDates = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/tags')
      dispatch(getDates(data))
    } catch (error) {
      console.log('ERROR IN FETCHALLDATES THUNK')
    }
  }
}

export const fetchTag = tagName => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/tags/${tagName}`)
      dispatch(getTags(data))
    } catch (error) {
      console.log('ERROR IN FETCHTAG THUNK')
    }
  }
}

export const createNewDate = newDate => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/tags`, newDate)
      dispatch(createDate(data))
    } catch (error) {
      console.log('ERROR IN CREATENEWDATE THUNK')
    }
  }
}

export const updateExistingDate = dateToUpdate => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/tags`, dateToUpdate)
      dispatch(updateDate(data))
    } catch (error) {
      console.log('ERROR IN UPDATEEXISTINGDATE THUNK')
    }
  }
}

export const deleteExistingDate = dateToDelete => {
  return async dispatch => {
    try {
      console.log(dateToDelete)
      await axios.delete(`/api/tags/`, {data: dateToDelete})
      dispatch(deleteDate(dateToDelete))
    } catch (error) {
      console.log('ERROR IN DELETEEXISTINGDATE THUNK', error)
    }
  }
}

const initialState = {
  tags: [],
  dates: []
}

// REDUCER

export default function tagReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TAGS:
      return {...state, tags: action.tags}
    case GET_DATES:
      return {...state, dates: action.dates}
    case CREATE_DATE:
      return {...state, dates: [state.dates, action.date]}
    case UPDATE_DATE:
      return {...state, tags: [state.tags, action.date]}
    case DELETE_DATE:
      return state.dates.filter(date => date !== action.date)
    default:
      return state
  }
}
