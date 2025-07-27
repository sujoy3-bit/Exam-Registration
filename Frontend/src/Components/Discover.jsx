import { MdNavigateNext } from "react-icons/md";

const Discover = () => {
  const features = [
    {
      title: "Easy Pre-Registration for All Students",
      description: "Register for your semester papers with ease.",
    },
    {
      title: "Exclusive Student Dashboard for Tracking Progress",
      description:
        "Access your personalized dashboard to manage registrations.",
    },
    {
      title: "Year-based Paper Selection Tailored to You",
      description: "Choose papers based on your academic year.",
    },
  ];

  return (
    <div className="bg-white px-6 py-12 md:px-40 text-center">
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-700">
          Discover Our Key Features for Students
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 font-semibold">
          Our platform simplifies the exam registration process, making it
          hassle-free for students. With just a few clicks, you can secure your
          spot for upcoming semester papers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 overflow-hidden pb-5  rounded-lg shadow-md"
          >
            <div className=" flex items-center justify-center  mb-4 ">
              <img
                className="rounded-lg transform transition duration-300 hover:scale-105 object-fill"
                src="biryani.jpg"
                alt=""
              />
            </div>
            <h3 className="text-lg  text-blue-700 font-semibold mb-2">
              {feature.title}
            </h3>
            <h3 className="text-md font-semibold mb-2">
              {feature.description}
            </h3>
          </div>
        ))}
      </div>

      <button className="hover:underline m-5 hover:text-blue-800 cursor-pointer">
        Sign Up <MdNavigateNext className="inline-block" />
      </button>
    </div>
  );
};

export default Discover;
