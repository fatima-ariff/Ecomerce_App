import React from 'react';
import GridView from './GridView';
import { useFiltercon } from './conext/filter_conext';
import ListView from './ListView';

const ProductList = () => {
  const {Filter_products,grid_view}=useFiltercon();
  if(grid_view===true)
  {
    return <GridView products={Filter_products}/>;
  }

  if(grid_view===false)
  {
    return <ListView products={Filter_products}/>;
  
  }
 
}

export default ProductList;