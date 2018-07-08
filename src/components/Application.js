import React from 'react';
import {auth} from '../firebase';

const handleClick = () => auth().signOut();

export const Application = () =>
  <div>
    <button onClick={handleClick}>Logout</button>
  </div>;
