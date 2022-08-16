import ExpandIcon from '@mui/icons-material/Expand';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from 'Components/Button/Button';
import SyntaxHighlighter from 'Components/SyntaxHighlighter';
import React, {memo, useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

interface Props {
  initial: string;
  fullCode: string;
}

const CodeBlock: React.FC<Props> = ({initial, fullCode}) => {
  const [isExpanded, setIsExpanded] = useState(!initial);
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  return (
    <Box sx={{marginTop: 4}}>
      <ButtonGroup
        sx={{display: 'flex', justifyContent: 'right'}}
        size="small"
        disableElevation
        aria-label="outlined codeblock button group"
      >
        {initial && (
          <Button onClick={toggleExpand} aria-label="button code expand">
            <Tooltip title={isExpanded ? 'Hide full code' : 'Show full code'}>
              <ExpandIcon />
            </Tooltip>
          </Button>
        )}
        <CopyToClipboard sx={{cursor: 'pointer'}} text={isExpanded ? fullCode : initial}>
          <Button aria-label="copy code button">
            <Tooltip title="Copy to clipboard">
              <FileCopyIcon />
            </Tooltip>
          </Button>
        </CopyToClipboard>
      </ButtonGroup>
      <SyntaxHighlighter>{isExpanded ? fullCode : initial}</SyntaxHighlighter>
    </Box>
  );
};

export default memo(CodeBlock);
