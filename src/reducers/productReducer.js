export const serviceReducer=(state=null,action)=>
{
  switch(action.type)
  {
      case "LOAD_SERVICE":
          return action.payload;
      default:
          return null;
  }
}
