import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import DatePicker from 'Components/DatePicker/DatePicker';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import TableOfContent from 'Components/TableOfContent/TableOfContent';
import {useState} from 'react';

const DatePickerPage = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1}}>
        <PagePaper title="DatePicker">
          <ComponentViewer
            title="Default DatePicker"
            code={`import ComponentPaper from 'Components/ComponentPaper';
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
          >
            <DatePicker id="dob" value={value} onChange={setValue} label="D.O.B" />
          </ComponentViewer>
          <PropsTable
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for input field'},
              {name: 'label', type: 'string', desc: 'Label for input field'},
              {name: 'value', type: 'string | number'},
              {name: 'disabled', type: 'bool', defaultVal: 'false'},
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
                name: 'onChange',
                type: 'func',
                desc: 'Callback fired when the value is changed',
              },
            ]}
          />
        </PagePaper>
      </Box>
      <TableOfContent />
    </Stack>
  );
};

export default DatePickerPage;
