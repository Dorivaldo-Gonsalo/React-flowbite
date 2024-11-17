import '../src/assets/css/index.css';
import Login from "./Routers/public/login";
import NotFound from "./404";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Routers/public/home";
import Cadastro from './Routers/public/cadastro';

function App() {
 

  return (
    <main  className="min-h-screen  gap-2 dark:bg-gray-800 ">        
    <div  className="bg-white text-black dark:bg-gray-800 dark:text-white text-white h-[100vh] flex itens-center  justify-center bg-cover " >
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path='/cadastro' element={<Cadastro/> } />
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={ <NotFound/>}/>
      </Routes>
    </BrowserRouter>
</div>

    </main>
  );
}
/*
<main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
   <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
  <h1>Olá, mundo!</h1>
</div>

      <DarkThemeToggle />
    </main>*/

export default App;