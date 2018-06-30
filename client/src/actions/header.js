import gravatar from 'gravatar'

export const types = {
  FETCH_AVATAR_SUCCESS: 'FETCH_AVATAR_SUCCESS'
}

export const fetchAvatarSuccess = avatarUrl => ({
  type: types.FETCH_AVATAR_SUCCESS,
  payload: { avatarUrl }
})

export const fetchAvatar = email => dispatch => {
  const avatarUrl = gravatar.url(email, { s: 200, d: 'mp' })
  dispatch(fetchAvatarSuccess(avatarUrl))
}
