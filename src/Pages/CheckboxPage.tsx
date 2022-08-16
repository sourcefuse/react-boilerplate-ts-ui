import Typography from '@mui/material/Typography';
import Checkbox from 'Components/Checkbox/Checkbox';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import React, {useState} from 'react';

const options = [
  {label: 'Frontend', value: 'frontend'},
  {label: 'Backend', value: 'backend'},
  {label: 'Devops', value: 'devops'},
];

const CheckboxPage = () => {
  const [value, setValue] = useState([]);
  return (
    <PagePaper title="Checkbox">
      <ComponentPaper>
        <Checkbox id="skills" value={value} onChange={setValue} options={options} label="Skills" returnValue row />
      </ComponentPaper>
      <CodeBlock
        fullCode={`import Checkbox from 'Components/Checkbox/Checkbox';
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
        <Checkbox id="skills" value={value} onChange={setValue} options={options} label="Skills" returnValue row />
      </ComponentPaper>
    </PagePaper>
  );
};

export default CheckboxPage;`}
        initial={`<Checkbox id="skills" value={value} onChange={setValue} options={options} label="Skills" returnValue row />`}
      />
      <Table
        data={[
          {name: 'id', type: 'string', desc: 'Unique id for checkbox'},
          {name: 'label', type: 'string', desc: 'Label for checkbox'},
          {name: 'options', type: '{label:string, value:any}', desc: 'Options for checkbox'},
          {name: 'value', type: 'string | number'},
          {name: 'disabled', type: 'bool', defaultVal: 'false'},
          {name: 'isTouched', type: 'bool', defaultVal: 'false'},
          {name: 'helperText', type: 'string', desc: 'Display text below checkbox'},
          {name: 'singleSelect', type: 'bool', defaultVal: 'false', desc: 'If only one value needs to be selected'},
          {name: 'row', type: 'bool', defaultVal: 'false', desc: 'Display checkbox horizontally'},
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

export default CheckboxPage;
