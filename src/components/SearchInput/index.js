import React from 'react';
import styled from 'styled-components';

import TextField from 'material-ui/TextField';

import Search from 'material-ui-icons/Search';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`;

const SearchInput = () => {
  const onChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Wrapper>
      <Search />
      <TextField
        placeholder="Search"
        fullWidth
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default SearchInput;
