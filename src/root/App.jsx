import Header from '../components/header';
import Sidebar from '../components/sidebar';
import { useState } from 'react';
import PostListProvider from '../store/list-card-store';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Outlet } from 'react-router-dom';


export function App() {

  const [selectTab, setSelectTab] = useState('Home');
  
  return (
    <PostListProvider>
      <div className="container">
        <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}></Sidebar>
        <div className="container-items">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </div>
    </PostListProvider>
  );
}


export default App;