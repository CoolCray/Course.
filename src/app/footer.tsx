export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-8 px-32">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Course.</h3>
            <p className="text-sm">
              Tingkatkan skillmu dengan course berkualitas dari mentor
              berpengalaman.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: Course@gmail.com</li>
              <li>Phone: +62 999 999 9999</li>
              <li>Address: Jl. Trengguli, Denpasar</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          &copy; 2024 Course. All rights reserved.l
        </div>
      </footer>
    </>
  );
}