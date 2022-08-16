import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {PrismLight as ReactSyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';

ReactSyntaxHighlighter.registerLanguage('jsx', jsx);

// TODO(style): enable horizontal scroll
const SyntaxHighlighter = ({children, ...rest}) => {
  const theme = useTheme();
  return (
    <Box
      component={ReactSyntaxHighlighter}
      language="jsx"
      wrapLines
      style={theme.palette.mode === 'dark' ? vscDarkPlus : vs}
      sx={{
        ...(theme.palette.mode === 'dark' && {border: '1px solid'}),
        borderRadius: 1,
      }}
      lineProps={{style: {whiteSpace: 'pre-wrap'}}}
      {...rest}
    >
      {children}
    </Box>
  );
};

SyntaxHighlighter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(SyntaxHighlighter);
