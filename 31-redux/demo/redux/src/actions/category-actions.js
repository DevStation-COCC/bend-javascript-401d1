import uuid from 'uuid/v5';

export const categoryCreate = category => {
  category.id = uuid();
  category.timestamp = new Date();
  // ANYTHING I WANT

  return {
    type: 'CATEGORY_CREATE',
    payload: category
  };
};

export const categoryReset = () => ({type: 'CATEGORY_RESET'});