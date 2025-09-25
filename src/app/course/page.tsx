


export default function CoursePage() {

  return (
    <>
      <div className="pt-32 bg-white h-full justify-center content-center  px-32 w-full">
        <img
          className=" h-96 w-full object-cover rounded-2xl "
          src="https://static.vecteezy.com/system/resources/previews/002/294/862/non_2x/digital-courses-web-banner-design-student-watching-online-courses-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg"
          alt=""
        />

        <div className="h-screen bg-white justify-center content-center ">
          <h1 className="text-2xl text-center font-semibold mt-10 mb-5 text-black">
            Explore Inspiring Courses
          </h1>
          <div className="grid grid-cols-4 gap-5">
            <div className="h-56 bg-white border-2 rounded-2xl border-gray-200"></div>
            <div className="h-56 bg-white border-2 rounded-2xl border-gray-200"></div>
            <div className="h-56 bg-white border-2 rounded-2xl border-gray-200"></div>
            <div className="h-56 bg-white border-2 rounded-2xl border-gray-200"></div>
            <div className="h-56 bg-white border-2 rounded-2xl border-gray-200"></div>
            <div className="h-56 bg-white border-2 rounded-2xl border-gray-200"></div>
            <div className="h-56 bg-white border-2 rounded-2xl border-gray-200"></div>
            <div className="h-56 bg-white border-2 rounded-2xl border-gray-200"></div>
          </div>
        </div>
      </div>
    </>
  );
}