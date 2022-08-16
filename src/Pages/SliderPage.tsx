import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import Slider from 'Components/Slider';
import Table from 'Components/Table';
import * as React from 'react';

const InputPage = () => {
  return (
    <PagePaper title="Slider">
      <ComponentPaper>
        <Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto" />
      </ComponentPaper>
      <CodeBlock fullCode={``} initial={``} />
      <Table
        data={[
          {
            name: 'aria-label',
            type: 'string',
            defaultVal: '',
            desc: 'The label of the slider.',
          },
          {
            name: 'aria-labelledby',
            type: 'string',
            defaultVal: '',
            desc: 'The id of the element containing a label for the slider.',
          },
          {
            name: 'aria-valuetext',
            type: 'string',
            defaultVal: '',
            desc: 'A string value that provides a user-friendly name for the current value of the slider.',
          },
          {
            name: 'classes',
            type: 'object',
            defaultVal: '',
            desc: 'Override or extend the styles applied to the component. See CSS API below for more details.',
          },
          {
            name: 'color',
            type: "'primary'\n| 'secondary'\n| string",
            defaultVal: "'primary'",
            desc: 'The color of the component. It supports those theme colors that make sense for this component.',
          },
          {
            name: 'components',
            type: '{ Input?: elementType, Mark?: elementType, MarkLabel?: elementType, Rail?: elementType, Root?: elementType, Thumb?: elementType, Track?: elementType, ValueLabel?: elementType }',
            defaultVal: '{}',
            desc: 'The components used for each slot inside the Slider. Either a string to use a HTML element or a component.',
          },
          {
            name: 'componentsProps',
            type: "{ input?: object, mark?: object, markLabel?: object, rail?: object, root?: object, thumb?: object, track?: object, valueLabel?: { className?: string, components?: { Root?: elementType }, style?: object, value?: Array<number>\n| number, valueLabelDisplay?: 'auto'\n| 'off'\n| 'on' } }",
            defaultVal: '{}',
            desc: 'The props used for each slot inside the Slider.',
          },
          {
            name: 'defaultValue',
            type: 'Array<number>\n| number',
            defaultVal: '',
            desc: 'The default value. Use when the component is not controlled.',
          },
          {
            name: 'disabled',
            type: 'bool',
            defaultVal: 'false',
            desc: 'If true, the component is disabled.',
          },
          {
            name: 'disableSwap',
            type: 'bool',
            defaultVal: 'false',
            desc: "If true, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.",
          },
          {
            name: 'getAriaLabel',
            type: 'func',
            defaultVal: '',
            desc: "Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider. This is important for screen reader users.\n\nSignature:\nfunction(index: number) => string\nindex: The thumb label's index to format.",
          },
          {
            name: 'getAriaValueText',
            type: 'func',
            defaultVal: '',
            desc: "Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider. This is important for screen reader users.\n\nSignature:\nfunction(value: number, index: number) => string\nvalue: The thumb label's value to format.\nindex: The thumb label's index to format.",
          },
          {
            name: 'isRtl',
            type: 'bool',
            defaultVal: 'false',
            desc: 'Indicates whether the theme context has rtl direction. It is set automatically.',
          },
          {
            name: 'marks',
            type: 'Array<{ label?: node, value: number }>\n| bool',
            defaultVal: 'false',
            desc: 'Marks indicate predetermined values to which the user can move the slider. If true the marks are spaced according the value of the step prop. If an array, it should contain objects with value and an optional label keys.',
          },
          {
            name: 'max',
            type: 'number',
            defaultVal: '100',
            desc: 'The maximum allowed value of the slider. Should not be equal to min.',
          },
          {
            name: 'min',
            type: 'number',
            defaultVal: '0',
            desc: 'The minimum allowed value of the slider. Should not be equal to max.',
          },
          {
            name: 'name',
            type: 'string',
            defaultVal: '',
            desc: 'Name attribute of the hidden input element.',
          },
          {
            name: 'onChange',
            type: 'func',
            defaultVal: '',
            desc: "Callback function that is fired when the slider's value changed.\n\nSignature:\nfunction(event: Event, value: number | Array<number>, activeThumb: number) => void\nevent: The event source of the callback. You can pull out the new value by accessing event.target.value (any). Warning: This is a generic event not a change event.\nvalue: The new value.\nactiveThumb: Index of the currently moved thumb.",
          },
          {
            name: 'onChangeCommitted',
            type: 'func',
            defaultVal: '',
            desc: 'Callback function that is fired when the mouseup is triggered.\n\nSignature:\nfunction(event: React.SyntheticEvent | Event, value: number | Array<number>) => void\nevent: The event source of the callback. Warning: This is a generic event not a change event.\nvalue: The new value.',
          },
          {
            name: 'orientation',
            type: "'horizontal'\n| 'vertical'",
            defaultVal: "'horizontal'",
            desc: 'The component orientation.',
          },
          {
            name: 'scale',
            type: 'func',
            defaultVal: '(x) => x',
            desc: 'A transformation function, to change the scale of the slider.',
          },
          {
            name: 'size',
            type: "'small'\n| 'medium'\n| string",
            defaultVal: "'medium'",
            desc: 'The size of the slider.',
          },
          {
            name: 'step',
            type: 'number',
            defaultVal: '1',
            desc: 'The granularity with which the slider can step through values. (A "discrete" slider.) The min prop serves as the origin for the valid values. We recommend (max - min) to be evenly divisible by the step.\nWhen step is null, the thumb can only be slid onto marks provided with the marks prop.',
          },
          {
            name: 'sx',
            type: 'Array<func\n| object\n| bool>\n| func\n| object',
            defaultVal: '',
            desc: 'The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.',
          },
          {
            name: 'tabIndex',
            type: 'number',
            defaultVal: '',
            desc: 'Tab index attribute of the hidden input element.',
          },
          {
            name: 'track',
            type: "'inverted'\n| 'normal'\n| false",
            defaultVal: "'normal'",
            desc: 'The track presentation:\n- normal the track will render a bar representing the slider value. - inverted the track will render a bar representing the remaining slider value. - false the track will render without a bar.',
          },
          {
            name: 'value',
            type: 'Array<number>\n| number',
            defaultVal: '',
            desc: 'The value of the slider. For ranged sliders, provide an array with two values.',
          },
          {
            name: 'valueLabelDisplay',
            type: "'auto'\n| 'off'\n| 'on'",
            defaultVal: "'off'",
            desc: 'Controls when the value label is displayed:\n- auto the value label will display when the thumb is hovered or focused. - on will display persistently. - off will never display.',
          },
          {
            name: 'valueLabelFormat',
            type: 'func\n| string',
            defaultVal: '(x) => x',
            desc: "The format function the value label's value.\nWhen a function is provided, it should have the following signature:\n- {number} value The value label's value to format - {number} index The value label's index to format",
          },
        ]}
      />
    </PagePaper>
  );
};

export default InputPage;
