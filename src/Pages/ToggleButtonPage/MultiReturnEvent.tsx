import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function MultiReturnEvent() {
  const [value, setValue] = useState<{label: string; value: string}[]>([]);

  const handleSubmit = (e: any) => {
    if (e.target.checked) {
      setValue([...value, e.target.value]);
    } else {
      const index = value.findIndex((val: any) => val === e?.target?.value);
      value.splice(index, 1);
      setValue([...value]);
    }
  };
  return (
    <ToggleButton
      id="multipleWithEvent"
      value={value}
      onChange={handleSubmit}
      options={[
        {label: 'Frontend', value: 'frontend'},
        {label: 'Backend', value: 'backend'},
        {label: 'Devops', value: 'devops'},
      ]}
      row
    />
  );
}
