import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface props {
  onClick: () => void;
}

const Like = ({ onClick }: props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FaRegHeart color="blue" size="60px" onClick={toggle} />;
  return <FaHeart size={60} onClick={toggle} />;
};

export default Like;
