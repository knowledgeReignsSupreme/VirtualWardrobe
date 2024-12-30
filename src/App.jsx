import "./App.css";
import { Outlet } from "react-router-dom";


function App() {
 


  return (
<div className="min-h-screen bg-gradient-to-br from-white to-gray-300">
      <Outlet />
    </div>  );
}

export default App;
