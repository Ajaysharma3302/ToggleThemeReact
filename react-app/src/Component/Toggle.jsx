import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      console.log("Toggling theme, current state:", state);

      return state === 0 ? 1 : 0;
    default:
      return state;
  }
};

function ToggleTheme() {
  const [state, dispatch] = useReducer(reducer, 0);

  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };
  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };

  const toggle = () => {
    // console.log("Button clicked! Dispatching action to toggle theme...");
    dispatch({ type: "TOGGLE_THEME" }); 
  };

  return (
    <div style={state === 0 ? lightTheme : darkTheme}>
      <h1>{state === 0 ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggle}>Toggle Theme</button>{" "}
      {/* Button to toggle theme */}
    </div>
  );
}

export default ToggleTheme;
