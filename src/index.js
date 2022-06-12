import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Practics/App'
// import Main from './Components/DZfetch/main'
import { Provider } from 'react-redux';
// import MainRouter from './Components/DzRouter/mainRouter'
// import {BrowserRouter} from 'react-router-dom'
// import Context from './Components/Animation/Context'
import store from './Components/redux/store'
// import Practics from './Components/Practics/Practics'






ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));