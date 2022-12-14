import { useCallback, useState } from "react";

export default function useBoolean(defaultValue?) {
  const [value, setValue] = useState(!!defaultValue);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((value) => !value), []);

  return [value, toggle];
}
