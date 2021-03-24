export const userReducer=(state=null,action)=>
{
  switch(action.type)
  {
      case "LOGIN_WITH_EMAIL":
          return action.payload;
      case "LOG_OUT":
          return action.payload;
      default:
          return null;
  }
}
