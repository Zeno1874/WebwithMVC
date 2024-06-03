import React from "react";
import './Button.css'

function Button({ type, href, onClick, className, children }) {
  const Element = href ? 'a' : 'button';

  return (
    <Element type={type} href={href} onClick={onClick} className={className}>
      {children}
    </Element>
  );
}

export default Button;
