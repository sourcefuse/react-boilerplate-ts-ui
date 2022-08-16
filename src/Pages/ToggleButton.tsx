import Box from '@mui/material/Box';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import ToggleButton from 'Components/Toggle/ToggleButton';
import React, {useState} from 'react';

export default function ToggleButtonComponent() {
  const [values, setValues]: any = useState([]);
  const [value, setValue]: any = useState('');
  const [values1, setValues1]: any = useState([]);
  const [value1, setValue1]: any = useState('');

  function multiHandleChange(e) {
    setValues(e);
  }
  function singleHandleChange(e) {
    setValue(e);
  }
  function multiHandleChange1(e) {
    if (e.target.checked) {
      setValues1([...values1, e.target.value]);
    } else {
      const index = values1.findIndex((val) => val === e?.target?.value);
      values1.splice(index, 1);
      setValues1([...values1]);
    }
  }
  function singleHandleChange1(e) {
    const value = e.target.checked ? e.target.value : '';
    setValue1(value);
  }
  return (
    <PagePaper title="Toggle Button">
      <ComponentPaper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ToggleButton
            id="multipe"
            returnValue
            value={values}
            label="Mult Toggle Retrun Value on Change"
            onChange={multiHandleChange}
            options={[
              {label: 'Frontend', value: 'frontend'},
              {label: 'Backend', value: 'backend'},
              {label: 'Devops', value: 'devops'},
            ]}
            row
          />
          <br />
          <ToggleButton
            id="single"
            singleSelect
            returnValue
            value={value}
            label="Single Toggle Return Value on Change"
            onChange={singleHandleChange}
            options={[{label: 'Frontend', value: 'frontend'}]}
          />
          <br />
          <ToggleButton
            id="multipeWithEvent"
            value={values1}
            label="Mult Toggle return event on Change"
            onChange={multiHandleChange1}
            options={[
              {label: 'Frontend', value: 'frontend'},
              {label: 'Backend', value: 'backend'},
              {label: 'Devops', value: 'devops'},
            ]}
            row
          />
          <br />
          <ToggleButton
            id="singleWithEven"
            singleSelect
            value={value1}
            label="Single Toggle return event on Change"
            onChange={singleHandleChange1}
            options={[{label: 'Frontend', value: 'frontend'}]}
          />
        </Box>
      </ComponentPaper>
      <CodeBlock
        fullCode={`
import Box from '@mui/material/Box';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import ToggleButton from 'Components/Toggle/ToggleButton';
import {useState} from 'react';

export default function ToggleButtonComponent() {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState('');
  const [values1, setValues1] = useState([]);
  const [value1, setValue1] = useState('');

  function multiHandleChange(e) {
    setValues(e);
  }
  function singleHandleChange(e) {
    setValue(e);
  }
  function multiHandleChange1(e) {
    if (e.target.checked) {
      setValues1([...values1, e.target.value]);
    } else {
      const index = values1.findIndex((val) => val === e?.target?.value);
      values1.splice(index, 1);
      setValues1([...values1]);
    }
  }
  function singleHandleChange1(e) {
    const value = e.target.checked ? e.target.value : '';
    setValue1(value);
  }
  return (
    <PagePaper title="Toggle Button">
      <ComponentPaper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ToggleButton
            id="multipe"
            returnValue
            value={values}
            label="Mult Toggle Retrun Value on Change"
            onChange={multiHandleChange}
            options={[
              {label: 'Frontend', value: 'frontend'},
              {label: 'Backend', value: 'backend'},
              {label: 'Devops', value: 'devops'},
            ]}
            row
          />
          <br />
          <ToggleButton
            id="single"
            singleSelect
            value={value}
            label="Single Toggle Return Value on Change"
            onChange={singleHandleChange}
            options={[{label: 'Frontend', value: 'frontend'}]}
          />
          <br />
          <ToggleButton
            id="multipeWithEvent"
            value={values1}
            label="Mult Toggle return event on Change"
            onChange={multiHandleChange1}
            options={[
              {label: 'Frontend', value: 'frontend'},
              {label: 'Backend', value: 'backend'},
              {label: 'Devops', value: 'devops'},
            ]}
            row
          />
          <br />
          <ToggleButton
            id="singleWithEven"
            singleSelect
            value={value1}
            label="Single Toggle return event on Change"
            onChange={singleHandleChange1}
            options={[{label: 'Frontend', value: 'frontend'}]}
          />
        </Box>
      </ComponentPaper>
    </PagePaper>
  );
}
         
                    `}
        initial={`
               <ToggleButton
                 id="singleWithEven"
                 singleSelect
                 value={value1}
                 label="Single Toggle return event on Change"
                 onChange={singleHandleChange1}
                 options={[{label: 'Frontend', value: 'frontend'}]}
               />
          `}
      />
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
  );
}
