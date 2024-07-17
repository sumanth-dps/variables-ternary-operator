import React from "react";

function Marksheet(props) {
  let teluguMarks = Number(props.teluguMarks);
  let englishMarks = Number(props.englishMarks);
  let hindiMarks = Number(props.hindiMarks);
  let mathsMarks = Number(props.mathsMarks);
  let scienceMarks = Number(props.scienceMarks);
  const socialMarks = Number(100);
  let totalmarks =
    teluguMarks +
    englishMarks +
    hindiMarks +
    mathsMarks +
    scienceMarks +
    socialMarks;
  let perc = (totalmarks * 100) / 600;
  let remarks =
    teluguMarks < 35
      ? "Fail"
      : englishMarks < 35
      ? "Fail"
      : hindiMarks < 35
      ? "Fail"
      : mathsMarks < 35
      ? "Fail"
      : scienceMarks < 35
      ? "Fail"
      : socialMarks < 35
      ? "Fail"
      : "Pass";
  return (
    <div>
      <table className="table">
        <caption className="caption">{props.student}</caption>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Max marks</th>
            <th>Obtained marks</th>
            <th>Grade</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Telugu</td>
            <td>100</td>
            <td>{teluguMarks}</td>
            <td>{teluguMarks >= 35 ? "Pass" : "Fail"}</td>
            <td>
              {teluguMarks >= 70
                ? "Excellent"
                : teluguMarks >= 50
                ? "Good"
                : teluguMarks >= 35
                ? "Average"
                : "Fail"}
            </td>
          </tr>
          <tr>
            <td>English</td>
            <td>100</td>
            <td>{englishMarks}</td>
            <td>{englishMarks >= 35 ? "Pass" : "Fail"}</td>
            <td>
              {englishMarks >= 70
                ? "Excellent"
                : englishMarks >= 50
                ? "Good"
                : englishMarks >= 35
                ? "Average"
                : "Fail"}
            </td>
          </tr>
          <tr>
            <td>Hindi</td>
            <td>100</td>
            <td>{hindiMarks}</td>
            <td>{hindiMarks >= 35 ? "Pass" : "Fail"}</td>
            <td>
              {hindiMarks >= 70
                ? "Excellent"
                : hindiMarks >= 50
                ? "Good"
                : hindiMarks >= 35
                ? "Average"
                : "Fail"}
            </td>
          </tr>
          <tr>
            <td>maths</td>
            <td>100</td>
            <td>{mathsMarks}</td>
            <td>{mathsMarks >= 35 ? "Pass" : "Fail"}</td>
            <td>
              {mathsMarks >= 70
                ? "Excellent"
                : mathsMarks >= 50
                ? "Good"
                : mathsMarks >= 35
                ? "Average"
                : "Fail"}
            </td>
          </tr>
          <tr>
            <td>science</td>
            <td>100</td>
            <td>{scienceMarks}</td>
            <td>{scienceMarks >= 35 ? "Pass" : "Fail"}</td>
            <td>
              {scienceMarks >= 70
                ? "Excellent"
                : scienceMarks >= 50
                ? "Good"
                : scienceMarks >= 35
                ? "Average"
                : "Fail"}
            </td>
          </tr>
          <tr>
            <td>social</td>
            <td>100</td>
            <td>{socialMarks}</td>
            <td>{socialMarks >= 35 ? "Pass" : "Fail"}</td>
            <td>
              {socialMarks >= 70
                ? "Excellent"
                : socialMarks >= 50
                ? "Good"
                : socialMarks >= 35
                ? "Average"
                : "Fail"}
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>600</td>
            <td>
              {totalmarks}({perc.toFixed(2)}%)
            </td>
            <td>{remarks}</td>
            <td>
              {remarks == "Fail"
                ? "Fail"
                : perc >= 70
                ? "Excellent"
                : perc >= 50
                ? "Good"
                : "Average"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Marksheet;
