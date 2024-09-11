import { useNavigate } from "react-router-dom";
import { getPath } from "../../shared/Router.jsx";
import Button from "./Button.jsx";
import {useCallback} from "react";

const NavButton = ({ page, children, ...props }) => {
  const navigate = useNavigate();

  const navHandler = useCallback((page) => {
    const path = getPath(page);
    navigate(path);
  }, [navigate]);

  return (
    <Button
      onClick={() => {
        navHandler(page);
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NavButton;
