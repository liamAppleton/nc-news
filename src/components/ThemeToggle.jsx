import { themeToggle } from '../../utils/utils';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const ThemeToggle = () => {
  const [ariaTheme, setAriaTheme] = useState(false);
  return (
    <div className="ms-auto">
      <Form.Check
        aria-label="theme toggle"
        role="button"
        aria-pressed={ariaTheme}
        tabIndex="0"
        type="switch"
        id="custom-switch"
        label="Theme"
        onClick={() => {
          setAriaTheme((bool) => !bool);
          themeToggle();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setAriaTheme((bool) => !bool);
            themeToggle();
          }
        }}
      />
    </div>
  );
};
