import React from 'react';

import TextField from 'material-ui/TextField';

import Search from 'material-ui-icons/Search';

const SearchInput = () => (
  <div>
    <Search />
    <TextField
      label="Search"
      placeholder="8700"
    />
  </div>
);

export default SearchInput;
