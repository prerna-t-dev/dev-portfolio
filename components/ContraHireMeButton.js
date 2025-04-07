import { useEffect } from "react";

const ContraHireMeButton = () => {
  useEffect(() => {
    // Check if the script already exists
    if (!document.querySelector('script[src="https://contra.com/static/embed/sdk.js"]')) {
      const script = document.createElement("script");
      script.src = "https://contra.com/static/embed/sdk.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div
      className="contra-hire-me-button"
      data-analyticsUserId="00de9f7f-4dd5-49ed-b696-237ab84855f8"
      data-theme="dark"
      data-username="prerna_tripathy_dev"
    ></div>
  );
};

export default ContraHireMeButton;
