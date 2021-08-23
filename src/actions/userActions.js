export const addUserAction = (user) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")       
      .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
      .then((doc) => {
       
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
}

export const updateUserAction = (id, updatedUser) =>{
  return (dispatch, state, {getFirestore}) => {
    getFirestore()
    .collection('users')
    .doc(id)
    .set(updatedUser)
    .then(()=>{

    }).catch((err)=>{

    });
  }  
}

//get allusers from firebase store

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .orderBy('timestamp', 'desc')
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
