

const Section = () => {
  return (
    <div className="bg-gray-50 p-8 space-y-20">




      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-gray-300  w-full h-auto rounded-lg flex items-center justify-center overflow-hidden">
            <img className="h-64 w-full rounded-lg" src="biryani.jpg" alt="" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            Experience Effortless Exam Registration with Our User-Friendly
            Platform
          </h2>
          <p className="text-gray-600">
            Our website simplifies the registration process, allowing students
            to easily sign up for their semester papers. With accurate
            information at their fingertips, students save valuable time and
            avoid confusion.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-4">
            Empowering Students Through Seamless Exam Registration
          </h2>
          <p className="text-gray-600">
            Our college department is dedicated to enhancing the academic
            experience by simplifying the exam registration process. We strive
            to provide students with a user-friendly platform that ensures they
            can easily manage their semester papers.
          </p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="bg-gray-300  w-full h-auto rounded-lg flex items-center justify-center overflow-hidden">
            <img className="h-64 w-full rounded-lg" src="biryani.jpg" alt="" />
          </div>
        </div>
      </div>






      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-bold mb-4">
          Start Your Registration Today!
        </h3>
        <p className="text-gray-600 mb-6">
          Join us to pre-register for your semester papers.
        </p>
        <div className="space-x-4">
          <button className=" text-black px-6 py-2 rounded hover:bg-gray-800 hover:text-white cursor-pointer">
            Sign Up
          </button>
          <button className="border border-transparent hover:border-gray-600 px-6 py-2 rounded hover:bg-gray-100 cursor-pointer">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
