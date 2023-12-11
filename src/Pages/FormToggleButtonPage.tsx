import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import Form from 'Components/Forms/Form';
import FormToggleButton from 'Components/Forms/FormToggleButton';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const submitHandler = () => null;

const FormToggleButtonPage = () => {
  const initialValues = {
    skills: [],
  };

  const options = [
    {label: 'Frontend', value: 'frontend'},
    {label: 'Backend', value: 'backend'},
    {label: 'Devops', value: 'devops'},
  ];
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper
          title="FormToggleButton"
          description="FormToggleButton component provides with a hassle free way to manage state of your formik form toggle buttons. This component uses Formik internally to manage state for your toggle buttons."
        >
          <ComponentViewer
            title="Default FormToggleButton"
            code={`import Form from 'Components/Forms/Form';
import FormCheckbox from 'Components/Forms/FormToggleButton';

const FormToggleButtonDemo = () => {
  const initialValues = {
    skills: [],
};

const options = [
    {label: 'Frontend', value: 'frontend'},
    {label: 'Backend', value: 'backend'},
    {label: 'Devops', value: 'devops'},
];
return (
     <Form initialValues={initialValues} onSubmit={() => {}}>
        <FormToggleButton id="skills" label="skills" options={options} />
    </Form>
        );
};

export default FormToggleButtonDemo;
            `}
          >
            <Form initialValues={initialValues} onSubmit={submitHandler}>
              <FormToggleButton id="skills" label="skills" options={options} />
            </Form>
          </ComponentViewer>
          <ComponentViewer
            title="Single Select FormToggleButton"
            code={`import Form from 'Components/Forms/Form';
import FormCheckbox from 'Components/Forms/FormToggleButton';

const FormToggleButtonDemo = () => {
  const initialValues = {
    skills: [],
};

const options = [
    {label: 'Frontend', value: 'frontend'},
    {label: 'Backend', value: 'backend'},
    {label: 'Devops', value: 'devops'},
];
return (
     <Form initialValues={initialValues} onSubmit={() => {}}>
        <FormToggleButton id="skills" label="skills" singleSelect options={options} />
    </Form>
        );
};

export default FormToggleButtonDemo;
            `}
          >
            <Form initialValues={initialValues} onSubmit={submitHandler}>
              <FormToggleButton id="skills" label="skills" options={options} singleSelect />
            </Form>
          </ComponentViewer>

          <PropsTable
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for checkbox'},
              {name: 'label', type: 'string', desc: 'Label for checkbox'},
              {name: 'options', type: '{label:string, value:any}', desc: 'Options for checkbox'},
              {name: 'value', type: 'string | number'},
              {name: 'disabled', type: 'bool', defaultVal: 'false'},
              {name: 'helperText', type: 'string', desc: 'Display text below checkbox'},
              {name: 'singleSelect', type: 'bool', defaultVal: 'false', desc: 'If only one value needs to be selected'},
              {name: 'row', type: 'bool', defaultVal: 'false', desc: 'Display checkbox horizontally'},
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
              {
                name: 'other props',
                type: 'SwitchProps',
                desc: 'Props of MUI switch are also available.',
              },
            ]}
          />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default FormToggleButtonPage;
