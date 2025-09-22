import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "-",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "<",
    ">",
    ",",
    ".",
    ";",
    "/",
    "?",
    ":",
  ];

  let [input, setinput] = useState("");
  let [output, setoutput] = useState("");
  let [totallength, settotallength] = useState("");
  let [encode, setencode] = useState("");

  useEffect(() => {
    if (!input) {
      setoutput("");
      return;
    }

    let word = input.split("");
    let l = word.length;
    settotallength(l);
    let tempOutput = []; // accumulate results here
    let encodenum = [];
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === word[i]) {
          tempOutput.push(`${word[i]} = ${j}`);
          encodenum.push(j); // note: use j for index in input
        }
      }
    }

    setoutput(tempOutput.join(", "));
    setencode(encodenum); // set all at once
  }, [input]);

  let copytext = () => {
    navigator.clipboard
      .writeText(encode)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div>
      {/* heading? */}
      <div className="border m-auto w-[80%] mt-10 text-center">
        <h1 className="text-3xl font-bold">
          Tokenizer Project How LLM work and they store data in vector database
        </h1>
      </div>

      {/* input output screen box */}

      <div className="border mt-10 w-[80%] m-auto flex gap-7">
        {/* box1 */}
        <div className="border w-[50%] rounded-2xl h-[450px]">
          <div className="border flex justify-around  text-2xl font-semibold p-5">
            <h1>Text Input</h1>
            <button
              onClick={() => setinput("")}
              className="border w-[80px] rounded-xl"
            >
              Clear
            </button>
          </div>
          {/* inputbox */}

          <div className="p-6 border">
            <textarea
              value={input}
              onChange={(e) => setinput(e.target.value)}
              className="w-full h-48 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Start typing from the top..."
            />
          </div>
          {/* total character? */}
          <div className="p-6">
            <h1>Total character :{totallength}</h1>
          </div>
        </div>

        {/* box 2 */}
        <div className="w-[50%] border border-red-600 rounded-2xl">
          <div className="border flex justify-around  text-2xl font-semibold p-5">
            <h1>Token Encoding</h1>
            <button onClick={copytext} className="border w-[80px] rounded-xl">
              Copy
            </button>
          </div>

          <div className="w-full h-48 p-3 border">{output}</div>

          <div className="border p-6 ">
            <p>Encoded Sequence</p>
            <h1>{encode}</h1>
          </div>
        </div>
      </div>

      {/* ENcoder  */}
      <div className="border w-[80%] m-auto mt-5 ">
         <h1 className="text-center text-4xl">Encoder</h1>
        <div className="p-4 border flex justify-around">
          <input type="text"  className="border w-[40%] p-4"/>
          <button className="border p-3 rounded-2xl ">convert</button>
        </div>
      </div>
    </div>
  );
};

export default App;
