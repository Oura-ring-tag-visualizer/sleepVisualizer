import axios from 'axios'

// ACTION TYPES
const GET_DATES = 'GET_DATES'
const GET_TAGS = 'GET_TAGS'

// ACTION CREATORS

const getDates = dates => ({
  type: GET_DATES,
  dates
})

const getTags = tags => ({
  type: GET_TAGS,
  tags
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
    default:
      return state
  }
}
