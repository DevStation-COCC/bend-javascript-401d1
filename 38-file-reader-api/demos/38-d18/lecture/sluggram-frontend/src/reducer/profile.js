let validateProfile = profile => {
  let {avatar, bio, _id, owner, username, email} = profile
  if(!avatar || !bio || !_id || !owner || !username || !email) throw new Error('VALIDATION ERROR: profile requires additional info')
  return profile
}

export default (state=null, action) => {
  let {type, payload} = action
  switch(type) {
    case 'PROFILE_SET': return validateProfile(payload)
    case 'PROFILE_CREATE': return validateProfile(payload)
    default: return state
  }
}