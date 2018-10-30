import superagent from 'superagent';

// *****************************************************************
// SYNC ACTIONS
// talk to the redux store
// ***************************************************************** 
export const listSet = (lists) => ({
  type: 'LIST_SET',
  payload: lists,
});

export const listCreate = (list) => ({
  type: 'LIST_CREATE',
  payload: list,
});

export const listUpdate = (list) => ({
  type: 'LIST_UPDATE',
  payload: list,
});

export const listDelete = (list) => ({
  type: 'LIST_DELETE',
  payload: list,
});

// Async actions
export const listCreateRequest = list => dispatch => {
  return superagent.post(`${__API_URL__}/api/lists`)
    .set('Authorization', 'Bearer ' + list.token)
    .send(list)
    .then(res => {
      dispatch(listCreate(res.body));
      return res;
    })
    .catch(console.error);
};

export const listDeleteRequest = list => dispatch => {
  return superagent.delete(`${__API_URL__}/api/lists/${list._id}`)
    .set('Authorization', 'Bearer ' + list.token)
    .then(res => {
      dispatch(listDelete(list));
      return res;
    })
    .catch(err => console.error(err));
};

export const listsFetchRequest = token => dispatch => {
  // isFetching = true;
  return superagent.get(`${__API_URL__}/api/lists`)
    .set('Authorization', 'Bearer ' + token)
    .then(res => {
      dispatch(listSet(res.body));
      // isFetching = false;
      return res;
    });
}
