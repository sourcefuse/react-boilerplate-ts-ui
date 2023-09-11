import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import Form from 'Components/Forms/Form';
import FormCheckbox from 'Components/Forms/FormCheckbox';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const submitHandler = () => null;

const FormCheckboxPage = () => {
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
          title="FormCheckbox"
          description="FormCheckbox component provides with a hassle free way to manage state of your formik form checkboxes. This component uses Formik internally to manage state for your checkboxes."
        >
          <ComponentViewer
            title="Default Checkbox"
            code={`
            import Form from 'Components/Forms/Form';
            import FormCheckbox from 'Components/Forms/FormCheckbox';

            const FormCheckboxDemo = () => {
              const initialValues = {
                skills: [],
              };

              const submitHandler = () => {};

              const options = [
                {label: 'Frontend', value: 'frontend'},
                {label: 'Backend', value: 'backend'},
                {label: 'Devops', value: 'devops'},
              ];
              return (
                <Form initialValues={initialValues} onSubmit={submitHandler}>
                  <FormCheckbox id="skills" label="skills" options={options} />
                </Form>
              );
            };

            export default FormCheckboxDemo;
            `}
          >
            <Form initialValues={initialValues} onSubmit={submitHandler}>
              <FormCheckbox id="skills" label="skills" options={options} />
            </Form>
          </ComponentViewer>
          <ComponentViewer
            title="Single Select Checkbox"
            code={`
            import Form from 'Components/Forms/Form';
            import FormCheckbox from 'Components/Forms/FormCheckbox';

            const FormCheckboxDemo = () => {
              const initialValues = {
                skills: [],
              };

              const submitHandler = () => {};

              const options = [
                {label: 'Frontend', value: 'frontend'},
                {label: 'Backend', value: 'backend'},
                {label: 'Devops', value: 'devops'},
              ];
              return (
                <Form initialValues={initialValues} onSubmit={submitHandler}>
                  <FormCheckbox id="skills" label="skills" options={options} singleSelect />
                </Form>
              );
            };

            export default FormCheckboxDemo;
            `}
          >
            <Form initialValues={initialValues} onSubmit={submitHandler}>
              <FormCheckbox id="skills" label="skills" options={options} singleSelect />
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
                type: 'CheckboxProps',
                desc: 'Props of MUI checkbox are also available.',
              },
            ]}
          />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default FormCheckboxPage;
