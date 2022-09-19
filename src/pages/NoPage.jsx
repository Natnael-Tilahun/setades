import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="h-[calc(100vh-310px)] flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-4xl animate-pulse dark:text-white">404</h1>
      <p className="text-center text-gray-500 dark:text-white">
        Lets back to{" "}
        <Link to="/" className="text-gray-700 underline dark:text-white dark:hover:text-gray-500">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NoPage;
