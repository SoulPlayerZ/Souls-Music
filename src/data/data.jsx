const data = [
  {
    user: "celino",
    password: "123qwe!!",
  }
]

export const getUser = (userName, userPassword) => {
  const user = data.find((user) => user.user === userName && user.password === userPassword);
  
  if (user){
    return user.user;
  }
    return undefined;
} 

export const addUser = (user, password) => {
  if(getUser(user, password)){
    return false;
  } else {
    data.push({ user, password  })
  }

  return true;

}

export default data;