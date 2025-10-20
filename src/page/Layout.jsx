import { Outlet } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

export default function Layout() {
  return (
      <main className="max-w-[48rem] sm:h-full w-full mx-auto outline-offset-4 outline-2 outline-gray-800  sm:flex sm:flex-row  flex-col mt-8 rounded-lg overflow-hidden bg-gray-100 text-gray-900">
        <Nav />

        <div className="bg-gray-100 sm:p-6 p-4  w-full sm:rounded-b-none rounded-b-md sm:pt-5 pt-16 sm:rounded-r-md  outline sm:pl-18 flex flex-col border-l  border-gray-700 border">
            <Outlet />  
        </div>
        {/* <Home/> */}
      </main>
  );
}
