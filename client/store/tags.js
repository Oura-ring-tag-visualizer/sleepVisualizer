import axios from 'axios'

// ACTION TYPES
const GET_TAGS = 'GET_TAGS'

// ACTION CREATORS
const getTags = tag => ({
  type: GET_TAGS,
  tag
})

// THUNK CREATORS
export const fetchTag = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/tags/tagName')
      dispatch(getTags(data))
    } catch (error) {
      console.log('ERROR IN FETCHTAG THUNK')
    }
  }
}

const initialState = []

// REDUCER

export default function tagReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TAGS:
      return [...state, action.tag]
    default:
      return state
  }
}
