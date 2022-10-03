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

export default data;