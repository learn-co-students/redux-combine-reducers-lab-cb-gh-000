export function addBook(book){
  return {
    type: 'ADD_BOOK',
    payload: book
  };
}

export function removeBook(book){
  return {
    type: "REMOVE_BOOK",
    payload: book
  };
}

export function addRecommendedBook(book){
  return {
    type: 'ADD_RECOMMENDED_BOOK',
    payload: book
  };
}

export function removeRecommendedBook(book){
  return {
    type: "REMOVE_RECOMMENDED_BOOK",
    payload: book
  };
}

/*
   I can see how coding it like this is
   less clear than the other way:

export function addBook(payload){
  const type = 'ADD_BOOK';
  return { type, payload }
}
*/
