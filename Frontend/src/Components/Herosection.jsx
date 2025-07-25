import React from "react";

const Herosection = () => {
  return (
    <section>
      <div className="p-3">
        <img
          src="/image.png"
          alt="Exam Illustration"
          className="w-screen md:h-[35rem]"
        />
      </div>
      <div className="max-w-xl absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Welcome to the Official Exam Registration Portal
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          An all-in-one platform to register for exams, check results, and stay
          updated with important notices from the institution.
        </p>
      </div>
    </section>
  );
};

export default Herosection;
