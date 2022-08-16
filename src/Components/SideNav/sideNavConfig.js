import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const sideNavConfig = [
  {
    label: 'Menu',
    type: 'title',
    visible: true,
  },
  {
    type: 'divider',
    visible: true,
  },
  {
    label: 'home',
    link: '/home',
    icon: <DashboardIcon />,
    visible: true,
  },
  {
    label: 'who am i',
    link: '/who-am-i',
    icon: <PeopleIcon />,
    visible: true,
  },
  {
    label: 'Sourceloop Examples',
    link: '/sourceloop',
    icon: <AllInclusiveIcon />,
    visible: true,
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
        label: 'Inputs',
        type: 'title',
        visible: true,
      },
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
        visible: true,
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
        label: 'FloatingActionButton',
        link: '/components/floatingActionButton',
        visible: true,
      },
      {
        label: 'form',
        link: '/components/form',
        visible: true,
      },
      {
        label: 'Data',
        type: 'title',
        visible: true,
      },
      {
        label: 'API call',
        link: '/components/api-call',
        visible: true,
      },
    ],
  },
];

export default sideNavConfig;
