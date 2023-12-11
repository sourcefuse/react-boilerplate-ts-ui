import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import MultiReturnValue from './MultiReturnValue';
import SingleReturnValue from './SingleReturnValue';
import MultiSingleSelect from './MultiSingleSelect';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

export default function ToggleButtonComponent() {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper title="Toggle Button">
          <ComponentViewer
            title="Default Toggle Button"
            code={`import ToggleButton from 'Components/ToggleButton';
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
      label="Single Toggle return event on Change"
      onChange={handleSubmit}
      options={[{label: 'Frontend', value: 'frontend'}]}
    />
  );
}
`}
          >
            <SingleReturnValue />
          </ComponentViewer>

          <ComponentViewer
            title="Multi value Toggle Button"
            code={`import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function MultiReturnValue() {
  const [value, setValue] = useState<{label: string; value: string}[]>([]);
  return (
    <ToggleButton
      id="multiple"
      value={value}
      label="Multiple Toggle Return Value on Change"
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
`}
          >
            <MultiReturnValue />
          </ComponentViewer>

          <ComponentViewer
            title="Multi value Single Select"
            code={`import ToggleButton from 'Components/ToggleButton';
import {useState} from 'react';

export default function MultiReturnValue() {
  const [value, setValue] = useState<{label: string; value: string}[]>([]);
  return (
    <ToggleButton
      id="multiple"
      value={value}
      singleSelect
      label="Multiple Toggle Return Value on Change"
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
`}
          >
            <MultiSingleSelect />
          </ComponentViewer>

          <PropsTable
            data={[
              {
                name: 'align',
                type: <>{`align 'center'| 'inherit'| 'justify'| 'left'| 'right'`}</>,
                desc: `'inherit'
            Set the text-align on the table cell content.
            Monetary or generally number fields should be right aligned as that allows you to add them up quickly in your head without having to worry about decimals.`,
              },
              {
                name: 'children',
                type: 'node',
                desc: `	The content of the component.`,
              },
            ]}
          />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
}
