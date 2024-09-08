import { Link } from "react-router-dom";

const LinkElement = ({ children, href }) => {
  return (
    <Link
      to={href}
      className="cursor-pointer ease-linear transition-all p-2 hover:bg-primary-default rounded hover:underline"
    >
      {children}
    </Link>
  );
};

export default LinkElement;
