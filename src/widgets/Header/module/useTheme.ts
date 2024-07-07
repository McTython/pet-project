import { useEffect, useState } from "react";

const useTheme = () => {
  const fetchFormLocalStorage = () => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? localTheme : "light";
  };

  const [theme, setTheme] = useState(fetchFormLocalStorage());

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggle };
};

export default useTheme;
