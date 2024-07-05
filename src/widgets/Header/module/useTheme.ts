import { useEffect, useState } from "react";

type TTheme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<TTheme>("light");
  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggle };
};

export default useTheme;
