import React from "react";

interface SizeProps {
  size: string;
}

const Gap: React.FC<SizeProps> = ({ size }) => {
  return <div className={size} />;
};

export default Gap;
