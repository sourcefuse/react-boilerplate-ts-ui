import SearchIcon from '@mui/icons-material/Search';
import {Box, IconButton, InputAdornment, Stack, Typography} from '@mui/material';
import Button from 'Components/Button';
import ComponentViewer from 'Components/ComponentViewer';
import Form from 'Components/Forms/Form';
import FormInput from 'Components/Forms/FormInput';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import * as yup from 'yup';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const submitHandler = () => null;

const FormInputPage = () => {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper
          title="FormInput"
          description="FormInput component provides with a hassle free way to manage state of your formik form inputs. This component uses Formik internally to manage state for your input fields."
        >
          <ComponentViewer
            title="Default FormInput"
            code={`
        import Form from 'Components/Forms/Form';
        import FormInput from 'Components/Forms/FormInput';
        import Button from 'Components/Button';

            <Form
              initialValues={{name: ''}}
              validationSchema={yup.object({name: yup.string().required('Required Field')})}
              onSubmit={() => {}}
            >
              <FormInput id="name" label="name" />
              <Button type="submit">Submit</Button>
            </Form>
                `}
          >
            <Form
              initialValues={{name: ''}}
              validationSchema={yup.object({name: yup.string().required('Required Field')})}
              onSubmit={submitHandler}
            >
              <FormInput id="name" label="name" />
              <Button type="submit">Submit</Button>
            </Form>
          </ComponentViewer>

          <ComponentViewer
            title="FormInput with icon"
            code={`
        import Form from 'Components/Forms/Form';
        import FormInput from 'Components/Forms/FormInput';
        import Button from 'Components/Button';

            <Form
              initialValues={{name: ''}}
              validationSchema={yup.object({name: yup.string().required('Required Field')})}
              onSubmit={() => {}}
            >
              <FormInput id="name" label="name" />
              <Button type="submit">Submit</Button>
            </Form>
                `}
          >
            <Form initialValues={{searchQuery: ''}} onSubmit={submitHandler}>
              <FormInput
                id="searchQuery"
                label="Search"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="search" edge="end">
                      <SearchIcon></SearchIcon>
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Button type="submit">Search</Button>
            </Form>
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

export default FormInputPage;
