import "./App.css";
import Marksheet from "./components/Marksheet";

function App() {
  return (
    <div className="App">
      <Marksheet
        student="Person 1"
        teluguMarks="35"
        englishMarks="20"
        hindiMarks="50"
        mathsMarks="100"
        scienceMarks="10"
        socialMarks="70"
      ></Marksheet>
      <Marksheet
        student="Person 2"
        teluguMarks="10"
        englishMarks="29"
        hindiMarks="34"
        mathsMarks="30"
        scienceMarks="20"
        socialMarks="15"
      ></Marksheet>
      <Marksheet
        student="Person 3"
        teluguMarks="98"
        englishMarks="35"
        hindiMarks="55"
        mathsMarks="66"
        scienceMarks="89"
        socialMarks="35"
      ></Marksheet>
      <Marksheet
        student="Person 4"
        teluguMarks="99"
        englishMarks="100"
        hindiMarks="100"
        mathsMarks="100"
        scienceMarks="10"
        socialMarks="100"
      ></Marksheet>
      <Marksheet
        student="Person 5"
        teluguMarks="70"
        englishMarks="80"
        hindiMarks="68"
        mathsMarks="50"
        scienceMarks="35"
        socialMarks="100"
      ></Marksheet>
    </div>
  );
}

export default App;
