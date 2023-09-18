import img1 from "../../../assets/image/img.jpg"
import men from "../../../assets/image/men.jpg"
import { FaBookOpen, FaRegClock, FaRegStar, FaRegUser, FaVideo } from 'react-icons/fa';
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-center text-5xl font-semibold my-5">Discover our Popular Courses</h2>
                <p className="text-lg text-center font-normal">lorem ipsum is Simply Dummy Text of the printing and typesetting industry.
                    Lorem ipsum has been the industry standard Dummy
                </p>
            </div>
            <div className="grid lg:grid-cols-4 mt-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                      <figure><img src={img1} alt="Shoes" /></figure>
                      <div className="card-body">
                      <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                            <img className="w-14 h-14 rounded-full" src={men} alt="" />
                            <h2 className="mt-3 font-semibold text-xl">Adam John</h2>
                            </div>
                            <div className="flex gap-3">
                            <FaRegStar className="mt-1 text-yellow-500"></FaRegStar>
                            <p className="text-pink-500">(4.7)</p>
                            </div>
                        </div>
                        <h2 className="font-semibold text-xl my-3">The Ultimate SEO Training 2023 + SEO for Wordpress Websites</h2>
                        <div className="text-pink-500 text-lg">
                            <div className="flex gap-16">
                                <div className="flex gap-3">
                                    <FaBookOpen className="mt-1"></FaBookOpen>
                                    <p>10 Lessons</p>
                                </div>
                                <div className="flex gap-3">
                                    <FaRegUser className="mt-1"></FaRegUser>
                                    <p>125 Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-pink-500 text-lg">
                            <div className="flex gap-16">
                                <div className="flex gap-3">
                                    <FaRegClock className="mt-1"></FaRegClock>
                                    <p>1 hr 50 min</p>
                                </div>
                                <div className="flex gap-3">
                                    <FaVideo className="mt-1"></FaVideo>
                                    <p>12 lecturers</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions mt-5">
                        <div className="flex gap-10 text-xl font-semibold">
                                <p>$45.00</p>
                                <p className="line-through text-pink-500">$55.00</p>
                                <button className="btn btn-secondary text-white ml-4">Add To Cart</button>
                        </div>
                        </div>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                      <figure><img src={img1} alt="Shoes" /></figure>
                      <div className="card-body">
                      <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                            <img className="w-14 h-14 rounded-full" src={men} alt="" />
                            <h2 className="mt-3 font-semibold text-xl">Adam John</h2>
                            </div>
                            <div className="flex gap-3">
                            <FaRegStar className="mt-1 text-yellow-500"></FaRegStar>
                            <p className="text-pink-500">(4.7)</p>
                            </div>
                        </div>
                        <h2 className="font-semibold text-xl my-3">The Ultimate SEO Training 2023 + SEO for Wordpress Websites</h2>
                        <div className="text-pink-500 text-lg">
                            <div className="flex gap-16">
                                <div className="flex gap-3">
                                    <FaBookOpen className="mt-1"></FaBookOpen>
                                    <p>10 Lessons</p>
                                </div>
                                <div className="flex gap-3">
                                    <FaRegUser className="mt-1"></FaRegUser>
                                    <p>125 Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-pink-500 text-lg">
                            <div className="flex gap-16">
                                <div className="flex gap-3">
                                    <FaRegClock className="mt-1"></FaRegClock>
                                    <p>1 hr 50 min</p>
                                </div>
                                <div className="flex gap-3">
                                    <FaVideo className="mt-1"></FaVideo>
                                    <p>12 lecturers</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions mt-5">
                        <div className="flex gap-10 text-xl font-semibold">
                                <p>$45.00</p>
                                <p className="line-through text-pink-500">$55.00</p>
                                <button className="btn btn-secondary text-white ml-4">Add To Cart</button>
                        </div>
                        </div>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                      <figure><img src={img1} alt="Shoes" /></figure>
                      <div className="card-body">
                      <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                            <img className="w-14 h-14 rounded-full" src={men} alt="" />
                            <h2 className="mt-3 font-semibold text-xl">Adam John</h2>
                            </div>
                            <div className="flex gap-3">
                            <FaRegStar className="mt-1 text-yellow-500"></FaRegStar>
                            <p className="text-pink-500">(4.7)</p>
                            </div>
                        </div>
                        <h2 className="font-semibold text-xl my-3">The Ultimate SEO Training 2023 + SEO for Wordpress Websites</h2>
                        <div className="text-pink-500 text-lg">
                            <div className="flex gap-16">
                                <div className="flex gap-3">
                                    <FaBookOpen className="mt-1"></FaBookOpen>
                                    <p>10 Lessons</p>
                                </div>
                                <div className="flex gap-3">
                                    <FaRegUser className="mt-1"></FaRegUser>
                                    <p>125 Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-pink-500 text-lg">
                            <div className="flex gap-16">
                                <div className="flex gap-3">
                                    <FaRegClock className="mt-1"></FaRegClock>
                                    <p>1 hr 50 min</p>
                                </div>
                                <div className="flex gap-3">
                                    <FaVideo className="mt-1"></FaVideo>
                                    <p>12 lecturers</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions mt-5">
                        <div className="flex gap-10 text-xl font-semibold">
                                <p>$45.00</p>
                                <p className="line-through text-pink-500">$55.00</p>
                                <button className="btn btn-secondary text-white ml-4">Add To Cart</button>
                        </div>
                        </div>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                      <figure><img src={img1} alt="Shoes" /></figure>
                      <div className="card-body">
                      <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                            <img className="w-14 h-14 rounded-full" src={men} alt="" />
                            <h2 className="mt-3 font-semibold text-xl">Adam John</h2>
                            </div>
                            <div className="flex gap-3">
                            <FaRegStar className="mt-1 text-yellow-500"></FaRegStar>
                            <p className="text-pink-500">(4.7)</p>
                            </div>
                        </div>
                        <h2 className="font-semibold text-xl my-3">The Ultimate SEO Training 2023 + SEO for Wordpress Websites</h2>
                        <div className="text-pink-500 text-lg">
                            <div className="flex gap-16">
                                <div className="flex gap-3">
                                    <FaBookOpen className="mt-1"></FaBookOpen>
                                    <p>10 Lessons</p>
                                </div>
                                <div className="flex gap-3">
                                    <FaRegUser className="mt-1"></FaRegUser>
                                    <p>125 Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-pink-500 text-lg">
                            <div className="flex gap-16">
                                <div className="flex gap-3">
                                    <FaRegClock className="mt-1"></FaRegClock>
                                    <p>1 hr 50 min</p>
                                </div>
                                <div className="flex gap-3">
                                    <FaVideo className="mt-1"></FaVideo>
                                    <p>12 lecturers</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions mt-5">
                        <div className="flex gap-10 text-xl font-semibold">
                                <p>$45.00</p>
                                <p className="line-through text-pink-500">$55.00</p>
                                <button className="btn btn-secondary text-white ml-4">Add To Cart</button>
                        </div>
                        </div>
                      </div>
                </div>
                

            </div>

        </div>
    );
};

export default Home;