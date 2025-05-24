import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  phone: "",
  country: "",
  city: "",
  pan: "",
  aadhar: ""
};

const FormPage = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const countries = {
    India: ["Delhi", "Mumbai", "Jaipur","Kolkata","Bangalor","Chennai", "Hyderabad"],
    Canada: ["Ottava","Toronto", "Vancouver", "Montreal","Calgary"],
    Australia: ["Sydney", "Melbourne", "Brisbane","Perth"],
    USA: ["New York", "San Francisco", "Los Angeles", "Chicago", "Houston"],
    France: ["Paris", "Lyon", "Marseille", "Nice"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    Germany: ["Berlin", "Munich", "Frankfurt"],
    UK: ["London", "Manchester", "Birmingham", "Liverpool"],
    Italy: ["Rome", "Milan", "Venice", "Florence"],
    China: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    Brazil: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],
    Russia: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
    South_Africa: ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password || formData.password.length < 6) newErrors.password = "Minimum 6 characters required";
    if (!/^\+\d{1,4}\s\d{6,10}$/.test(formData.phone)) newErrors.phone = "Format: +91 9876543210";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) newErrors.pan = "Invalid PAN (e.g., ABCDE1234F)";
    if (!/^\d{12}$/.test(formData.aadhar)) newErrors.aadhar = "Aadhar must be 12 digits";

    setErrors(newErrors);
    setIsSubmitDisabled(Object.keys(newErrors).length > 0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) navigate("/success", { state: formData });
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px"
  };

  const errorStyle = {
    color: "crimson",
    fontSize: "13px",
    marginBottom: "8px"
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: "40px auto",
      padding: "30px",
      borderRadius: "15px",
      backgroundColor: "#fefefe",
      boxShadow: "0 0 15px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {["firstName", "lastName", "username", "email", "phone", "pan", "aadhar"].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label><br />
            <input
              style={inputStyle}
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
            {errors[field] && <div style={errorStyle}>{errors[field]}</div>}
          </div>
        ))}

        <label>Password:</label><br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            style={{ ...inputStyle, flex: 1 }}
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            style={{ marginLeft: "10px", padding: "8px", cursor: "pointer" }}
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <div style={errorStyle}>{errors.password}</div>}

        <label>Country:</label><br />
        <select name="country" value={formData.country} onChange={handleChange} style={inputStyle}>
          <option value="">-- Select Country --</option>
          {Object.keys(countries).map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
        {errors.country && <div style={errorStyle}>{errors.country}</div>}

        <label>City:</label><br />
        <select name="city" value={formData.city} onChange={handleChange} style={inputStyle}>
          <option value="">-- Select City --</option>
          {(countries[formData.country] || []).map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
        {errors.city && <div style={errorStyle}>{errors.city}</div>}

        <button
          type="submit"
          disabled={isSubmitDisabled}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            backgroundColor: isSubmitDisabled ? "#aaa" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: isSubmitDisabled ? "not-allowed" : "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
