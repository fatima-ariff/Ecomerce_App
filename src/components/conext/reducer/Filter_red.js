

const Filterred = (state, action) => {
  switch (action.type) {
    case "L_FPROD":
      return {
        ...state,
        Filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORTV":
      // let userSV = document.getElementById("sort");
      // let sort_v = userSV.options[userSV.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCT":
      const { Filter_products, sorting_value } = state;

      let newSrt;
      let copyproducts = [...Filter_products];

      const sortingpro = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "A-Z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "Z-A") {
          return b.name.localeCompare(a.name);
        }
      };
      newSrt = copyproducts.sort(sortingpro);
      return {
        ...state,
        Filter_products:newSrt,

    };

    case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;
        return{
            filters:
           { ...state.filters,
            [name]:value,
        },
      }
        
        case "FILTER_PRODUCTS":
          let { all_products } = state;
          let tempFilterProduct = [...all_products];
    
          const { text, category, company, color } = state.filters;
    
          if (text) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
              return curElem.name.toLowerCase().includes(text);
            });
          }
    
          if (category !== "all") {
            tempFilterProduct = tempFilterProduct.filter(
              (curElem) => curElem.category === category
            );
          }
    
          if (company !== "all") {
            tempFilterProduct = tempFilterProduct.filter(
              (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
            );
          }
    
          if (color !== "all") {
            tempFilterProduct = tempFilterProduct.filter((curElem) =>
              curElem.colors.includes(color)
            );
          }
          return {
            ...state,
            filter_products: tempFilterProduct,
          };
    
        
       
      

    default:
      return state;
  }
};

export default Filterred;



