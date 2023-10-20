import FileCopyIcon from '@mui/icons-material/FileCopy';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import {useTheme} from '@mui/material/styles';
import {memo} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {PrismLight as ReactSyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import Button from './Button';

ReactSyntaxHighlighter.registerLanguage('jsx', jsx);

const SyntaxHighlighter = ({children}: {children: string}) => {
  const theme = useTheme();
  return (
    <Box sx={{position: 'relative'}} data-testid="syntax-highlighter">
      <CopyToClipboard text={children}>
        <Button aria-label="copy code button" sx={{position: 'absolute', right: 5, top: 5}}>
          <Tooltip title="Copy to clipboard">
            <FileCopyIcon />
          </Tooltip>
        </Button>
      </CopyToClipboard>
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
      >
        {children}
      </Box>
    </Box>
  );
};

export default memo(SyntaxHighlighter);
