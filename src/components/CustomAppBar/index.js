import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import SearchInput from '../SearchInput';

const CustomAppBar = () => (
  <AppBar position="absolute" color="default">
    <Toolbar>
      <SearchInput />
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
