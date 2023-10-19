import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="p-8 mx-auto bg-transparent sm:p-8 max-w-7xl">
        <div className="fixed top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-500 brightness-150 w-96 h-96 group-hover:blur-[175px] blur-[200px] duration-500 transition-all"></div>

      <div className="flex justify-between">
        <h1 className="text-xl font-black tracking-wide text-transparent sm:text-2xl font-ibm bg-gradient-to-tr bg-clip-text from-blue-200 to-blue-50">
          TurwindUI
        </h1>
        <div>
          <Link
            href={"/"}
            className="px-4 py-3 text-white border border-blue-800/50 sm:px-8 bg-blue-950/20 rounded-xl"
          >
            Send Feedback
          </Link>
        </div>
        {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-slate-600 md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg> */}
      </div>
    </nav>
  );
};

export default Navigation;
