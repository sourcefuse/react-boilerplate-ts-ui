import Slider, {SliderProps} from '@mui/material/Slider';
import * as React from 'react';

const GenericSlider: React.FC<SliderProps> = (props) => {
  return <Slider {...props} />;
};

export default React.memo(GenericSlider);
