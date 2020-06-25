import axios from 'axios'

// ACTION TYPES
const GET_DATES = 'GET_DATES'
const GET_TAGS = 'GET_TAGS'

// ACTION CREATORS

const getDates = () => ({
  type: GET_DATES
})

const getTags = tag => ({
  type: GET_TAGS,
  tag
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
  tagName: ''
}

// REDUCER

export default function tagReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TAGS:
      return {...state, tagName: action.tag}
    default:
      return state
  }
}
