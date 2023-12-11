import AddIcon from '@mui/icons-material/Add';
import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import Fab from 'Components/FloatingActionButton';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const FloatingActionButtonPage = () => {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper title="Floating Action Button">
          <ComponentViewer
            title="Default Button"
            code={`import AddIcon from "@mui/icons-material/Add";
import Fab from "Components/FloatingActionButton";
import PagePaper from "Components/PagePaper";
import React from "react";

const FloatingActionButtonPage = () => {
  return (
    <PagePaper title="Floating Action Button">
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </PagePaper>
  );
};

export default FloatingActionButtonPage;`}
          >
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </ComponentViewer>
          <PropsTable
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
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default FloatingActionButtonPage;
