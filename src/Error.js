import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>

      <div className='container'>
        <div>
          <h2>404 </h2>
          <h2> ugh!! you're lost</h2>
          <p>
            Press Button to go back to Home!! 🔽 
          </p>
     
    <NavLink to="/">
    <Button>Go Back To Home </Button>

    </NavLink>

        </div>



      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
.container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 8rem;
    }
    h3 {
      font-size: 3rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default Error;