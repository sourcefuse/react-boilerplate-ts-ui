import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import TableOfContent from 'Components/TableOfContent/TableOfContent';
import MultiReturnEvent from './MultiReturnEvent';
import MultiReturnValue from './MultiReturnValue';
import SingleReturnEvent from './SingleReturnEvent';
import SingleReturnValue from './SingleReturnValue';

export default function ToggleButtonComponent() {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1}}>
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
      id="multipe"
      returnValue
      value={value}
      label="Mult Toggle Retrun Value on Change"
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
            title="Single toggle button capture event"
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
            <SingleReturnEvent />
          </ComponentViewer>
          <ComponentViewer
            title="Multiple toggle button capture event"
            code={`import ToggleButton from 'Components/ToggleButton';
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
`}
          >
            <MultiReturnEvent />
          </ComponentViewer>

          <Table
            data={[
              {
                name: 'align',
                type: (
                  <>
                    <>{` align 'center'| 'inherit'| 'justify'| 'left'| 'right' `}</>
                  </>
                ),
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
      <TableOfContent />
    </Stack>
  );
}
