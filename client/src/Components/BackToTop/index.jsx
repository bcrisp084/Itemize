import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="back-to-top-btn"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: showButton ? "block" : "none",
        cursor: "pointer",
      }}
      onClick={handleButtonClick}
    >
      Back to Top
    </div>
  );
};

export default BackToTop;
