import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import Dropdown, {AutocompleteValueType} from 'Components/Dropdown/Dropdown';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';
import {useState} from 'react';

const options = [
  {label: 'Mr', value: 'mr'},
  {label: 'Mrs', value: 'mrs'},
  {label: 'Ms', value: 'ms'},
];

const DropdownPage = () => {
  const [value, setValue] = useState<AutocompleteValueType>(options[0]);
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper title="Dropdown/Autocomplete">
          <ComponentViewer
            title="Default Dropdown"
            code={`import ComponentPaper from 'Components/ComponentPaper';
import Dropdown from 'Components/Dropdown';
import PagePaper from 'Components/PagePaper';
import {useState} from 'react';

const options = [
  {label: 'Mr', value: 'mr'},
  {label: 'Mrs', value: 'mrs'},
  {label: 'Ms', value: 'ms'},
];

const DropdownPage = () => {
  const [value, setValue] = useState(options[0]);
  return (
    <PagePaper title="Input">
      <ComponentPaper>
        <Dropdown id="salutation" label="Salutation" value={value} options={options} onChange={setValue} />
      </ComponentPaper>
    </PagePaper>
  );
};

export default DropdownPage;
`}
          >
            <Dropdown id="salutation" label="Salutation" value={value} options={options} onChange={setValue} />
          </ComponentViewer>

          <PropsTable
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for dropdown field'},
              {name: 'label', type: 'string', desc: 'Label for dropdown field'},
              {name: 'options', type: '{label:string, value:any}', desc: 'Options for dropdown field'},
              {name: 'value', type: 'string | number'},
              {name: 'disabled', type: 'bool', defaultVal: 'false'},
              {name: 'helperText', type: 'string', desc: 'Display text below dropdown field'},
              {name: 'enableAutoComplete', type: 'bool', defaultVal: false, desc: 'Enable searching in the dropdown'},
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
                desc: 'Callback fired when the value is changed',
              },
            ]}
          />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default DropdownPage;
