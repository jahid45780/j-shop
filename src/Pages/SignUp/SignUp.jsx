import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";



const SignUp = () => {

  const {createUser, signInWithGoogle, updateUserProfile} = useAuth()
  const navigate = useNavigate()
  
  const handleSubmit = async event =>{

    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const image = form.image.files[0]
   
    try{
      console.log(name,email, password, image);
    //   // upload image
      const imageData = await imageUpload(image)
    // //  user create
    const result = await createUser(email,password)
    // // save user name and photo url
     await updateUserProfile(name,imageData?.data?.display_url)
    // // server user data in database
    // // const dbResponse = await saveUser(result?.user)
    // // console.log(dbResponse);
    // // result.user.email
    // // access token 
    // //  await getToken(result?.user?.email)
    navigate('/')
   toast.success(' Sign Up Successfully ')
     } 
     
     catch(err){
      toast.error(err?.message)

    
    }
   
    }


      //handle google singIn
      const handleGoogleSingIn = async ()=>{
        try{
        
           const result = await signInWithGoogle()   
        
        // server user data in database
        // const dbResponse = await saveUser(result?.user)
      
        // access token 
        //  await getToken(result?.user?.email)
         navigate('/')
         toast.success(' Sign Up Successfully ')
         } catch(err){
          toast.error(err?.message)
         }
      } 

    return (
        <div>
        <div className="text-center mt-24">
    <div className="flex items-center justify-center">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        className="w-12 h-12 text-blue-500"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>

    <Link to='/' >
    <img className=" w-14 h-14" src="https://i.ibb.co/g33QjZ0/online-shopping.png" alt="" />
    </Link>

    </div>
    <h2 className="text-4xl tracking-tight">Sign in to your account</h2>
    <span className="text-sm">
      or{" "}
      <Link to='/login' className="text-blue-500">
        register a new account
      </Link>
    </span>
  </div>
  <div className="flex justify-center my-2 mx-4 md:mx-0">
   
    <form 
      onSubmit={handleSubmit}
    className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-wrap -mx-3 mb-6">
       
      <div className="w-full md:w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
            type="text"
            name="name"
            required
          />
        </div>
       
       
        <div className="w-full md:w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
            type="text"
            name="email"
            required
          />
        </div>
        <div className="w-full md:w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
            type="password"
            name="password"
            required
          />
        </div>
     
        <div className="w-full md:w-full px-3 mb-6" >
          <label htmlFor='image' className='block mb-2 text-lg'>
          Select the image
          </label>
          <input
            required
            type='file'
            id='image'
            name='image'
            accept='image/*'
          />
        </div>


        <div className="w-full flex items-center justify-between px-3 mb-3">
          <label className="flex items-center w-1/2">
            <input type="checkbox" className="mr-1 bg-white shadow" />
            <span className="text-sm text-gray-700 pt-1">Remember Me</span>
          </label>
          <div className="w-1/2 text-right">
            <a href="#" className="text-blue-500 text-sm tracking-tight">
              Forget your password?
            </a>
          </div>
        </div>
        <div className="w-full md:w-full px-3 mb-6">
          <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
            Sign in
          </button>
        </div>
        <div className="mx-auto -mb-6 pb-1">
          <span className="text-center text-xs text-gray-700">or sign up with</span>
        </div>
        <div className="flex items-center w-full mt-2">
          <div
             onClick={handleGoogleSingIn}
          className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
            <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
               <FaGoogle className=" text-2xl" />
            </button>
          </div>
          <div className="w-full md:w-1/3 px-3 pt-4 mx-2">
            <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
              <svg
                className="h-6 w-6 fill-current text-gray-700"
                viewBox="0 0 512 512"
              >
                <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
            <button className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
              <svg
                className="h-6 w-6 fill-current text-gray-700"
                viewBox="0 0 512 512"
              >
                <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
 
 
  </div>
  
         
          </div>
    );
};

export default SignUp;