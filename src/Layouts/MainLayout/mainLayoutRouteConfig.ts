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

const mainLayoutRouteConfig = [
  {
    path: '/home',
    component: Home,
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
    path: '//components/rating',
    component: RatingPage,
  },
  {
    path: '/components/slider',
    component: SliderPage,
  },
  {
    path: '/components/floatingActionButton',
    component: FABPage,
  },
];

export default mainLayoutRouteConfig;
