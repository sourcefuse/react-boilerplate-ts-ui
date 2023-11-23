import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import {ReactNode} from 'react';

export interface SideNavDividerType {
  type: 'divider';
  visible: boolean;
}

export interface SideNavTitleType extends Omit<SideNavDividerType, 'type'> {
  label: string;
  type: 'title';
}

export interface SideNavConfig extends Omit<SideNavDividerType, 'type'>, Omit<SideNavTitleType, 'type'> {
  type?: 'title' | 'divider';
  link?: string;
  icon?: ReactNode;
  children?: (SideNavConfig | SideNavTitleType)[];
}

const sideNavConfig: SideNavConfig[] = [
  {
    label: 'home',
    link: '/home',
    icon: <HomeOutlinedIcon />,
    visible: true,
  },
  {
    label: 'Sourceloop Examples',
    link: '/sourceloop',
    icon: <AllInclusiveIcon />,
    visible: false,
    children: [
      {
        label: 'Payment',
        link: '/sourceloop/payment',
        visible: true,
        children: [
          {
            label: 'Subscription',
            link: '/sourceloop/payment/subscription',
            visible: true,
          },
          {
            label: 'Order',
            link: '/sourceloop/payment/order',
            visible: true,
          },
        ],
      },
    ],
  },
  {
    label: 'Components',
    icon: <ToggleOffIcon />,
    link: '/components',
    visible: true,
    children: [
      {
        label: 'Input',
        link: '/components/input',
        visible: true,
      },
      {
        label: 'Transfer List',
        link: '/components/transfer-list',
        visible: true,
      },
      {
        label: 'Dropdown/Autocomplete',
        link: '/components/dropdown-autocomplete',
        visible: true,
      },
      {
        label: 'Radio Button',
        link: '/components/radio-button',
        visible: true,
      },
      {
        label: 'Toggle Button',
        link: '/components/toggle-button',
        visible: true,
      },
      {
        label: 'Checkbox',
        link: '/components/checkbox',
        visible: true,
      },
      {
        label: 'Button',
        link: '/components/button',
        visible: true,
      },
      {
        label: 'Button Group',
        link: '/components/group-button',
        visible: false,
      },
      {
        label: 'Stepper tab',
        link: '/components/stepper-tab',
        visible: true,
      },
      {
        label: 'DatePicker',
        link: '/components/date-picker',
        visible: true,
      },
      {
        label: 'Rating',
        link: '/components/rating',
        visible: true,
      },
      {
        label: 'Slider',
        link: '/components/slider',
        visible: true,
      },
      {
        label: 'Floating Action Button',
        link: '/components/floating-action-button',
        visible: true,
      },
      {
        label: 'Table',
        link: '/components/table',
        visible: true,
      },
      {
        label: 'form',
        link: '/components/form',
        visible: true,
        children: [
          {
            label: 'FormInput',
            link: '/components/form/form-input',
            visible: true,
          },
          {
            label: 'FormSlider',
            link: '/components/form/form-slider',
            visible: true,
          },
          {
            label: 'FormDatePicker',
            link: '/components/form/form-date-picker',
            visible: true,
          },
          {
            label: 'FormDateTimePicker',
            link: '/components/form/form-date-time-picker',
            visible: true,
          },
          {
            label: 'FormRadioButton',
            link: '/components/form/form-radio-button',
            visible: true,
          },
          {
            label: 'FormDropdown',
            link: '/components/form/form-dropdown',
            visible: true,
          },
          {
            label: 'FormCheckbox',
            link: '/components/form/form-checkbox',
            visible: true,
          },
          {
            label: 'FormToggleButton',
            link: '/components/form/form-toggle-button',
            visible: true,
          },
        ],
      },
      {
        label: 'Data',
        type: 'title',
        visible: false,
      },
      {
        label: 'API call',
        link: '/components/api-call',
        visible: false,
      },
    ],
  },
  {
    label: 'Logs',
    link: '/audit-logs',
    icon: <DataObjectOutlinedIcon />,
    visible: true,
  },
];

export default sideNavConfig;
