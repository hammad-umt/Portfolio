"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
  icon: IconDefinition;
  spanName?: string;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className = "",
  icon,
  spanName = "",
  iconPosition = "right",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {iconPosition === "left" && (
        <span className={spanName}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {title}
      {iconPosition === "right" && (
        <span className={spanName}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
    </button>
  );
};

export default Button;
