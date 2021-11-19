// import logo from './logo.svg';
import React  from 'react';
import './App.css';
import Layout from './Layout/Layout';
import store from './Store/store';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";


function App() {
  return (
     <Provider store={store}>
   <div className="App">
     <Layout/>
   </div>
     </Provider>
  );
}

export default App;
