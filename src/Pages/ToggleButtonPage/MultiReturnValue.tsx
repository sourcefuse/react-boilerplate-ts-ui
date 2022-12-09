import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function MultiReturnValue() {
  const [value, setValue] = useState<{label: string; value: string}[]>([]);
  return (
    <ToggleButton
      id="multiple"
      returnValue
      value={value}
      onChange={setValue}
      options={[
        {label: 'Frontend', value: 'frontend'},
        {label: 'Backend', value: 'backend'},
        {label: 'Devops', value: 'devops'},
      ]}
      row
    />
  );
}
