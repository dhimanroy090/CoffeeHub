// import {  useState } from "react";
// import Coffee from "../Coffee/Coffee";
// import { useLoaderData } from "react-router-dom";
import coffee from "../../../../assets/images/1.png"
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";


const ShowCoffees = () => {
    // const loadedCoffee = useLoaderData();
    // const [coffees,setCoffees]=useState(loadedCoffee);
    
    // console.log(coffees);
    
    return (
        <div>
            <div className="grid grid-cols-2 w-[80%] mx-auto gap-6">
                {/* {
                    coffees?.map(coffee=><Coffee 
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></Coffee>)
                } */}
                        <div className="">
            <div className="">
                <div className="flex items-center justify-evenly gap-3 rounded-lg bg-[#F5F4F1] box-border ">
                    <img src={coffee}/>
                    <div className="space-y-3">
                        <h2><span className="font-semibold">Name: </span>{"Black"}</h2>
                        <h2><span className="font-semibold">Chef: </span>{"Blcak Smith"}</h2>
                        <h2><span className="font-semibold">Price: </span>{"23.23"} Taka only</h2>
                    </div>
                    <div className="flex flex-col">
                        <Link to={`/view/${1}`}><button className="btn btn-primary "><AiOutlineEye></AiOutlineEye></button></Link>
                        <Link to={`/update/${1}`}>
                            <button className="btn btn-primary my-2"><FiEdit></FiEdit></button>
                        </Link>
                        <button  className="btn btn-primary"><AiFillDelete></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default ShowCoffees;