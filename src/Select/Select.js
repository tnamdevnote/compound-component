import Dropdown from "../Dropdown/Dropdown";

export default function Select({ label, trigger, value, onSelect, options }) {
  return (
    <Dropdown label={label} value={value} onSelect={onSelect}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.MenuItem key={option.id} label={option.label}>
            {option.label}
          </Dropdown.MenuItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
