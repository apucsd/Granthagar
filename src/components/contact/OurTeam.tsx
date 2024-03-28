import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const OurTeam = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          {/* Meet the Team */}
          <div className="container max-w-7xl px-4">
            {/* Section Header */}
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-primary text-4xl font-bold my-8">
                  Meet the Team
                </h1>

                <p className="text-gray-700 text-lg font-light">
                  With over 3 years of combined experience, we've got a
                  well-seasoned team at the helm.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {/* Member #1 */}
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                >
                  <div className="flex flex-col">
                    {/* Avatar */}
                    <a href="#" className="mx-auto">
                      <Image
                        width={300}
                        style={{
                          clipPath:
                            "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                        }}
                        height={300}
                        className=" drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 object-contain"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                        alt="team"
                      />
                    </a>
                    {/* Details */}
                    <div className="text-center mt-6">
                      {/* Name */}
                      <h1 className="text-primary text-xl font-bold mb-1">
                        Abdur Rahman
                      </h1>
                      {/* Title */}
                      <div className="text-gray-700 font-light mb-2">
                        Founder &amp; Specialist
                      </div>
                      {/* Social Icons */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
          transition-opacity duration-300"
                      >
                        {/* Linkedin */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                        >
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2" />
                        </a>
                        {/* Twitter */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2" />
                        </a>
                        {/* Instagram */}
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
