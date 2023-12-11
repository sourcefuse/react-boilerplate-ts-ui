import {Box, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import Rating from 'Components/Rating';
import PropsTable from 'Components/PropsTable';
import React from 'react';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const RatingPage = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper title="Rating">
          <ComponentViewer
            title="Default Button"
            code={`import PagePaper from "Components/PagePaper";
import Rating from "Components/Rating";
import React from "react";

const RatingPage = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover]= React.useState(-1);
  return (
    <PagePaper title="Rating">
      <Rating
        name="hover-feedback"
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        precision={0.5}
        hover={hover}
        value={value}
        label
      />
    </PagePaper>
  );
};

export default RatingPage;`}
          >
            <Rating
              name="hover-feedback"
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              onChange={(event, newValue) => {
                if (newValue) setValue(newValue);
              }}
              precision={0.5}
              hover={hover}
              value={value}
              label
            />
          </ComponentViewer>

          <PropsTable
            data={[
              {
                name: 'defaultValue',
                type: 'number',
                desc: 'The default value. Use when the component is not controlled.',
              },
              {name: 'disabled', type: 'bool', defaultVal: 'false', desc: 'If true, the component is disabled.'},
              {
                name: 'label',
                type: 'bool',
                desc: 'Display label, If label falg is true then you can add labels for rating',
              },
              {
                name: 'labels',
                type: 'object',
                defaultVal: `{ 0.5: 'Useless', 1: 'Useless+', 1.5: 'Poor', 2: 'Poor+', 2.5: 'Ok', 3: 'Ok+', 3.5: 'Good', 4: 'Good+', 4.5: 'Excellent', 5: 'Excellent+', }`,
                desc: 'Display label crosponding of every rating value',
              },
              {name: 'value', type: 'string | number'},
              {
                name: 'emptyIcon',
                type: 'node',
                defaultVal: '<StarBorder fontSize="inherit" />',
                desc: 'The icon to display when empty.',
              },
              {
                name: 'style',
                type: 'bool',
                defaultVal: 'false',
                desc: 'If style flag is true then you can add custom style in component',
              },
              {
                name: 'hover',
                type: 'string',
                desc: ' display a label on hover to help the user pick the correct rating value.',
              },
              {
                name: 'emptyLabelText',
                type: 'node',
                defaultVal: 'Empty',
                desc: 'The label read when the rating input is empty.',
              },
              {
                name: 'boxSx',
                type: 'object',
                defaultVal: ` {
                  '& .MuiRating-iconFilled': {
                    color: '#3ea969',
                  },
                  '& .MuiRating-iconHover': {
                    color: '#3ea969',
                  },
                 }`,
                desc: 'To add custom style in rating component ',
              },
              {
                name: 'style',
                type: 'node',
                defaultVal: 'Empty',
                desc: 'The label read when the rating input is empty.',
              },
              {
                name: 'highlightSelectedOnly',
                type: 'bool',
                defaultVal: 'false',
                desc: 'If true, only the selected icon will be highlighted.',
              },
              {
                name: 'icon',
                type: 'node',
                defaultVal: '	<Star fontSize="inherit" />',
                desc: 'The icon to display.',
              },
              {
                name: 'IconContainerComponent',
                type: 'elementType',
                defaultVal: '	const { value, ...other } = props; return <span {...other} />; }',
                desc: 'The component containing the icon.',
              },
              {
                name: 'max',
                type: 'number',
                defaultVal: '	5',
                desc: 'Maximum rating.',
              },
              {
                name: 'name',
                type: 'string',
                desc: 'The name attribute of the radio input elements. This input name should be unique within the page. Being unique within a form is insufficient since the name is used to generated IDs.',
              },
              {
                name: 'precision',
                type: 'number',
                defaultVal: '1',
                desc: 'The minimum increment value change allowed',
              },
              {
                name: 'size',
                type: "size	'small'| 'medium'| 'large'| string",
                defaultVal: 'medium',
                desc: 'The size of the component.',
              },
              {
                name: 'readOnly',
                type: 'bool',
                defaultVal: 'false',
                desc: 'Removes all hover effects and pointer events.',
              },
              {
                name: 'sx',
                type: 'sx	Array<func| object| bool>| func| object',
                desc: 'The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.',
              },
              {
                name: 'value',
                type: 'number',
                desc: 'The rating value.',
              },
              {
                name: 'onChange',
                type: 'func',
                desc: (
                  <>
                    <Typography sx={{fontWeight: 'bold'}}>Signature:</Typography>
                    <Typography>function(event, value) =&gt; void</Typography>
                    <br />
                    <Typography>event: The event source of the callback.</Typography>
                    <br />
                    <Typography>value: The new value.</Typography>
                  </>
                ),
              },
              {
                name: 'onChangeActive',
                type: 'func',
                desc: (
                  <>
                    <Typography sx={{fontWeight: 'bold'}}>Signature:</Typography>
                    <Typography>function(event, value) =&gt; void</Typography>
                    <br />
                    <Typography>event: The event source of the callback.</Typography>
                    <br />
                    <Typography>value: The new value.</Typography>
                  </>
                ),
              },
              {
                name: 'getLabelText	',
                type: 'func',
                // defaultVal: "function defaultLabelText(value) { return ${value} Star${value !== 1 ? 's' : ''}`; }",
                desc: (
                  <>
                    <Typography sx={{fontWeight: 'bold'}}>Signature:</Typography>
                    <Typography>fn(value) =&gt; string</Typography>
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

export default RatingPage;
