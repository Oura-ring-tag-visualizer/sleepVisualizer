import axios from 'axios'

// ACTION TYPES
const GET_DATES = 'GET_DATES'
const GET_TAGS = 'GET_TAGS'
const CREATE_DATE = 'CREATE_DATE'

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
    default:
      return state
  }
}
