export default function Navbar() {
  const navLinks = ["Home", "dashboard", "Earnings", "Signout"];
  return (
    <nav className="bg-white border-gray-200  dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-wrap max-w-screen-xl items-center justify-between mx-auto p-4">
        <a href=" " className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="logo"
            className="h-8"
          />
          <span className="font-semibold text-2xl self-center dark:text-white whitespace-nowrap">
            {" "}
            Flowbite
          </span>
        </a>
        <button className="inline-flex items-center rounded-lg text-center justify-center p-2 h-10 w-10 text-sm md:hidden text-gray-500  focus:ring-2 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:ring-gray-200 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          {navLinks.map((item, index) => (
            
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </nav>
  );
}
