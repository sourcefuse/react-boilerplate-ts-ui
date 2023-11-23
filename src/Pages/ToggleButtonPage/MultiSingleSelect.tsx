import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function MultiSingleSelect() {
  const [value, setValue] = useState<string | string[]>([]);
  return (
    <ToggleButton
      id="single-select"
      value={value}
      onChange={setValue}
      singleSelect
      label="Multiple Toggle Single Select"
      options={[
        {label: 'Frontend', value: 'frontend'},
        {label: 'Backend', value: 'backend'},
        {label: 'Devops', value: 'devops'},
      ]}
      row
    />
  );
}
