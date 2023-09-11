import CodeIcon from '@mui/icons-material/Code';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Box, ButtonGroup, Grid, SvgIconTypeMap, Typography} from '@mui/material';
import MuiPaper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {OverridableComponent} from '@mui/types';
import Button from 'Components/Button';
import SyntaxHighlighter from 'Components/SyntaxHighlighter';
import {ReactNode, useState} from 'react';

const MARGIN_TOP_SPACING = 2;
const Paper = styled(MuiPaper)(({theme}) => ({
  marginTop: theme.spacing(MARGIN_TOP_SPACING),
}));

enum Tab {
  Demo = 'demo',
  Code = 'code',
}

const TabButton = ({
  activeTab,
  setActiveTab,
  tabName,
  Icon,
}: {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
  tabName: Tab;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {muiName: string};
}) => {
  const isActive = activeTab === tabName;
  return (
    <Button
      color="inherit"
      disableElevation
      startIcon={<Icon sx={{color: isActive ? 'primary.main' : '#525252'}} />}
      variant={isActive ? 'contained' : 'outlined'}
      onClick={() => setActiveTab(tabName)}
      sx={{bgcolor: isActive ? '#fff' : '#E7E7E7', color: isActive ? '#000' : '#525252', border: 0}}
    >
      {tabName}
    </Button>
  );
};

export default function ComponentViewer({
  children,
  title,
  code,
}: Readonly<{children: ReactNode; title: string; code: string}>) {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Demo);
  return (
    <Paper elevation={0}>
      <Grid container>
        <Grid container item xs={12} sx={{my: 2}}>
          <Grid item xs={12} sm={6}>
            <Typography
              id={title}
              className="headings"
              variant="subtitle2"
              sx={{fontWeight: 'bold', mt: 2, scrollMarginTop: '200px'}}
            >
              {title}
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={6} justifyContent="end">
            <ButtonGroup sx={{border: '1px solid #D9D9D9'}}>
              <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tabName={Tab.Demo} Icon={RemoveRedEyeIcon} />
              <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tabName={Tab.Code} Icon={CodeIcon} />
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {activeTab === Tab.Demo ? (
            <Box
              sx={{
                border: '1px solid #D1D1D1',
                borderRadius: 1,
                padding: 2,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {children}
            </Box>
          ) : (
            <SyntaxHighlighter>{code}</SyntaxHighlighter>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
