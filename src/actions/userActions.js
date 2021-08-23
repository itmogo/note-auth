export const addUserAction = (user) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add(user)
      .then((doc) => {
       // dispatch({
        //  type: "ADD_USER",
        //  payload: user,
       // });
      });
  };
};

export const deleteUserAction =(id) => {
    return(dispatch, state, {getFirestore})=>{
      getFirestore()
      .collection('users')
      .doc(id)
      .delete().then(() =>{

      })
    }   
  
  //{
    //type: "DELETE_USER",
    //payload: id,
  //};
}

export function updateUserAction(id, updatedUser) {
  return {
    type: "UPDATE_USER",
    payload: { id: id, updatedUserInfo: updatedUser },
  };
}

//get allusers from firebase store

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .onSnapshot(
        (snapshot) => {
          let users = [];
          snapshot.forEach((doc) => {             
            users.push({...doc.data(), id: doc.id});
          });
          console.log(users); 
          dispatch({
            type: "SET_ALL_USERS",
            payload: users,
          });
        },
        (err) => {}
      );
  };
};
