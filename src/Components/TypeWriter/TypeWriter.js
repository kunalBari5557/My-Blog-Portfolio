// import React from "react";
// import Typewriter from "typewriter-effect";

// function TypeWriter() {
//   return (
//     <Typewriter
//       options={{
//         strings: [
//           "Full-Stack Web-Developer",
//           "MERN Stack Developer",
//         ],
//         autoStart: true,
//         loop: true,
//         deleteSpeed: 50,
//       }}
//     />
//   );
// }

// export default TypeWriter;

import React, { useState, useEffect } from "react";

function TypeWriter() {
  const [text, setText] = useState("");
  const strings = ["Full-Stack Web-Developer", "MERN Stack Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let currentString = strings[index];
    const interval = setInterval(() => {
      setText((prevText) => prevText + currentString[charIndex]);
      charIndex += 1;
      if (charIndex === currentString.length) {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }, 1000); // delay before starting the next string
      }
    }, 100); // typing speed
    return () => clearInterval(interval); // cleanup on component unmount
  }, [index]);

  return <div>{text}</div>;
}

export default TypeWriter;
