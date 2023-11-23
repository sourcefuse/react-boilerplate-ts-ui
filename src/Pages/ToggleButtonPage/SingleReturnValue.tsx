import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function SingleReturnValue() {
  const [value, setValue] = useState<string | string[]>([]);
  return (
    <ToggleButton
      id="single"
      singleSelect
      value={value}
      label="Single Toggle"
      onChange={setValue}
      options={[{label: 'Frontend', value: 'frontend'}]}
    />
  );
}
