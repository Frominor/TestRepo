import React from "react";
import { useDispatch } from "react-redux";
import { FindFullInfoRecepies } from "../asyncActions/FindFullInfoRecepies";
export default function FindBySettings({ State }) {
  const dispatch = useDispatch();
  const FilterRecepies=(arr)=>{
    dispatch({ type: "FILTER_RECEPIES", payload: arr });
  }
  const SelectFoodCategory = (e) => {
    const value=e.target.value
    dispatch({ type: "ADD_CATEGORY", payload: value });
  };
  const SelectKitchen = (e) => {
    const value=e.target.value
    dispatch({ type: "ADD_CUISINE", payload: value});
  };
  const SelectDiet = (e) => {
    const value=e.target.value
    dispatch({ type: "ADD_DIET", payload: value});
  };
  const FindFullInfoRecepiess = () => {
    let arr = [];
    if (State.BoolState.isAdded == false) {
      dispatch(FindFullInfoRecepies(State.Recepies));
    } else {
      for (let k of State.Recepies.BookOfRecepies) {
        debugger;
        if (k.cuisines[0] == State.Recepies.cuisine[0]) {
          if (k.Category == State.Recepies.Category) {
            if (k.dishTypes[0] == State.Recepies.dishTypes[0]) {
              arr.push(k);
            }
          }
        }
      }
      FilterRecepies(arr)
    }
  };
  return (
    <div className="FilterRecepies">
      <div className="select">
        <select className="SelectFoodCategory" onChange={SelectFoodCategory}>
          <option value={" "} selected={true}>
            Любая категория
          </option>
          <option value={"dessert"}>Desserts</option>
          <option value={"dinner"}>Dinners</option>
          <option value={"breakfast"}>Breakfast</option>
          <option value={"snack"}>Snack</option>
          <option value={"main course"}>Main course</option>
        </select>
      </div>
      <div className="select">
        <select className="SelectKitchen" onChange={SelectKitchen}>
          <option value={"Любая кухня"} selected={true}>
            Любая кухня
          </option>
          <option value={"Italian"}>Italian kitchen</option>
          <option value={"Russian"}>Russian kitchen</option>
          <option value={"French"}>French kitchen</option>
          <option value={"German"}>German kitchen</option>
          <option value={"American"}>American kitchen</option>
          <option value={"English"}>English kitchen</option>
        </select>
      </div>
      <div className="select">
        <select className="SelectDiet" onChange={SelectDiet}>
          <option value={" "} selected={true}>
            Any Diet
          </option>
          <option value={"Vegan"}>Vegan</option>
          <option value={"Vegetarian"}>Vegetarian</option>
          <option value={"Gluten Free"}>Gluten Free</option>
          <option value={"Paleo"}>Paleo</option>
        </select>
      </div>
      <button className="FindRecepies" onClick={FindFullInfoRecepiess}>
        Подобрать рецепты
      </button>
    </div>
  );
}
