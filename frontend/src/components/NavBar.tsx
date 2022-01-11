import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex; // enable box model properties
`;

export default function NavBar() {
  return (
    <>
      <StyledNavBar>
        <h1>this thing</h1>
      </StyledNavBar>
    </>
  );
}
