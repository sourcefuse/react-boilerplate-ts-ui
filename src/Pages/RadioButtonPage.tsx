import {Box, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import RadioButton from 'Components/RadioButton/RadioButton';
import PropsTable from 'Components/PropsTable';
import {useState} from 'react';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const options = [
  {label: `I'm In`, value: 'yes'},
  {label: `I'm Out`, value: 'no'},
];

const RadioButtonPage = () => {
  const [emailUpdates, setEmailUpdates] = useState('');

  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
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

          <PropsTable
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
                desc: (
                  <>
                    <Typography>Callback fired when the value is changed</Typography>
                    <br />
                    <Typography sx={{fontWeight: 'bold'}}>Signature:</Typography>
                    <Typography>fn(val: any) =&gt; void</Typography>
                  </>
                ),
              },
            ]}
          />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default RadioButtonPage;
