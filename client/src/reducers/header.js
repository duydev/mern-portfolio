import { types } from '../actions/header'

const initialState = {
  fullName: 'Trần Nhật Duy',
  description: `I'm a fullstack developer. I love to build awesome product.`,
  email: 'duytn.hcm@gmail.com',
  avatarUrl: 'https://www.gravatar.com/avatar/?s=200&d=mp',
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_AVATAR_SUCCESS:
      return {
        ...state,
        avatarUrl: action.payload.avatarUrl
      }
    default:
      return state
  }
}

export default reducer
