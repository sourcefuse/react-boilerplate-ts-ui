import AddIcon from '@mui/icons-material/Add';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import FAB from 'Components/FloatingActionButton';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import * as React from 'react';

const InputPage = () => {
  return (
    <PagePaper title="Floating Action Button">
      <ComponentPaper>
        <FAB color="primary" aria-label="add">
          <AddIcon />
        </FAB>
      </ComponentPaper>
      <CodeBlock
        fullCode={`
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>`}
        initial={`
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>`}
      />
      <Table
        data={[
          {
            name: 'children',
            type: 'node',
            defaultVal: '',
            desc: 'The content of the component.',
          },
          {
            name: 'classes',
            type: 'object',
            defaultVal: '',
            desc: 'Override or extend the styles applied to the component. See CSS API below for more details.',
          },
          {
            name: 'color',
            type: "'default'\n| 'error'\n| 'info'\n| 'inherit'\n| 'primary'\n| 'secondary'\n| 'success'\n| 'warning'",
            defaultVal: "'default'",
            desc: 'The color of the component. It supports those theme colors that make sense for this component.',
          },
          {
            name: 'component',
            type: 'elementType',
            defaultVal: '',
            desc: 'The component used for the root node. Either a string to use a HTML element or a component.',
          },
          {
            name: 'disabled',
            type: 'bool',
            defaultVal: 'false',
            desc: 'If true, the component is disabled.',
          },
          {
            name: 'disableFocusRipple',
            type: 'bool',
            defaultVal: 'false',
            desc: 'If true, the keyboard focus ripple is disabled.',
          },
          {
            name: 'disableRipple',
            type: 'bool',
            defaultVal: 'false',
            desc: 'If true, the ripple effect is disabled.',
          },
          {
            name: 'href',
            type: 'string',
            defaultVal: '',
            desc: 'The URL to link to when the button is clicked. If defined, an a element will be used as the root node.',
          },
          {
            name: 'size',
            type: "'small'\n| 'medium'\n| 'large'\n| string",
            defaultVal: "'large'",
            desc: 'The size of the component. small is equivalent to the dense button styling.',
          },
          {
            name: 'sx',
            type: 'Array<func\n| object\n| bool>\n| func\n| object',
            defaultVal: '',
            desc: 'The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.',
          },
          {
            name: 'variant',
            type: "'circular'\n| 'extended'\n| string",
            defaultVal: "'circular'",
            desc: 'The variant to use.',
          },
        ]}
      />
    </PagePaper>
  );
};

export default InputPage;
