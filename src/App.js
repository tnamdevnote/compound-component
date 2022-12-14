import { useState } from "react";
import "./styles.css";
import Select from "./Select/Select";
import Button from "./Button/Button";

const filterOptions = [
  {
    id: "1",
    label: "ELA",
  },
  {
    id: "2",
    label: "Math",
  },
  {
    id: "3",
    label: "Science",
  },
];

export default function App() {
  const [selection, setSelection] = useState([]);

  const handleSelect = (label) => {
    if (selection.includes(label)) {
      return setSelection(selection.filter((selected) => selected !== label));
    }
    return setSelection((selection) => [...selection, label]);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Select
        label="Page Dropdown"
        value={selection}
        trigger={
          <Button>
            {selection.length > 0 ? selection.join(", ") : "Dropdown"}
          </Button>
        }
        options={filterOptions}
        onSelect={handleSelect}
      />
    </div>
  );
}
