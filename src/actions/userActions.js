export const addUserAction = (user) => {
    return ( dispatch, state, { getFirestore }) => {
      getFirestore()
      .collection('users')
      .add(user)
      .then((doc) => {
        dispatch({
              type: 'ADD_USER',
              payload: user,
            })   
      });
    };    
};

  
  export function deleteUserAction(id) {
    return {
      type: 'DELETE_USER',
      payload: id,
    };
  }
  
  export function updateUserAction(id, updatedUser) {
    return {
      type: 'UPDATE_USER',
      payload: { id: id, updatedUserInfo: updatedUser },
    };
  }

  //get allusers from firebase store

export const getAllUsers =() => {
  return (dispatch, state, {getFirestore}) =>{
    getAllUsers().collection('users').onSnapshot((snapshot) =>{
      let users = [];
      snapshot.forEach((doc) =>{
        users.push(doc.data())
      });
      console.log(users);
      dispatch({
        type: "SET_ALL_USERS",
        payload: users
      })
    },
    (err)=>{}
    )
  }
}
  