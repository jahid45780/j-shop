import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
const Navbar = () => {

    const NavLink=<>
  

  <div className=" group flex flex-col" >
     
     <Link to='/' > <li className=" text-2xl mx-2 mt-2 text-center text-black" > Home | </li> </Link>
         <span className="h-[3px] w-0 mt-2 rounded-full bg-black  transition-all duration-300 group-hover:w-full text-center" ></span>
         </div>


         <div className=" group  flex cursor-pointer flex-col" >
     
     <Link to='/trending' > <li className=" text-2xl mx-2 mt-2 text-black text-center" > Trending | </li> </Link>
         <span className="h-[3px] w-0 mt-2 rounded-full bg-black   transition-all duration-300 group-hover:w-full" ></span>
         </div>


         <div className=" group  flex cursor-pointer flex-col" >
     
     <Link to='/Mission' > <li className=" text-2xl mx-2 mt-2 text-center text-black" > Our Mission  </li> </Link>
         <span className="h-[3px] w-0 mt-2 rounded-full bg-black   transition-all duration-300 group-hover:w-full" ></span>
         </div>


        
  
  
  </>

    return (
        <div>
        <div className="navbar bg-white rounded-2xl  z-10 bg-opacity-70">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-t-[50px] rounded-br-3xl shadow-2xl shadow-emerald-700 w-72 p-3 mt-9 ml-5">
        
           
              {NavLink}
              
            </ul>
          </div>
           <Link to='/' >
           <img className="w-16 h-16" src="https://i.ibb.co/g33QjZ0/online-shopping.png" alt="logo" />
           </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          
      {NavLink}
      
          </ul>
        </div>
        <div className="navbar-end">
         {/*shpoing card  */}
      <div>
    
      
     <div className=" flex gap-2 items-center mr-4 text-3xl" >
     <IoMdNotificationsOutline/>

      <GiSelfLove/>

     </div>
      
     </div>
      
      
    <div className=" text-3xl" >
        <Link to='/login' >
           <FaRegCircleUser/>
        </Link>
    </div>
              
          
        </div>
      </div>          
      
      
      
        <div className=" md:block hidden text-center mt-4" >
            
            <input className=" w-96 h-11 rounded-3xl border-2 border-black" placeholder=" 🔎 search..." type="search" />
            
            </div> 
      
      
              </div>
    );
};

export default Navbar;