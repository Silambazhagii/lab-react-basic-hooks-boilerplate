import { useContext, useState, useEffect } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  const [count, setCount] = useState(0);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    alert("Content button clicked");
  }, [showParagraph]);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

  const paragraph = () => {
    return (
      < >  
        He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into the room there was someone hiding there, but there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front of the bedroom door. He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they never did.
      </>
    );
  };

  return (
    <>
      <div style={themeStyle} className="box">
        This is made by Kalvium
        <br />
        {showParagraph && paragraph()}
        <br />
        <button onClick={toggleParagraph}>Content</button>
        <div className="count">{count}</div>
        <button onClick={() => setCount(count + 1)}>Like</button>
      </div>
    </>
  );
}

export default UseContext;
