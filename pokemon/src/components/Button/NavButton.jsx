import { useNavigate } from "react-router-dom";
import { getPath } from "../../shared/Router.jsx";
import Button from "./Button.jsx";

const NavButton = ({ page, children, ...props }) => {
  const navigate = useNavigate();
  const navHandler = (page) => {
    const path = getPath(page);
    navigate(path);
  };

  return (
    <Button
      onClick={(e) => {
        navHandler(page);
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NavButton;
