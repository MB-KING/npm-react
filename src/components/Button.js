import React from "react";
const Button = ({ clientId }) => {
  const handleClick = () => {
    window.location.href = `https://service.naringames.com/login?clientId=${clientId}`;
  };

  return (
    <button className="dokme" onClick={handleClick}>
      سامانه ورود یکپارچه نارین گیمز
    </button>
  );
};

export default Button;
