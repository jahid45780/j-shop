import PicksSlider from "../keen-slider/PicksSlider";


const Picks = () => {
    return (
        <div className=" max-w-6xl mx-auto">
              <div>
                <h1 className=" text-3xl font-bold text-center " > Our Picks </h1>
            </div>
            <div className=" mt-10" >
            <PicksSlider/>
            </div>
        </div>
    );
};

export default Picks;