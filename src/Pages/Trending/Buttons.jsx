const Buttons = ({menuItems, filterItems,setProduct}) => {
    console.log(filterItems);
    return (
        <div className=" flex items-center justify-center gap-3 mt-4 p-3 overflow-x-auto " >
            
     {
        menuItems.map((val,index)=>(
             <button key={index} className=" btn"  onClick={ ()=> filterItems (val)} >
                   {val}
             </button>
        ))
     }

<button className=" btn"

     onClick={ ()=> filterItems("all")}
>
                  ALL
             </button>

        </div>
    );
};

export default Buttons;