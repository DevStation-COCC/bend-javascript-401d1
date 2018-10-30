import superagent from 'superagent';

// SYNC ACTIONS
export const tokenSet = token => {
  return {
    type: 'TOKEN_SET',
    payload: token
  };
};

export const tokenDelete = () => {
  return {type: 'TOKEN_DELETE'};
};

// ASYNC ACTIONS
export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .withCredentials() // cookies
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('token', res.text);
      return res;
    })
    .catch(console.error);
};

export const loginRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('token', res.text);
      return res;
    });
};
