import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function MultiReturnValue() {
  const [value, setValue] = useState<string | string[]>([]);
  return (
    <ToggleButton
      id="multiple"
      value={value}
      onChange={setValue}
      label="Multiple Toggle Multi Select"
      options={[
        {label: 'Frontend', value: 'frontend'},
        {label: 'Backend', value: 'backend'},
        {label: 'Devops', value: 'devops'},
      ]}
      row
    />
  );
}
