import * as React from "react";
import Quiz from "./quiz";
import * as ReactDOM from 'react-dom';
 
test("render the correct content", () => {
   //Render a React xomponent to the DOM
   const root = document.createElement("div");
   ReactDOM.render(<Quiz/>, root);
 
   //Use DOM APIs (querySelector) to make assertsions
   expect(root.querySelector("Typography").textContent).toBe("THIS IS OUR GAME ABOUT WATER KNOWLEDGE");
 
})
