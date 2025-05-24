import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const { state } = useLocation();

  return (
    <div style={{
      maxWidth: 600,
      margin: "40px auto",
      padding: "30px",
      borderRadius: "15px",
      backgroundColor: "#f0fff0",
      boxShadow: "0 0 15px rgba(0, 128, 0, 0.2)",
      textAlign: "center"
    }}>
      <h2 style={{ color: "green" }}>Form Was Submitted Successfully!</h2>
      <div style={{ textAlign: "left", marginTop: "20px" }}>
        {Object.entries(state || {}).map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {value}</p>
        ))}
      </div>
        
      <p style={{ color: "black" }}>Thank you for your submission!</p>
      <p style={{ color: "black" }}>Now you can close this tab</p>
    </div>
  );
};

export default SuccessPage;
