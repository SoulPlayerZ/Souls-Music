const data = [
  {
    user: "celino",
    password: "123qwe!!",
  }
]

const checkUser = (user) => {
  if(!user || typeof user !== "string") {
    return false;
  }

  return true;
}

const checkPassword = (password) => {
    if(!password || typeof password !== "string") {
      return false;
    }
  
    return true;
  }


export const getUser = (userName, userPassword) => {
  checkUser(userName);
  checkPassword(userPassword);

  const user = data.find((user) => user.user === userName && user.password === userPassword);
  
  if (user){
    return user.user;
  }
    return undefined;
  
} 

export default data;