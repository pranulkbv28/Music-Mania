import React from "react";
import { Meteors } from "./ui/meteors";
import SignupFormDemo from "./SignupForm";

export default function MeteorsDemo() {
  return (
    <div className="w-full h-full">
      <div className=" w-full relative h-full">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start w-full text-center">
          <div className="w-3/4 mx-auto h-full flex items-end justify-center">
            {/* <h1 className="text-center text-xl">
              Send us your melodies from here.
            </h1> */}
            {/* <div className="h-full flex items-center justify-center">
              
            </div> */}

            <div className="z-50">
              <SignupFormDemo />
            </div>
          </div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
