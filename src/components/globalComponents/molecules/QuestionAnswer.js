import Heading from "./Heading";

const QuestionAnswer = () => {
  return (
    <div
      className="py-2 mx-2 border-bottom-1"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.15)" }}
    >
      <div className="d-flex">
        <div className="fw-bold px-3">Q:</div>
        <Heading
          text="What are the Key Features of Brigade Golden Triangle?"
          fontSize="1rem"
          fontWeight="600"
          className="ques"
        />
      </div>

      <div className="d-flex">
        <div className="fw-bold px-3">A:</div>
        <Heading
          text="The stamp duty charges and registration charges for Oasis Venetia Heights can vary and are subject to the prevailing government regulations. Please contact our sales team for the most up-to-date information."
          fontSize="14px"
          color="#444"
          fontWeight="400"
          className="ans"
          showLine="3"
          lineHeight="1.5rem"
        />
      </div>
    </div>
  );
};

export default QuestionAnswer;
