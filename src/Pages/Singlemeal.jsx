import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ReactPlayer from "react-player/youtube";

const Singlemeal = () => {
  const { mealId } = useParams();
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const finalUrl = url + mealId;
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(finalUrl);
    const data = await res.json();
    if (data.meals) {
      const {
        strMeal: name,
        strCategory: cat,
        strArea: area,
        strInstructions: instructions,
        strMealThumb: image,
        strYoutube: youtube,
        strTags: tags,
      } = data.meals[0];
      const newMeal = {
        name,
        cat,
        area,
        instructions,
        image,
        youtube,
        tags,
      };
      setMeal(newMeal);
    } else {
      setMeal(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchData();
  }, [mealId]);

  if (loading) {
    return <Loading />;
  }
  if (!meal) {
    return <h2 className="text-sucess my-5 text-center">NO meal to display</h2>;
  }

  return (
    <div className="container mt-2">
      <div>
        <img
          className="w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src={meal.image}
          alt={meal.name}
        />
        <div className="mt-3 mb-3">
          <p>
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Name:{" "}
            </span>
            {meal.name}
          </p>
          <p>
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Category:{" "}
            </span>
            {meal.cat}
          </p>
          <p>
            {" "}
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Tags:{" "}
            </span>
            {meal.tags}
          </p>
          <p>
            {" "}
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Area:{" "}
            </span>
            {meal.area}
          </p>
          <p className="lh-lg">
            {" "}
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Instructions{" "}
            </span>
            {meal.instructions}
          </p>
          <p className="lh-lg">
            <span className="bg-success text-white p-2 me-2 rounded-2">
              Video Instruction :
            </span>
          </p>
          <div className="mt-2">
            <ReactPlayer
              url={meal.youtube}
              controls={true}
              playing={true}
              muted={true}
              width={"100%"}
              height={"450px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlemeal;
