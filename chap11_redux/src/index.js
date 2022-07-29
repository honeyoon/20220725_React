import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

import {legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux'
// 크롬의 react-dev-tools 플러그인과 연동되는 라이브러리
import { composeWithDevTools } from 'redux-devtools-extension'

// import counterR from './modules/counterR'
import rootReducer from './modules'

// 단일 스토어가 기본이다.
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
