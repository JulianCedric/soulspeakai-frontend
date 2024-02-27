import React, { useState } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import './App.css';

const Context = ({ context, setContext }) => {
  return (
    <Form.Input 
      placeholder="context" 
      value={context}
      onChange={e => setContext(e.target.value)}
      className='custom-search'
    />
  );
};

export default Context;