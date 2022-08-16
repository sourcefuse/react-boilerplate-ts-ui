import Typography from '@mui/material/Typography';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import DatePicker from 'Components/DatePicker/DatePicker';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import React, {useState} from 'react';

const DatePickerPage = () => {
  const [value, setValue] = useState(null);
  return (
    <PagePaper title="DatePicker">
      <ComponentPaper>
        <DatePicker id="dob" value={value} onChange={setValue} label="D.O.B" returnValue />
      </ComponentPaper>
      <CodeBlock
        fullCode={`import ComponentPaper from 'Components/ComponentPaper';
import DatePicker from 'Components/DatePicker/DatePicker';
import PagePaper from 'Components/PagePaper';
import {useState} from 'react';

const DatePickerPage = () => {
  const [value, setValue] = useState(null);
  return (
    <PagePaper title="DatePicker">
      <ComponentPaper>
        <DatePicker id="dob" value={value} onChange={setValue} label="D.O.B" returnValue />
      </ComponentPaper>
    </PagePaper>
  );
};

export default DatePickerPage;`}
        initial={`<DatePicker id="dob" value={value} onChange={setValue} label="D.O.B" returnValue />`}
      />
      <Table
        data={[
          {name: 'id', type: 'string', desc: 'Unique id for input field'},
          {name: 'label', type: 'string', desc: 'Label for input field'},
          {name: 'value', type: 'string | number'},
          {name: 'disabled', type: 'bool', defaultVal: 'false'},
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

export default DatePickerPage;
