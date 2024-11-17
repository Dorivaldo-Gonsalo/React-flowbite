
import '../../assets/css/index.css';

function Login() {
    return (
        
        <main id="principal" className=" flex min-h-screen items-center justify-center min-h-screen ">
 

            <div id="sub" className="bg-white text-black  dark:text-white bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative " >
      
    
          
            <h1 className="text-4xl front-board text-center mb-6">Login</h1>
           
            <form action={'/'} method='post'>
                <div className="relative my-4">
                    <input type="text" className="block w-72 py-2.5 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer " required  placeholder=''/>
                    <label htmlFor="" className="absolute text-sm duration-300 transform -traslate scale-75 top-3 -2-10 origin-[0] peer-focus:left-0 perr-focus:text-black-600 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                </div>
                <div className="relative my-4">
                    <input type="password" className="block w-72 py-2.5 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer " required placeholder='' />
                    <label htmlFor="" className="absolute text-sm duration-300 transform -traslate scale-75 top-3 -2-10 origin-[0] peer-focus:left-0 perr-focus:text-black-600 peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                </div>
                <button type="submit" className="w-full mb-4 text-[18px] mt-6 roundedbg-blue-500 py-2 hover:bg-blue-600 transmition-colors duration-300">Login</button>
            </form>






            </div>
        </main>

    );
}
export default Login;