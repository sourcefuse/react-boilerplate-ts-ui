import {Box, Stack, Typography} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import TableOfContent from 'Components/TableOfContent/TableOfContent';
import Form from 'Components/Forms/Form';
import FormRadioButton from 'Components/Forms/FormRadioButton';

const submitHandler = () => {
  return null;
};

const FormRadioButtonPage = () => {
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
      <Box sx={{flexGrow: 1}}>
        <PagePaper
          title="FormRadioButton"
          description="FormRadioButton component provides with a hassle free way to manage state of your formik form radio button group. This component uses Formik internally to manage state for your radio groups."
        >
          <ComponentViewer
            title="Default Radio Button Group"
            code={` 
            import Form from 'Components/Forms/Form';
            import FormRadioButton from 'Components/Forms/FormRadioButton';
            
            const FormRadioButtonDemo = () => {
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
                  <FormRadioButton id="skills" label="skills" options={options} />
                </Form>
              );
            };
            
            export default FormRadioButtonDemo;
            `}
          >
            <Form initialValues={initialValues} onSubmit={submitHandler}>
              <FormRadioButton id="skills" label="skills" options={options} />
            </Form>
          </ComponentViewer>
          <ComponentViewer
            title="Horizontal Radio Button Group"
            code={`
            import Form from 'Components/Forms/Form';
            import FormRadioButton from 'Components/Forms/FormRadioButton';
            
            const FormRadioButtonDemo = () => {
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
                  <FormRadioButton id="skills" label="skills" options={options} />
                </Form>
              );
            };
            
            export default FormRadioButtonDemo;
            `}
          >
            <Form initialValues={initialValues} onSubmit={submitHandler}>
              <FormRadioButton id="skills" label="skills" row options={options} />
            </Form>
          </ComponentViewer>

          <Table
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for Radio Group'},
              {name: 'label', type: 'string', desc: 'Label for Radio Group'},
              {name: 'options', type: '{label:string, value:string}', desc: 'Options for Radio Group'},
              {
                name: 'value',
                type: 'any',
                desc: 'Value of the selected radio button. The DOM API casts this to a string',
              },
              {name: 'disabled', type: 'bool', defaultVal: 'false'},
              {name: 'helperText', type: 'string', desc: 'Display text below radio group'},
              {name: 'singleSelect', type: 'bool', defaultVal: 'false', desc: 'If only one value needs to be selected'},
              {name: 'row', type: 'bool', defaultVal: 'false', desc: 'Display checkbox horizontally'},
              {
                name: 'onChange',
                type: 'func',
                desc: (
                  <>
                    <Typography>Callback fired when the value is changed</Typography>
                    <br />
                    <Typography sx={{fontWeight: 'bold'}}>Signature:</Typography>
                    <Typography>fn(val: any) =&gt; void</Typography>
                  </>
                ),
              },
              {
                name: 'children',
                type: 'node',
                desc: 'The content of the component.',
              },
              {
                name: 'other props',
                type: 'FormGroupProps',
                desc: 'Props of MUI FormGroup are also available.',
              },
            ]}
          />
        </PagePaper>
      </Box>
      <TableOfContent />
    </Stack>
  );
};

export default FormRadioButtonPage;
