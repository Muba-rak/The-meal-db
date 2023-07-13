import React from "react";
import { useGlobalcontext } from "../hooks/context";
import { useRef } from "react";

const SearchForm = () => {
  const { setSearchValue } = useGlobalcontext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputContainer = useRef();
  const searchMeal = () => {
    setSearchValue(inputContainer.current.value);
  };
  return (
    <div className="my-2 ">
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="form-label text-success fw-bold fs-4 text-center w-100"
        >
          Search for your favorite Meal
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          ref={inputContainer}
          onChange={searchMeal}
        />
      </form>
    </div>
  );
};

export default SearchForm;
