import React from "react";
import { useGlobalcontext } from "../hooks/context";
import SearchForm from "../components/SearchForm";
import MealList from "../components/MealList";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <MealList />
    </div>
  );
};

export default Home;
