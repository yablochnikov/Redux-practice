import React from "react";
import { createRoot } from "react-dom/client";
import { legacy_createStore } from "redux";

console.log("Hello redux!");

const root = createRoot(document.getElementById("root"));

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "INC":
      return { ...state, value: state.value + 1 };

    case "DEC":
      return { ...state, value: state.value - 1 };

    case "RND":
      return { ...state, value: state.value * action.payload };

    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

const update = () => {
  document.querySelector("#counter").textContent = store.getState().value;
};

store.subscribe(update);

const inc = () => ({ type: "INC" });

const dec = () => ({ type: "DEC" });

const rnd = value => ({
  type: "RND",
  payload: value
});

document.getElementById("INC").addEventListener("click", () => {
  store.dispatch(inc());
});

document.getElementById("DEC").addEventListener("click", () => {
  store.dispatch(dec());
});

document.getElementById("RND").addEventListener("click", () => {
  const value = Math.floor(Math.random() * (50 + 50) - 50);
  store.dispatch(rnd(value));
});

root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
