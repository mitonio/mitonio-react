import React from 'react';
import styled from 'styled-components';

import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import Search from 'material-ui-icons/Search';

const Wrapper = styled(Grid)`
    display: flex;
`;

const SearchInput = () => {
  let timeout = null;
  let inputValue = '';

  const onChange = (event) => {
    inputValue = event.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log(inputValue), 700);
  };

  return (
    <Grid container>
      <Grid item md={4} hidden={{ smDown: true }} />
      <Wrapper item xs={12} md={4}>
        <Search />
        <TextField
          placeholder="Search"
          fullWidth
          onChange={onChange}
        />
      </Wrapper>
      <Grid item md={4} hidden={{ smDown: true }} />
    </Grid>
  );
};

export default SearchInput;
