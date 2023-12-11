import {Box, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import ComponentViewer from 'Components/ComponentViewer';
import Input from 'Components/Input/Input';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';
import {useState} from 'react';

const InputPage = () => {
  const [value, setValue] = useState('');
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper
          title="Input"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos esse voluptate quos alias magni, excepturi at veniam dolore, error eaque cupiditate aperiam. Cumque nulla necessitatibus cum perferendis illo distinctio eos."
        >
          <ComponentViewer
            title="Default Input"
            code={`import ComponentPaper from "Components/ComponentPaper";
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
          >
            <Input id="myInput" label="My input" value={value} onChange={setValue} />
          </ComponentViewer>

          <PropsTable
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
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default InputPage;
