import girlImg from "../../../assets/image/girl.jpg"

const Navbar = () => {
    return (
        <div className="bg-green-100 p-6 ps-14">
            <div className="lg:flex lg:pt-24">
              <div className="lg:w-3/5 bg-gray-300 flex justify-end" > 
                <img className="ps-4 w-889 h-690" src={girlImg} alt="" />
              </div>
              <div className="lg:w-2/5 bg-blue-300 p-10"> 
                <h1 className="text-3xl font-semibold py-3">We Provide Best Online <br /> Solutions</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has .</p>
      
                <div className="pt-4">
      
                </div>
              </div>
            </div>
        </div>
    );
};

export default Navbar;