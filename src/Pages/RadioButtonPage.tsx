import Typography from '@mui/material/Typography';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import RadioButton from 'Components/RadioButton/RadioButton';
import Table from 'Components/Table';
import React, {useState} from 'react';

const options = [
  {label: `I'm In`, value: 'yes'},
  {label: `I'm Out`, value: 'no'},
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
          returnValue
          options={options}
          label={'Opt in for email Updates'}
        />
      </ComponentPaper>
      <CodeBlock
        fullCode={`import ComponentPaper from 'Components/ComponentPaper';
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
          returnValue
          options={options}
          label={'Opt in for email Updates'}
          row
        />
      </ComponentPaper>
    </PagePaper>
  );
};

export default RadioButtonPage;`}
        initial={`<RadioButton
  id="emailUpdates"
  value={emailUpdates}
  onChange={setEmailUpdates}
  returnValue
  options={options}
  label={'Opt in for email Updates'}
  row
/>`}
      />
      <Table
        data={[
          {name: 'id', type: 'string', desc: 'Unique id for radio button'},
          {name: 'label', type: 'string', desc: 'Label for radio button field'},
          {name: 'options', type: '{label:string, value:any}', desc: 'Options for radio button'},
          {name: 'value', type: 'string | number'},
          {name: 'disabled', type: 'bool', defaultVal: 'false'},
          {name: 'helperText', type: 'string', desc: 'Display text below radio button field'},
          {
            name: 'returnValue',
            type: 'bool',
            defaultVal: false,
            desc: 'If onChange expects value as param',
          },
          {
            name: 'onChange',
            type: 'func',
            desc: (
              <>
                <Typography>Callback fired when the value is changed</Typography>
                <br />
                <Typography sx={{fontWeight: 'bold'}}>Signature:</Typography>
                <Typography>fn(event: object) =&gt; void</Typography>
                <Typography>
                  ( or if <b>returnValue</b> is <b>True</b> fn(value: string) =&gt; void)
                </Typography>
              </>
            ),
          },
        ]}
      />
    </PagePaper>
  );
};

export default RadioButtonPage;
