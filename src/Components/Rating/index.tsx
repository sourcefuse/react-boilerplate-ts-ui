import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating, {RatingProps} from '@mui/material/Rating';
import {styled} from '@mui/material/styles';
import {SxProps} from '@mui/system';
import * as React from 'react';
interface Props extends RatingProps {
  boxSx?: SxProps;
  styled?: boolean;
  label?: boolean;
  style?: Object | any;
  hover?: string | number;
  labels?: Object | any;
}

const Style = (st: any) => {
  return styled(Rating)(
    st || {
      '& .MuiRating-iconFilled': {
        color: '#3ea969',
      },
      '& .MuiRating-iconHover': {
        color: '#3ea969',
      },
    },
  );
};

const HoverRating: React.FC<Props> = (props) => {
  const {
    boxSx,
    styled,
    label,
    style,
    value = -1,
    hover = -1,
    labels = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    },
    ...rest
  } = props;
  if (styled) {
    const StyledRating: any = Style(style);
    return (
      <Box
        sx={
          boxSx || {
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }
        }
      >
        {' '}
        <StyledRating
          value={value}
          {...{
            getLabelText: (value) => `${value} Heart${value !== 1 ? 's' : ''}`,
            icon: <FavoriteIcon fontSize="inherit" />,
            emptyIcon: <FavoriteBorderIcon fontSize="inherit" />,
            ...rest,
          }}
        />
        {label && value !== null && <Box sx={{ml: 2}}>{labels[hover !== -1 ? hover : value]}</Box>}
      </Box>
    );
  }

  return (
    <Box
      sx={
        boxSx || {
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }
      }
    >
      <Rating
        {...{
          value,
          emptyIcon: <StarIcon style={{opacity: 0.55}} fontSize="inherit" />,
          ...rest,
        }}
      />
      {label && value !== null && <Box sx={{ml: 2}}>{labels[hover !== -1 ? hover : value]}</Box>}
    </Box>
  );
};

export default React.memo(HoverRating);
