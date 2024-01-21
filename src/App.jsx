// src/App.jsx
import React, { useState } from "react";
// import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import "./App.css";
import { Button } from "@chakra-ui/react";
import DisplayBox from "./components/DisplayBox";
function App() {
  const [term, setTerm] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [currentTerm, setCurrentTerm] = useState("");
  const [currentClass, setClass] = useState("");
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${term}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "39833c7123mshd0dd8cab63bd6e2p1d6a3ajsn7f7882db4514",
            "X-RapidAPI-Host": "urban-dictionary7.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setDefinitions(data.list);
      setCurrentTerm(term);
      setClass("displaySection");
    } catch (error) {
      console.error("Error fetching data:", error);
      setDefinitions([]);
      setCurrentTerm("");
      setClass("");
    }
  };

  return (
    <div>
      {/* <Input placeholder='Test'/> */}
      <div className="inputBox">
        <Input
          placeholder="Enter a word"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          width="auto"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className={currentClass}>
        <ul>
          {definitions.map((definition) => (
            <DisplayBox text={definition.definition} word={currentTerm} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
