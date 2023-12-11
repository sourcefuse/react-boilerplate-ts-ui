import {FormHelperText, Slider as MuiSlider, SliderProps as MuiSliderProps, Typography} from '@mui/material';
import React, {memo, useCallback} from 'react';

export interface SliderProps extends Omit<MuiSliderProps, 'onChange'> {
  id?: string;
  label?: string;
  disabled?: boolean;
  onChange?: (val: number | number[]) => void;
  minDistance?: number;
  errorMessage?: string;
  helperText?: string;
}

const Slider: React.FC<SliderProps> = ({
  id,
  label,
  disabled,
  onChange,
  minDistance,
  errorMessage,
  helperText,
  ...restProps
}) => {
  const MAX_VALUE = 100;
  const isError = !!errorMessage;
  const handleChange = useCallback(
    (_event: Event, newValue: number | number[], activeThumb: number) => {
      if (!onChange) return;
      if (!Array.isArray(newValue)) {
        onChange(newValue);
      } else if (minDistance && newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
          const clamped = Math.min(newValue[0], MAX_VALUE - minDistance);
          onChange([clamped, clamped + minDistance]);
        } else {
          const clamped = Math.max(newValue[1], minDistance);
          onChange([clamped - minDistance, clamped]);
        }
      } else {
        onChange(newValue);
      }
    },
    [minDistance, onChange],
  );

  return (
    <>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <MuiSlider id={id} onChange={handleChange} {...restProps} />
      {(isError || helperText) && <FormHelperText>{isError ? errorMessage : helperText}</FormHelperText>}
    </>
  );
};

export default memo(Slider);
