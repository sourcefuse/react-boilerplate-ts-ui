import {Box, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import Checkbox from 'Components/Checkbox/Checkbox';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';
import {useState} from 'react';

const options = [
  {label: 'Frontend', value: 'frontend'},
  {label: 'Backend', value: 'backend'},
  {label: 'Devops', value: 'devops'},
];

const CheckboxPage = () => {
  const [value, setValue] = useState<string | string[]>([]);
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper title="Checkbox">
          <ComponentViewer
            title="Default Input"
            code={`import Checkbox from 'Components/Checkbox/Checkbox';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import {useState} from 'react';

const options = [
  {label: 'Frontend', value: 'frontend'},
  {label: 'Backend', value: 'backend'},
  {label: 'Devops', value: 'devops'},
];

const CheckboxPage = () => {
  const [value, setValue] = useState([]);
  return (
    <PagePaper title="Dropdown/Autocomplete">
      <ComponentPaper>
        <Checkbox id="skills" value={value} onChange={setValue} options={options} label="Skills" row />
      </ComponentPaper>
    </PagePaper>
  );
};

export default CheckboxPage;`}
          >
            <Checkbox id="skills" value={value} onChange={setValue} options={options} label="Skills" row />
          </ComponentViewer>

          <PropsTable
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for checkbox'},
              {name: 'label', type: 'string', desc: 'Label for checkbox'},
              {name: 'options', type: '{label:string, value:any}', desc: 'Options for checkbox'},
              {name: 'value', type: 'string | number'},
              {name: 'disabled', type: 'bool', defaultVal: 'false'},
              {name: 'helperText', type: 'string', desc: 'Display text below checkbox'},
              {name: 'singleSelect', type: 'bool', defaultVal: 'false', desc: 'If only one value needs to be selected'},
              {name: 'row', type: 'bool', defaultVal: 'false', desc: 'Display checkbox horizontally'},
              {
                name: 'errorMessage',
                type: 'string',
                desc: (
                  <>
                    Displays error message if <b>isTouched</b> is true
                  </>
                ),
              },
              {
                name: 'onChange',
                type: 'func',
                desc: <Typography>Callback fired when the value is changed</Typography>,
              },
              {
                name: 'other props',
                type: 'CheckboxProps',
                desc: 'Props of MUI checkbox are also available.',
              },
            ]}
          />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default CheckboxPage;
