import React from "react";

const NavigationBlock = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-4 overflow-hidden bg-dark-900 rounded-xl">
      <div className="p-4">
        <div className="grid overflow-hidden border h-fit border-blue-700 rounded-3xl md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <div className="relative h-full p-6 overflow-hidden sm:p-8 bg-blue-950/75">
            <span className="block px-4 py-1 mb-2 text-sm text-center text-blue-200 border rounded-full border-blue-900/80 bg-black/20 w-fit">
              new feature
            </span>
            <h3 className="max-w-xl text-3xl font-bold text-blue-100 md:max-w-xs font-ibm">
              Dark Mode and LTR support
            </h3>
            <p className="max-w-lg mt-4 md:max-w-xs text-slate-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quae
              nam magnam impedit adipisci! Quidem quod rem commodi. Molestiae,
              at?
            </p>
          </div>
          <div className="relative h-full p-6 overflow-hidden sm:p-8">
            <span className="block px-4 py-1 mb-2 text-sm text-center text-blue-200 border rounded-full border-blue-900/80 bg-black/20 w-fit">
              new feature
            </span>
            <h3 className="max-w-xl text-3xl font-bold text-blue-100 md:max-w-xs font-ibm">
              components has support jsx
            </h3>
            <p className="max-w-lg mt-4 md:max-w-xs text-slate-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quae
              nam magnam impedit adipisci! Quidem quod rem commodi. Molestiae,
              at?
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <pre>
          <code className="language-html">
            {`
        <div className="grid overflow-hidden border border-blue-700 rounded-3xl md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        <div className="relative h-full p-6 overflow-hidden sm:p-8 bg-blue-950/75">
          <span className="block px-4 py-1 mb-2 text-sm text-center text-blue-200 border rounded-full border-blue-900/80 bg-black/20 w-fit">
            new feature
          </span>
          <h3 className="max-w-xl text-3xl font-bold text-blue-100 md:max-w-xs font-ibm">
            Dark Mode and LTR support
          </h3>
          <p className="max-w-lg mt-4 md:max-w-xs text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit quae nam magnam impedit adipisci! Quidem quod rem
            commodi. Molestiae, at?
          </p>
        </div>
        <div className="relative h-full p-6 overflow-hidden sm:p-8">
          <span className="block px-4 py-1 mb-2 text-sm text-center text-blue-200 border rounded-full border-blue-900/80 bg-black/20 w-fit">
            new feature
          </span>
          <h3 className="max-w-xl text-3xl font-bold text-blue-100 md:max-w-xs font-ibm">
            components has support jsx
          </h3>
          <p className="max-w-lg mt-4 md:max-w-xs text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit quae nam magnam impedit adipisci! Quidem quod rem
            commodi. Molestiae, at?
          </p>
        </div>
      </div>
    `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default NavigationBlock;
