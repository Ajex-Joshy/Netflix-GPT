import React from "react";
import { LOGIN_BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar.jsx";
import GptSuggestions from "./GptSuggestions.jsx";

const GptSearch = () => {
  return (
    <div className="bg-black min-h-screen md:h-screen">
      <div></div>
      <div>
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
