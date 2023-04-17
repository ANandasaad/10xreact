
import './App.css';
import Form from './component/Form';
import RenderingList from './component/RenderingList';
import SplitRender from './component/SplitRender';
import Recipe from './component/Recipe';
import ValidateForm from './component/ValidateForm';
import TodoList from './component/TodoList';
import NewTodoList from './component/NewTodoList';
import RestApi from './component/RESTAPI/RestApi';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './component/Body';
import { Children } from 'react';
import PostAPI from './component/RESTAPI/PostAPI';
import EmpDetails from './component/RESTAPI/EmpDetails';
import EmpCreate from './component/RESTAPI/EmpCreate';
import EmpEdit from './component/RESTAPI/EmpEdit';
const router=createBrowserRouter([{
      path:'/',
      element:<Body/>,
},
{
  path:'/create',
  element:<EmpCreate/>
}
,{
  path:'/details/:emp',
  element:<EmpDetails/>
}
,{
  path:'/edit/:emp',
  element:<EmpEdit/>
}
]
)
function App() {
  
  return (
    <div className="App">
    <RouterProvider router={router}/>
   
    </div>
  );
}

export default App;
