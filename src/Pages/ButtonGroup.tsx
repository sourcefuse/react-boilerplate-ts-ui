import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from 'Components/Button/Button';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import React from 'react';

const Btn = (
  <>
    <Button isLoading={false} type="submit">
      One
    </Button>
    <Button isLoading={false} type="submit">
      Two
    </Button>
    <Button isLoading={false} type="submit">
      Three
    </Button>
  </>
);

function HorigontalBtn() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" variant="outlined" aria-label="small outlined button group">
        {Btn}
      </ButtonGroup>
      <ButtonGroup variant="contained" aria-label="medium contained button group">
        {Btn}
      </ButtonGroup>
      <ButtonGroup variant="text" size="large" aria-label="large text group">
        {Btn}
      </ButtonGroup>
    </Box>
  );
}

function disableElevation() {
  return (
    <Box>
      <ButtonGroup disableElevation variant="contained">
        {Btn}
      </ButtonGroup>
    </Box>
  );
}
function VertialBtn() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
        {Btn}
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained">
        {Btn}
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text">
        {Btn}
      </ButtonGroup>
    </Box>
  );
}

function SplitButton() {
  const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({TransitionProps, placement}) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}

export default function VariantButtonGroup() {
  // eslint-disable-next-line no-unused-vars
  // const [ButtonGroupVariant, setButtonGroupVariant] = useState('outline');

  return (
    <PagePaper title="Button Group">
      <ComponentPaper>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <Typography variant="h6">Button group</Typography>
          {HorigontalBtn()}
          <Typography variant="h6">Vertical button group</Typography>
          {VertialBtn()}
          <Typography variant="h6">disableElevation button group</Typography>
          {disableElevation()}
          <Typography variant="h6">Split button </Typography>
          {SplitButton()}
        </Box>
      </ComponentPaper>
      <CodeBlock
        fullCode={`

             import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
             import {ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography} from '@mui/material';
             import Box from '@mui/material/Box';
             import ButtonGroup from '@mui/material/ButtonGroup';
             import Button from 'Components/Button/Button';
             import CodeBlock from 'Components/CodeBlock/CodeBlock';
             import ComponentPaper from 'Components/ComponentPaper';
             import PagePaper from 'Components/PagePaper';
             import Table from 'Components/Table';
             import {useRef, useState} from 'react';

                const Btn = (
                 <>
                   <Button isLoading={false} type="submit">
                     One
                   </Button>
                   <Button isLoading={false} type="submit">
                      Two
                    </Button>
                    <Button isLoading={false} type="submit">
                      Three
                    </Button>
                  </>
                );
                
                function HorigontalBtn(params) {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                          m: 1,
                        },
                      }}
                    >
                      <ButtonGroup size="small" variant="outlined" aria-label="small outlined button group">
                        {Btn}
                      </ButtonGroup>
                      <ButtonGroup variant="contained" aria-label="medium contained button group">
                        {Btn}
                      </ButtonGroup>
                      <ButtonGroup variant="text" size="large" aria-label="large text group">
                        {Btn}
                      </ButtonGroup>
                    </Box>
                  );
                }
                
                function disableElevation(params) {
                  return (
                    <Box>
                      <ButtonGroup disableElevation variant="contained">
                        {Btn}
                      </ButtonGroup>
                    </Box>
                  );
                }
                function VertialBtn(params) {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        '& > *': {
                          m: 1,
                        },
                      }}
                    >
                      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
                        {Btn}
                      </ButtonGroup>
                      <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained">
                        {Btn}
                      </ButtonGroup>
                      <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text">
                        {Btn}
                      </ButtonGroup>
                    </Box>
                  );
                }
                
                function SplitButton() {
                  const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
                  const [open, setOpen] = useState(false);
                  const anchorRef = useRef(null);
                  const [selectedIndex, setSelectedIndex] = useState(1);
                
                  const handleClick = () => {
                    // eslint-disable-next-line no-console
                    console.log('You clicked' +options[selectedIndex]);
                  };
                
                  const handleMenuItemClick = (event, index) => {
                    setSelectedIndex(index);
                    setOpen(false);
                  };
                
                  const handleToggle = () => {
                    setOpen((prevOpen) => !prevOpen);
                  };
                
                  const handleClose = (event) => {
                    if (anchorRef.current && anchorRef.current.contains(event.target)) {
                      return;
                    }
                
                    setOpen(false);
                  };
                
                  return (
                    <>
                      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                        <Button
                          size="small"
                          aria-controls={open ? 'split-button-menu' : undefined}
                          aria-expanded={open ? 'true' : undefined}
                          aria-label="select merge strategy"
                          aria-haspopup="menu"
                          onClick={handleToggle}
                        >
                          <ArrowDropDownIcon />
                        </Button>
                      </ButtonGroup>
                      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({TransitionProps, placement}) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                  {options.map((option, index) => (
                                    <MenuItem
                                      key={option}
                                      disabled={index === 2}
                                      selected={index === selectedIndex}
                                      onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                      {option}
                                    </MenuItem>
                                  ))}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </>
                  );
                }
                
             export default function VariantButtonGroup() {
             // eslint-disable-next-line no-unused-vars
             // const [ButtonGroupVariant, setButtonGroupVariant] = useState('outline');
           
             return (
               <PagePaper title="Button Group">
                 <ComponentPaper>
                   <Box
                     sx={{
                       display: "flex",
                       flexDirection: "column",
                       alignItems: "center",
                       "& > *": {
                         m: 1,
                       },
                     }}
                   >
                     <Typography variant="h6">Button group</Typography>
                     {HorigontalBtn()}
                     <Typography variant="h6">Vertical button group</Typography>
                     {VertialBtn()}
                     <Typography variant="h6">disableElevation button group</Typography>
                     {disableElevation()}
                     <Typography variant="h6">Split button </Typography>
                     {SplitButton()}
                   </Box>
                 </ComponentPaper>
               </PagePaper>
  );
}

       `}
        initial={`
               <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
              </ButtonGroup>    `}
      />
      <Table
        data={[
          {
            name: 'align',
            type: (
              <>
                <>{` align 'center'| 'inherit'| 'justify'| 'left'| 'right' `}</>
              </>
            ),
            desc: `'inherit'	
            Set the text-align on the table cell content.
            Monetary or generally number fields should be right aligned as that allows you to add them up quickly in your head without having to worry about decimals.`,
          },
          {
            name: 'children',
            type: 'node',
            desc: `	The content of the component.`,
          },
          {
            name: 'classes',
            type: 'object',
            desc: `Override or extend the styles applied to the component. `,
          },
          {
            name: 'component',
            type: 'elementType',
            desc: `The component used for the root node. Either a string to use a HTML element or a component. Like div , p`,
          },
          {
            name: 'padding',
            type: <>{`'checkbox' | 'none'| 'normal'`}</>,
            desc: `Sets the padding applied to the cell. The prop defaults to the value ('default') inherited from the parent Table component.`,
          },
          {
            name: 'scope',
            type: 'string',
            defaultVal: `Set scope attribute`,
          },
          {
            name: 'size',
            type: `'small'| 'medium'`,
            desc: `Specify the size of the cell. The prop defaults to the value ('medium') inherited from the parent Table component.`,
          },
          {
            name: 'sortDirection',
            type: `'asc'| 'desc'| false`,
            desc: <>Set aria-sort direction.</>,
          },
          {
            name: 'sx',
            type: <>{`Array<func | object| bool | func| object`}</>,
            desc: `The system prop that allows defining system overrides as well as additional CSS styles. See the 'sx' page for more details.`,
          },

          {
            name: 'variant',
            type: `'body'| 'footer'| 'head`,
            desc: `	Specify the cell type. The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.`,
          },
          {
            name: 'CSS Ref',
            desc: <a href="https://mui.com/api/button-group/#css">ButtonGroup API</a>,
          },
        ]}
      />
    </PagePaper>
  );
}
