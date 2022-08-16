import Typography from '@mui/material/Typography';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import Input from 'Components/Input/Input';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import React, {useState} from 'react';

const InputPage = () => {
  const [value, setValue] = useState('');
  return (
    <PagePaper title="Input">
      <ComponentPaper>
        <Input id="myInput" inputLabel="My input" value={value} onChange={setValue} returnValue />
      </ComponentPaper>
      <CodeBlock
        fullCode={`import ComponentPaper from "Components/ComponentPaper";
import Input from "Components/Input";
import {useState} from 'react';

const InputPage = () => {
  const [value, setValue] = useState('');
  return (
    <ComponentPaper>
      <Input id="myInput" label="My input" value={value} onChange={setValue} returnValue />
    </ComponentPaper>
  );
};

export default InputPage;`}
        initial={`<Input id="myInput" label="My input" value={value} onChange={setValue} returnValue />`}
      />
      <Table
        data={[
          {name: 'id', type: 'string', desc: 'Unique id for input field'},
          {name: 'label', type: 'string', desc: 'Label for input field'},
          {name: 'value', type: 'string | number'},
          {name: 'disabled', type: 'bool', defaultVal: 'false'},
          {name: 'copyEnabled', type: 'bool', defaultVal: 'false', desc: 'Copy from input'},
          {name: 'isTouched', type: 'bool', defaultVal: 'false'},
          {name: 'helperText', type: 'string', desc: 'Display text below input field'},
          {
            name: 'errorMessage',
            type: 'string',
            desc: (
              <>
                Displays error message if <b>isTouched</b> is true
              </>
            ),
          },
          {name: 'endAdornment', type: 'node', desc: 'Display icon on the end of input'},
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

export default InputPage;
