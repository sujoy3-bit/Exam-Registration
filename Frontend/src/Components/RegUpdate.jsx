import React from 'react';
import { MdNavigateNext } from "react-icons/md";

const RegUpdate = () => {
  const items=[
        {
            year:"1st year",
            desc:"Don't miss your chance to signup for your upcoming exams.Secure your spot now before the deadline!",
        },
        {
            year:"2nd year",
            desc:"Make your to complete your registration to avoid missing out.",

        },
        {
            year:"3rd year",
            desc:"Late registration NOT be accepted.Act now! "
        }
    ]
    return(
        <section className="bg-white px-6 py-12 md:px-20 text-center">
          <div className=" flex  flex-col items-center ">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600">Registration Updates Here</h1>
          <p className="  text-lg max-w-2xl mx-auto mb-10">
            Stay informed about your registration procedures and deadlines!!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {items.map((item,index)=>(
                <div key={index}
                className="bg-gray-100 overflow-hidden p-5  rounded-lg shadow-md">
                 
                    <button className="hover:underline cursor-pointer border-2 rounded-lg p-1 ">{item.year}</button>
                     <h3 className="text-lg font-semibold mb-2 text-blue-800">Event Title Heading</h3>
                      <h3 className="text-md font-semibold mb-2 ">{item.desc}</h3>
                    <button className="hover:underline cursor-pointer text-indigo-600">View Details<MdNavigateNext className="inline-block" /></button>

                </div>
            ))}
        </div>
{/* <button className="border p-1 cursor-pointer hover:bg-gray-300 hover:border-transparent rounded-lg">View All</button> */}
        </section>
    )
}

export default RegUpdate


