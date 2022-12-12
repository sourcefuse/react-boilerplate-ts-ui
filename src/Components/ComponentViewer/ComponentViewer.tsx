import CodeIcon from '@mui/icons-material/Code';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Box, ButtonGroup, Grid, Typography} from '@mui/material';
import MuiPaper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Button from 'Components/Button';
import SyntaxHighlighter from 'Components/SyntaxHighlighter';
import {ReactNode, useState} from 'react';

const Paper = styled(MuiPaper)(({theme}) => ({
  marginTop: theme.spacing(2),
}));

enum Tab {
  Demo = 'demo',
  Code = 'code',
}

const TabButton = ({
  activeTab,
  setActiveTab,
  tabName,
}: {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
  tabName: Tab;
}) => {
  return (
    <Button
      startIcon={tabName === Tab.Demo ? <RemoveRedEyeIcon /> : <CodeIcon />}
      variant={activeTab === tabName ? 'contained' : 'outlined'}
      onClick={() => setActiveTab(tabName)}
      color="info"
    >
      {tabName}
    </Button>
  );
};

export default function ComponentViewer({children, title, code}: {children: ReactNode; title: string; code: string}) {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Demo);
  return (
    <Paper elevation={0}>
      <Grid container>
        <Grid container item xs={12} sx={{mb: 1}}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>
              {title}
            </Typography>
          </Grid>
          <Grid container item xs={6} justifyContent="end">
            <ButtonGroup>
              <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tabName={Tab.Demo} />
              <TabButton activeTab={activeTab} setActiveTab={setActiveTab} tabName={Tab.Code} />
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {activeTab === Tab.Demo ? (
            <Box
              sx={{
                border: '1px solid',
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
            <>
              <SyntaxHighlighter>{code}</SyntaxHighlighter>
            </>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
