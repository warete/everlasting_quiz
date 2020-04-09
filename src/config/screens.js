import * as React from 'react';
import Main from "../screens/Main";
import Info from "../screens/Info";
import Start from "../screens/Start";

const screens = [
  {
    name: 'Main',
    component: <Main/>,
    options: {
      title: ''
    },
  },
  {
    name: 'Info',
    component: <Info/>,
    options: {
      title: ''
    }
  },
  {
    name: 'Start',
    component: <Start/>,
    options: {
      title: '',
      headerShown: false
    }
  }
];
export default screens;
