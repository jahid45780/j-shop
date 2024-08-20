import photo from '../../../public/Mission/missoin1.jpg'
import photo1 from '../../../public/Mission/misson2.jpg'
import photo3 from '../../../public/Mission/mission3.jpg'
const Mission  = () => {
    return (
        <div className=' max-w-6xl mx-auto mt-6' >
            
            <div className=' grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5 '  >
                <div>
                    <img className=' w-full h-full rounded-btn' src={photo} alt="" />
                </div>
                <div>
                    <h1 className=' text-5xl font-bold' > Our mission Title </h1>

                    <p>
                    lacus odio quam consectetur vitae placerat libero, convallis. ultrices est. cursus tincidunt facilisis laoreet laoreet non, nec commodo Nunc vitae Ut hendrerit id tortor. lacus, nisi eget sapien elit. vitae viverra nibh Quisque amet, non 
                          <br /> <br />
                    vehicula, elit non, luctus ipsum tincidunt libero, in ex amet, eu Ut leo. placerat. Ut vehicula, dui sit convallis. sit elementum felis, nibh enim. ac ac viverra id adipiscing eu sit ipsum placerat sed Praesent ex vitae vehicula, Lorem ex . 
                    </p>

                  <button className=' btn  mt-3 rounded-e-2xl rounded-s-t-2xl bg-green-400 hover:bg-green-500 hover:text-sky-700' >  Explore now </button>

                </div>
            </div>



            {/* 2 */}

            <div className=' grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5 '  >
              
                <div>
                    <h1 className=' text-5xl font-bold' > Our mission Title </h1>

                    <p>
                    lacus odio quam consectetur vitae placerat libero, convallis. ultrices est. cursus tincidunt facilisis laoreet laoreet non, nec commodo Nunc vitae Ut hendrerit id tortor. lacus, nisi eget sapien elit. vitae viverra nibh Quisque amet, non 
                          <br /> <br />
                    vehicula, elit non, luctus ipsum tincidunt libero, in ex amet, eu Ut leo. placerat. Ut vehicula, dui sit convallis. sit elementum felis, nibh enim. ac ac viverra id adipiscing eu sit ipsum placerat sed Praesent ex vitae vehicula, Lorem ex . 
                    </p>

                  <button className=' btn  mt-3 rounded-e-2xl rounded-s-t-2xl bg-green-400 hover:bg-green-500 hover:text-sky-700' >  Explore now </button>

                </div>

                <div>
                    <img className=' w-full h-full rounded-btn' src={photo1} alt="" />
                </div>

            </div>


            {/* 3 */}

            <div className=' grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5 '  >
                <div>
                    <img className=' w-full h-full rounded-btn' src={photo3} alt="" />
                </div>
                <div>
                    <h1 className=' text-5xl font-bold' > Our mission Title </h1>

                    <p>
                    lacus odio quam consectetur vitae placerat libero, convallis. ultrices est. cursus tincidunt facilisis laoreet laoreet non, nec commodo Nunc vitae Ut hendrerit id tortor. lacus, nisi eget sapien elit. vitae viverra nibh Quisque amet, non 
                          <br /> <br />
                    vehicula, elit non, luctus ipsum tincidunt libero, in ex amet, eu Ut leo. placerat. Ut vehicula, dui sit convallis. sit elementum felis, nibh enim. ac ac viverra id adipiscing eu sit ipsum placerat sed Praesent ex vitae vehicula, Lorem ex . 
                    </p>

                  <button className=' btn  mt-3 rounded-e-2xl rounded-s-t-2xl bg-green-400 hover:bg-green-500 hover:text-sky-700' >  Explore now </button>

                </div>
            </div>
            

        </div>
    );
};

export default Mission ;