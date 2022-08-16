import Typography from '@mui/material/Typography';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import Dropdown from 'Components/Dropdown/Dropdown';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import React, {useState} from 'react';

const options = [
  {label: 'Mr', value: 'mr'},
  {label: 'Mrs', value: 'mrs'},
  {label: 'Ms', value: 'ms'},
];

const DropdownPage = () => {
  const [value, setValue] = useState(options[0]);
  return (
    <PagePaper title="Dropdown/Autocomplete">
      <ComponentPaper>
        <Dropdown id="salutation" label="Salutation" value={value} options={options} onChange={setValue} returnValue />
      </ComponentPaper>
      <CodeBlock
        fullCode={`import ComponentPaper from 'Components/ComponentPaper';
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
        <Dropdown id="salutation" label="Salutation" value={value} options={options} onChange={setValue} returnValue />
      </ComponentPaper>
    </PagePaper>
  );
};

export default DropdownPage;
`}
        initial={`<Dropdown id="salutation" label="Salutation" value={value} options={options} onChange={setValue} returnValue />`}
      />
      <Table
        data={[
          {name: 'id', type: 'string', desc: 'Unique id for dropdown field'},
          {name: 'label', type: 'string', desc: 'Label for dropdown field'},
          {name: 'options', type: '{label:string, value:any}', desc: 'Options for dropdown field'},
          {name: 'value', type: 'string | number'},
          {name: 'disabled', type: 'bool', defaultVal: 'false'},
          {name: 'isTouched', type: 'bool', defaultVal: 'false'},
          {name: 'helperText', type: 'string', desc: 'Display text below dropdown field'},
          {name: 'enableAutoComplete', type: 'bool', defaultVal: false, desc: 'Enable searching in the dropdown'},
          {
            name: 'returnValue',
            type: 'bool',
            defaultVal: false,
            desc: 'If onChange expects value as param',
          },
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

export default DropdownPage;
