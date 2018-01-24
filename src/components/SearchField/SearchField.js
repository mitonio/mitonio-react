import React from 'react'
import { TextField } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SearchField = () => (
  <MuiThemeProvider>
    <TextField />
  </MuiThemeProvider>
);

export default SearchField;