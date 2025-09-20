import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  
   
let arr =[
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  '0','1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*','(',')','_','+','-','=',
  '{','}','[',']','|','<','>',',','.',';', '/', '?', ':'
]

let [input,setinput] = useState('')
let [output,setoutput] = useState('')

useEffect(() => {
  if (!input) {
    setoutput('');
    return;
  }

  let spl = input.split('');
  let tempOutput = []; // accumulate results here

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < spl.length; j++) {
      if (arr[i] === spl[j]) {
        tempOutput.push(`${i} = ${spl[j]}`); // note: use j for index in input
      }
    }
  }

  setoutput(tempOutput.join(', ')); // set all at once
}, [input]);
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
        <div className="border w-[50%] rounded-2xl h-[550px]">
          <div className="border flex justify-around  text-2xl font-semibold p-5">
            <h1>Text Input</h1>
            <button onClick={() => setinput('')} className="border w-[80px] rounded-xl">Clear</button>
          </div>
          {/* inputbox */}

          <div className="p-6 border">
            <textarea
              onChange={(e)=>setinput(e.target.value)}
              className="w-full h-48 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Start typing from the top..."
            />
          </div>
          {/* total character? */}
          <div className="p-6">
             <h1>Total character</h1>
          </div>
        </div>

        {/* box 2 */}
        <div className="w-[50%] border border-red-600 rounded-2xl">
          <div className="border flex justify-around  text-2xl font-semibold p-5">
            <h1>Token Encoding</h1>
            <button className="border w-[80px] rounded-xl">Copy</button>
          </div>

           <div className="w-full h-48 p-3 border">
           {output}
           </div>

            <div className="border p-6">
               <h1>Encoded Sequence</h1>
               <h1>

               </h1>
               <button> Copy Encoded IDs</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default App;
