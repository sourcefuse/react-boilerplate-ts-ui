import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import Form from 'Components/Forms/Form';
import FormDropdown from 'Components/Forms/FormDropdown';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const submitHandler = () => null;

const options = [
  {label: 'Mr', value: 'mr'},
  {label: 'Mrs', value: 'mrs'},
  {label: 'Ms', value: 'ms'},
];

const FormDropdownPage = () => {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper
          title="FormDropdown"
          description="FormDropdown component provides with a hassle free way to manage state of your formik sliders. This component uses Formik internally to manage state for your sliders."
        >
          <ComponentViewer
            title="Default FormDropdown"
            code={`
        import Form from 'Components/Forms/Form';
        import FormSlider from 'Components/Forms/FormDropdown';

            <Form initialValues={{salutation: null}} onSubmit={() => {}}>
              <FormDropdown id="salutation" label="Salutation" options={options} />
            </Form>
                `}
          >
            <Box sx={{width: 200}}>
              <Form initialValues={{salutation: null}} onSubmit={submitHandler}>
                <FormDropdown id="salutation" label="Salutation" options={options} />
              </Form>
            </Box>
          </ComponentViewer>

          <PropsTable
            data={[
              {name: 'id', type: 'string', desc: 'Unique id for dropdown field'},
              {name: 'label', type: 'string', desc: 'Label for dropdown field'},
              {name: 'options', type: '{label:string, value:any}', desc: 'Options for dropdown field'},
              {name: 'value', type: 'string | number'},
              {name: 'disabled', type: 'bool', defaultVal: 'false'},
              {name: 'helperText', type: 'string', desc: 'Display text below dropdown field'},
              {name: 'enableAutoComplete', type: 'bool', defaultVal: false, desc: 'Enable searching in the dropdown'},
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
      <ScreenAwareTOC />
    </Stack>
  );
};

export default FormDropdownPage;
