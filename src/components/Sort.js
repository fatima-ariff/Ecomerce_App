import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFiltercon } from "./conext/filter_conext";

const Sort = () => {
  const { grid_view, setGridV, setListV, Filter_products,sorting } = useFiltercon();

  return (
    <Wrapper className="sort-section">
      {/* 1st column */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridV}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? " active sort-btn" : " sort-btn"}
          onClick={setListV}
        >
          <BsList className="icon"></BsList>
        </button>
      </div>

      {/* 2nd column  */}
      <div className="product-data">
      <p>{`${Filter_products.length} Product Available`}</p>
      </div>
      {/* 3rd column */}

   
     <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}>
            <option value="lowest">Price(lowest) </option>
            <option value="highest">Price(highest) </option>
            <option value="A-Z">Alphabaticaly(A-Z) </option>
            <option value="Z-A">Alphabaticaly(Z-A) </option>
          </select>
        </form>
      </div>
    </Wrapper>
  ); 
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
