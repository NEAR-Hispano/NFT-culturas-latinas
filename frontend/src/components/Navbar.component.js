import React from "react";
import PropTypes from "prop-types";

function LightHeaderB(props) {
  return (
    <header className="text-gray-600 body-font shadow-sm">
      <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={`w-10 h-10 text-white p-2 bg-${props.theme}-500 rounded-full`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">LatinArt</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="/galeria" className="mr-5 hover:text-gray-900">
            Galeria
          </a>
          <a href="/minar" className="mr-5 hover:text-gray-900">
            Minar
          </a>
          <a href="mis_nfts" className="mr-5 hover:text-gray-900">
            Mis Nfts
          </a>
        </nav>

      </div>
    </header>
  );
}

LightHeaderB.defaultProps = {
  theme: "indigo",
};

LightHeaderB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightHeaderB;
