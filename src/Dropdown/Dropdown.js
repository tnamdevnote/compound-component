import { createContext, useContext, useMemo } from "react";
import useBoolean from "../hooks/useBoolean";

// Create context objects to store isOpen state of Dropdown
const DropdownContext = createContext();

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      `Dropdown compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
}

function Dropdown({ label, value, onSelect, children }) {
  const [isOpen, toggle] = useBoolean(false);
  const contextValue = useMemo(() => ({ isOpen, toggle, value, onSelect }), [
    isOpen,
    toggle,
    value,
    onSelect,
  ]);

  return (
    <DropdownContext.Provider value={contextValue}>
      <p>{label}</p>
      {children}
    </DropdownContext.Provider>
  );
}

function Trigger({ as: Component }) {
  const { toggle } = useDropdownContext();
  return <div onClick={toggle}>{Component}</div>;
}

function Menu({ children }) {
  const { isOpen } = useDropdownContext();
  return isOpen ? <ul>{children}</ul> : null;
}

function MenuItem({ label, children }) {
  const { onSelect } = useDropdownContext();
  return <li onClick={() => onSelect(label)}>{children}</li>;
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;

export default Dropdown;
