import { DarkThemeToggle } from "flowbite-react";

import './assets/css/index.css';
import { Link } from 'react-router-dom'

function Test() {

    return (
        <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800 ">

            <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
                <DarkThemeToggle>
                    <p>M</p>
                </DarkThemeToggle>

                <h1 style={{ fontSize: "40px", fontWeight: "800" }}>404 - Página Não Encontrada</h1>

                <div className="flex items-center justify-center" style={{ display: "flex" }}>

                    <p>Clique aqui para retornar...</p>
                    <Link to={"/"}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                    </svg></Link>
                </div>
            </div>

        </main>

    );
}
export default Test;