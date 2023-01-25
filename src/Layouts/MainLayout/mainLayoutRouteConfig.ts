import {lazy} from 'react';

const Home = lazy(() => import('Pages/Home'));
const Form = lazy(() => import('Pages/Form/Form'));
const InputPage = lazy(() => import('Pages/InputPage'));
const TransferListPage = lazy(() => import('Pages/TransferListPage'));
const DropdownPage = lazy(() => import('Pages/DropdownPage'));
const RadioButtonPage = lazy(() => import('Pages/RadioButtonPage'));
const ToggleButtonPage = lazy(() => import('Pages/ToggleButtonPage'));
const CheckboxPage = lazy(() => import('Pages/CheckboxPage'));
const ButtonPage = lazy(() => import('Pages/ButtonPage'));
const ButtonGroup = lazy(() => import('Pages/ButtonGroup'));
const Subscription = lazy(() => import('Pages/Subscription'));
const Order = lazy(() => import('Pages/Order'));
const Checkout = lazy(() => import('Pages/Checkout/Checkout'));
const StepperTabPage = lazy(() => import('Pages/StepperTabPage'));
const DatePickerPage = lazy(() => import('Pages/DatePickerPage'));
const ApiCall = lazy(() => import('Pages/ApiCall/ApiCall'));
const RatingPage = lazy(() => import('Pages/RatingPage'));
const SliderPage = lazy(() => import('Pages/SliderPage'));
const FABPage = lazy(() => import('Pages/FAB'));
const Components = lazy(() => import('Pages/Components'));
const FormInputPage = lazy(() => import('Pages/FormInputPage'));
const FormCheckboxPage = lazy(() => import('Pages/FormCheckboxPage'));
const FormSliderPage = lazy(() => import('Pages/FormSliderPage'));
const FormDatePickerPage = lazy(() => import('Pages/FormDatePickerPage'));
const FormDateTimePickerPage = lazy(() => import('Pages/FormDateTimePickerPage'));
const FormRadioButtonPage = lazy(() => import('Pages/FormRadioButtonPage'));
const FormDropdownPage = lazy(() => import('Pages/FormDropdownPage'));
const FormInputPage = lazy(() => import('Pages/FormInputPage'));

const mainLayoutRouteConfig = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/components',
    component: Components,
  },
  {
    path: '/components/input',
    component: InputPage,
  },
  {
    path: '/components/transfer-list',
    component: TransferListPage,
  },
  {
    path: '/components/dropdown-autocomplete',
    component: DropdownPage,
  },
  {
    path: '/components/radio-button',
    component: RadioButtonPage,
  },
  {
    path: '/components/toggle-button',
    component: ToggleButtonPage,
  },
  {
    path: '/components/checkbox',
    component: CheckboxPage,
  },
  {
    path: '/components/button',
    component: ButtonPage,
  },
  {
    path: '/components/group-button',
    component: ButtonGroup,
  },
  {
    path: '/components/form',
    component: Form,
  },
  {
    path: '/components/form/form-input',
    component: FormInputPage,
  },
  {
    path: '/components/form/form-checkbox',
    component: FormCheckboxPage,
  },
  {
    path: '/components/form/form-slider',
    component: FormSliderPage,
  },
  {
    path: '/components/form/form-date-picker',
    component: FormDatePickerPage,
  },
  {
    path: '/components/form/form-date-time-picker',
    component: FormDateTimePickerPage,
  },
  {
    path: '/components/form/form-radio-button',
    component: FormRadioButtonPage,
  },
  {
    path: '/components/form/form-dropdown',
    component: FormDropdownPage,
  },
  {
    path: '/components/form/form-input',
    component: FormInputPage,
  },
  {
    path: '/components/stepper-tab',
    component: StepperTabPage,
  },
  {
    path: '/components/date-picker',
    component: DatePickerPage,
  },
  {
    path: '/components/api-call',
    component: ApiCall,
  },
  {
    path: '/sourceloop/payment/subscription',
    component: Subscription,
  },
  {
    path: '/sourceloop/payment/order',
    component: Order,
  },
  {
    path: '/sourceloop/payment/checkout',
    component: Checkout,
  },
  {
    path: '/components/rating',
    component: RatingPage,
  },
  {
    path: '/components/slider',
    component: SliderPage,
  },
  {
    path: '/components/floating-action-button',
    component: FABPage,
  },
];

export default mainLayoutRouteConfig;
