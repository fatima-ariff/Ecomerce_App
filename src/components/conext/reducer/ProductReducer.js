
const ProductReducer = (state, action) => {

 
  switch (action.type) {

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
   
    case "MY_API_DATA":
      const featuredata = action.payload.filter((curele) => {
        return curele.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        featureProducts: featuredata,
      };
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
   

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        issingleLoading: true,
      };
   
  
      case "MY_SINGLE_DATA":
        return {
          ...state,
          issingleLoading: false,
          singleproduct:action.payload,
        };
  
        case "SIN_ERROR":
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
     
  

default:
  return state;
      }
};
export default ProductReducer;

 //     if(action.type=== "SET_LOADING"){

  //   return {
  //     ...state,
  //     isLoading:true,
  //   };
  // }
  // if(action.type=== "API_ERROR"){

  //     return {
  //       ...state,
  //       isLoading:false,
  //       isError:true,
  //     };
  // }
