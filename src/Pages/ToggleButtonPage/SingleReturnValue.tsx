import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function SingleReturnValue() {
  const [value, setValue] = useState<{label: string; value: string}[]>([]);
  return (
    <ToggleButton
      id="single"
      singleSelect
      returnValue
      value={value}
      onChange={setValue}
      options={[{label: 'Frontend', value: 'frontend'}]}
    />
  );
}
