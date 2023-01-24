import {Box, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import RadioButton from 'Components/RadioButton/RadioButton';
import Table from 'Components/Table';
import TableOfContent from 'Components/TableOfContent/TableOfContent';
import {useState} from 'react';

const options = [
  {label: `I'm In`, value: 'yes'},
  {label: `I'm Out`, value: 'no'},
];

const RadioButtonPage = () => {
  const [emailUpdates, setEmailUpdates] = useState('');

  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1}}>
        <PagePaper title="Radio Button">
          <ComponentViewer
            title="Default Radio Button"
            code={`import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import RadioButton from 'Components/RadioButton/RadioButton';
import {useState} from 'react';

const options = [
  {label: \`I'm In\`, value: 'yes'},
  {label: \`I'm Out\`, value: 'no'},
];

const RadioButtonPage = () => {
  const [emailUpdates, setEmailUpdates] = useState('');

  return (
    <PagePaper title="Radio Button">
      <ComponentPaper>
        <RadioButton
          id="emailUpdates"
          value={emailUpdates}
          onChange={setEmailUpdates}
          options={options}
          label={'Opt in for email Updates'}
          row
        />
      </ComponentPaper>
    </PagePaper>
  );
};

export default RadioButtonPage;`}
          >
            <RadioButton
              id="emailUpdates"
              value={emailUpdates}
              onChange={setEmailUpdates}
              options={options}
              label={'Opt in for email Updates'}
            />{' '}
          </ComponentViewer>

          <Table
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for radio button'},
              {name: 'label', type: 'string', desc: 'Label for radio button field'},
              {name: 'options', type: '{label:string, value:any}', desc: 'Options for radio button'},
              {name: 'value', type: 'string | number'},
              {name: 'disabled', type: 'bool', defaultVal: 'false'},
              {name: 'helperText', type: 'string', desc: 'Display text below radio button field'},
              {
                name: 'onChange',
                type: 'func',
                desc: <Typography>Callback fired when the value is changed</Typography>,
              },
            ]}
          />
        </PagePaper>
      </Box>
      <TableOfContent />
    </Stack>
  );
};

export default RadioButtonPage;
