import { useNavigate } from "react-router-dom";
import { getPath } from "../../shared/Router.jsx";
import Button from "./Button.jsx";

const NavButton = ({ page, children }) => {
  const navigate = useNavigate();
  const navHandler = (page) => {
    const path = getPath(page);
    navigate(path);
  };

  return (
    <Button
      onClick={() => {
        navHandler(page);
      }}
    >
      {children}
    </Button>
  );
};

export default NavButton;
