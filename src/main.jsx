import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './root/App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CardList from './components/cardList.jsx';
import CreateForm, { PostCreateAsync } from './components/forms.jsx';


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element:<CardList/> },
      { path: "/create_post", element:<CreateForm/> , action:PostCreateAsync }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)
