
import { DarkThemeToggle } from "flowbite-react";
import '../../assets/css/index.css';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <main className="min-h-screen  gap-2 dark:bg-gray-800 ">      
        <DarkThemeToggle />      
            <div className="bg-white text-black dark:bg-gray-800 dark:text-white text-white h-[100vh] flex itens-center  justify-center bg-cover " >
           <Link to={"/login"}>Login</Link>

            <div style={{color:"black"}}>Home</div>

        </div>
            </main>
    );
}
export default Home;