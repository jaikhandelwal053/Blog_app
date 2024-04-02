import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import RootLayout from './components/Layout';

const router = createBrowserRouter([
  {
    path:'/', element: <RootLayout />, children: [
      {path:'/', element:<Home/>},      
      {path:'/blog-details/:id', element:<BlogDetails/>},
      {path:'/add-blog', element:<AddBlog />},
      {path:'/edit-blog/:id', element:<EditBlog/>},
    ]
  }
]);
function App() {
  return (  
    <>
      <RouterProvider router={router} />
    </>  
         
  );
}

export default App;
