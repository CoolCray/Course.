import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="inset-0 -z-10 h-screen w-full justify-center content-center bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <h1 className="text-4xl text-black font-bold  mx-0 inline">
              Tingkatkan <span className="text-blue-800 ">Skillmu</span>,
              Wujudkan Karier <span className="text-blue-800">Impianmu</span>.
            </h1>
            <p className="text-sm mt-4 max-w-xl text-gray-600">
              Belajar dari mentor berpengalaman, materi terstruktur, dan akses
              seumur hidup untuk mendukung perkembanganmu.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-700 transition-colors duration-200 ">
                <Link className="text-white" href={"profile"}>
                  Start Learning
                </Link>
              </button>
              <button className="px-6 py-3 bg-white text-white rounded hover:bg-gray-200 border-1 border-gray-200 mx-2 delay-200 transition-colors duration-200 ">
                <Link className="text-black" href={"profile"}>
                  Explore Course
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="grid justify-center content-center grid-cols-2 px-32 h-96 w-full bg-gray-50 gap-8">
        {/* Deskirpsi */}
        <div className="justify-center content-center ">
          <h2 className="text-4xl text-black font-bold ">Tentang Course.</h2>
          <p className="text-sm mt-4 max-w-xl text-gray-600 text-justify">
            Di era digital, skill adalah investasi terbesar. Course kami dibuat
            dengan metode pembelajaran berbasis praktik nyata, bukan hanya
            teori. Setiap materi dirancang step-by-step agar mudah dipahami,
            bahkan untuk pemula sekalipun. Dengan update materi terbaru, kamu
            bisa belajar sesuai kebutuhan industri saat ini.
          </p>
        </div>

        {/*Gambar  */}
        <div className=" ">
          <img
            src="https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp"
            alt=""
          />
        </div>
      </div>

      {/* here */}
      <div className=" justify-center content-center px-32 h-screen w-full bg-white gap-8">
        {/* Deskirpsi */}
        <div className="justify-center content-center ">
          <h2 className="text-4xl text-center text-black font-bold ">
            Daftar Course
          </h2>
          <p className="text-sm mt-4 max-w-xl text-center text-gray-600 mx-auto">
            Pilih course yang sesuai dengan minat dan tujuan kariermu. Setiap
            course dirancang untuk memberikan pengetahuan mendalam dan
            keterampilan praktis yang dapat langsung diterapkan di dunia kerja.
          </p>
        </div>

        {/*konten*/}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  ">
            <a href="#">
              <img
                className="rounded-t-lg justify-center content-center"
                src="https://intersmart.ae/wp-content/uploads/2024/04/The-Essential-Web-Development-Tools-Every-Developer-Should-Know.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Full-Stack Web Development
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pelajari cara membangun aplikasi web lengkap dari front-end
                hingga back-end dengan teknologi terbaru.
              </p>

              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enroll Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  ">
            <a href="#">
              <img
                className="rounded-t-lg justify-center content-center"
                src="https://cdn.prod.website-files.com/6130fa1501794e37c21867cf/648cd2cb201dc74dfaf2eecb_nojk3KTdSPYbVe_JSE7kstFwzCf-SccnJBeRSBEBBpLwBR69z1SZ7M4j2FmZK69VZc7y3upedHOfljyfiMDBZO3-4waEku917o-5m4tO1q92ucEcWaB1QtaYT0wh51KqbJ0lD9ttOFEVgsIjx7zTxJQ.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Data Science for Beginners
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Mulai perjalananmu di dunia data science dengan pemahaman dasar
                dan alat-alat penting yang digunakan para profesional.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enroll Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  ">
            <a href="#">
              <img
                className="rounded-t-lg justify-center content-center"
                src="https://img.freepik.com/vektor-premium/konsep-ilustrasi-designer-ui-dengan-latar-belakang-putih_701961-1259.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  UI/UX Designer Mastery
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Kuasai seni desain antarmuka dan pengalaman pengguna untuk
                menciptakan produk.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enroll Now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 h-screen px-32 w-full text-center content-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <h1 className="text-black text-4xl font-semibold">
          What our <span className="text-blue-500">customers say</span>
        </h1>
        <p className="text-sm mt-4 max-w-xl text-center text-gray-600 mx-auto">
          Dapatkan wawasan dari pengalaman nyata para pelajar kami yang telah
          meraih kesuksesan melalui course kami.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-16">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm text-left">
            <div className="flex items-center m-6 mt-4">
              <img
                className="rounded-full h-12 w-12 object-cover"
                src="https://c.pxhere.com/photos/21/59/photo-20075.jpg!d"
                alt=""
              />
              <h3 className="text-xl font-bold text-black m-4">Ade</h3>
            </div>
            <p className="text-sm m-6 text-gray-600">
              "Course ini benar-benar mengubah cara saya melihat pengembangan
              web. Materinya mudah diikuti dan aplikatif."
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm text-left">
            <div className="flex items-center m-6 mt-4">
              <img
                className="rounded-full h-12 w-12 object-cover"
                src="https://images.theconversation.com/files/226871/original/file-20180710-70060-14c3cbu.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
                alt=""
              />
              <h3 className="text-xl font-bold text-black m-4">Mang Agus</h3>
            </div>
            <p className="text-sm m-6 text-gray-600">
              "Sebagai pemula, saya merasa sangat terbantu dengan pendekatan
              praktis yang diajarkan di course ini. Sangat direkomendasikan!"
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm text-left">
            <div className="flex items-center m-6 mt-4">
              <img
                className="rounded-full h-12 w-12 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiwFQCmAYM6PrqehMr7qDwkQXm8cgvVmJqgydn7uDBole9X7NzZXyjdr8rvzSi7awlto&usqp=CAU"
                alt=""
              />
              <h3 className="text-xl font-bold text-black m-4">Ancebu</h3>
            </div>
            <p className="text-sm m-6 text-gray-600">
              "kursus ini sangat membantu saya dalam memahami konsep data
              science. Instrukturnya jelas dan materinya up-to-date."
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm text-left">
            <div className="flex items-center m-6 mt-4">
              <img
                className="rounded-full h-12 w-12 object-cover"
                src="https://img-cdn.medkomtek.com/IV1W_mcOx9M79-v2zMveBid70xE=/510x395/smart/filters:quality(100):format(webp)/article/SYWcOyU3eEzXzo_253fYl/original/1661919765-Mengapa%20Orang%20Mudah%20Marah.jpg"
                alt=""
              />
              <h3 className="text-xl font-bold text-black m-4">Jhopin</h3>
            </div>
            <p className="text-sm m-6 text-gray-600">
              "Sebagai seorang desainer, course ini memberikan saya wawasan baru
              tentang UI/UX yang sangat berguna dalam pekerjaan saya sehari
              hari."
            </p>
          </div>
        </div>
      </div>

      {/* Harga & Paket */}
      <div className="justify-center content-center px-32 py-16 w-full bg-white  gap-8">
        {/* Deskirpsi */}
        <div className="justify-center content-center text-center">
          <h2 className="text-4xl text-black font-semibold ">
            Pilih Paket yang Tepat untukmu
          </h2>
          <p className="text-sm mt-4 max-w-xl text-gray-600 mx-auto">
            Kami menawarkan berbagai paket yang dirancang untuk memenuhi
            kebutuhan belajar dan anggaranmu. Pilih paket yang paling sesuai dan
            mulai perjalanan belajarmu hari ini.
          </p>
        </div>

        {/*konten*/}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  ">
            <div className="p-5 text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <span className="text-blue-800">Basic</span> Plan
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Akses ke semua course dasar dan materi pembelajaran.
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-black">
                Rp. 199.99
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Choose Plan
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  ">
            <div className="p-5 text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <span className="text-blue-800">Pro</span> Plan
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Akses ke semua course, materi lanjutan, dan sertifikat.
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-black">
                Rp. 800.000
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Choose Plan
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  ">
            <div className="p-5 text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <span className="text-blue-800">Premium</span> Plan
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Akses penuh ke semua course, materi eksklusif, sertifikat, dan
                bimbingan mentor.
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-black">
                Rp. 1.500.000
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Choose Plan
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="justify-center content-center px-32 py-16 w-full bg-gray-50  gap-8">
        {/* Deskirpsi */}
        <div className="justify-center content-center text-center">
          <h2 className="text-4xl text-black font-semibold ">
            Frequently Asked Questions
          </h2>
          <p className="text-sm mt-4 max-w-xl text-gray-600 mx-auto">
            Temukan jawaban atas pertanyaan umum tentang course kami, metode
            pembelajaran, dan dukungan yang kami tawarkan.
          </p>
        </div>

        {/*konten*/}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
              Apa saja metode pembelajaran yang digunakan dalam course ini?
            </h5>
            <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
              Kami menggabungkan video tutorial, kuis interaktif, proyek
              praktis, dan sesi tanya jawab dengan mentor untuk memastikan
              pengalaman belajar yang komprehensif dan efektif.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
              Apakah saya akan mendapatkan sertifikat setelah menyelesaikan
              course?
            </h5>
            <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
              Ya, setelah menyelesaikan course tertentu, kamu akan menerima
              sertifikat yang dapat digunakan untuk memperkuat profil profesional
              atau portofolio kerjamu.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
              Apakah ada dukungan atau bimbingan dari mentor selama saya
              belajar?
            </h5>
            <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
              Tentu! Kami menyediakan akses ke mentor berpengalaman yang siap
              membantu menjawab pertanyaanmu, memberikan feedback, dan
              membimbingmu sepanjang perjalanan belajarmu.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
              Apakah saya bisa mengakses materi course kapan saja?
            </h5>
            <p className="mb- text-sm font-normal text-gray-700 dark:text-gray-400">
              Ya, semua materi course dapat diakses kapan saja dan di mana saja
              selama kamu memiliki koneksi internet. Ini memungkinkanmu belajar
              sesuai dengan ritme dan jadwal pribadimu.
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
}
