import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function SingleReturnEvent() {
  const [value, setValue] = useState<{label: string; value: string}[]>([]);

  const handleSubmit = (e: any) => {
    const value = e.target.checked ? e.target.value : '';
    setValue(value);
  };

  return (
    <ToggleButton
      id="singleWithEven"
      singleSelect
      value={value}
      onChange={handleSubmit}
      options={[{label: 'Frontend', value: 'frontend'}]}
    />
  );
}
