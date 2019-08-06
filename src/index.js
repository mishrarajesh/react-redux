import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoursesPage from './components/CoursesPage';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
<Provider store={store}> <CoursesPage /> </Provider>, 
document.getElementById('root') );

