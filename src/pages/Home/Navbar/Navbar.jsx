import { FaGraduationCap, FaHeadphonesAlt, FaReceipt, FaWallet } from "react-icons/fa";
import girlImg from "../../../assets/image/girl.png"

const Navbar = () => {
    return (
        <div className="bg-green-100 p-6 sm:ps-0 lg:ps-14">
            <div className="lg:flex lg:pt-24">
              <div className="lg:w-2/5 flex justify-end" > 
                <img className="ps-4" src={girlImg} alt="" />
              </div>
              <div className="lg:w-3/5 p-10"> 
                <h1 className="text-3xl font-semibold py-3">We Provide Best Online <br /> Solutions</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has .</p>
      

                <div className="lg:flex gap-10 mt-10">
                    <div className="flex gap-3">
                        <FaGraduationCap className="mt-1 w-24 h-20 bg-green-500 text-white rounded-lg p-7"></FaGraduationCap>
                        <div>
                            <h2 className="text-2xl font-semibold">Best Teachers</h2>
                            <p className="text-xs">Lorem ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <FaReceipt className="mt-1 w-24 h-20 bg-green-500 text-white rounded-lg p-7"></FaReceipt>
                        <div>
                            <h2 className="text-2xl font-semibold">Certifications</h2>
                            <p className="text-xs">Lorem ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex gap-10 mt-10">
                    <div className="flex gap-3">
                        <FaWallet className="mt-1 w-24 h-20 bg-green-500 text-white rounded-lg p-7"></FaWallet>
                        <div>
                            <h2 className="text-2xl font-semibold">Affordable Prices</h2>
                            <p className="text-xs">Lorem ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <FaHeadphonesAlt className="mt-1 w-24 h-20 bg-green-500 text-white rounded-lg p-7"></FaHeadphonesAlt>
                        <div>
                            <h2 className="text-2xl font-semibold">24/7 Support</h2>
                            <p className="text-xs">Lorem ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                </div>
    
              </div>
            </div>
        </div>
    );
};

export default Navbar;