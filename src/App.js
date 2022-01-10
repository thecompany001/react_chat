import React from 'react';

import { BrowserRouter as Routes, Route } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';


const App = () => (
    <Routes>
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
    </Routes>
);

export default App;