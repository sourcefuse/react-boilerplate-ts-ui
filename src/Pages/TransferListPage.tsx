import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';
import TransferList from 'Components/TransferList/TransferList';
import {useState} from 'react';

const TransferListPage = () => {
  const [left, setLeft] = useState([
    {value: 'li1', label: 'Left item 1'},
    {value: 'li2', label: 'Left item 2'},
    {value: 'li3', label: 'Left item 3'},
    {value: 'li4', label: 'Left item 4'},
  ]);
  const [right, setRight] = useState([
    {value: 'ri1', label: 'Right item 1'},
    {value: 'ri2', label: 'Right item 2'},
    {value: 'ri3', label: 'Right item 3'},
    {value: 'ri4', label: 'Right item 4'},
  ]);
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper title="Transfer List">
          <ComponentViewer
            title="Default Transfer List"
            code={`import ComponentPaper from "Components/ComponentPaper";
import PagePaper from "Components/PagePaper";
import TransferList from "Components/TransferList/TransferList";
import { useState } from "react";

const TransferListPage = () => {
  const [left, setLeft] = useState([
    {value: 'li1', label: 'Left item 1'},
    {value: 'li2', label: 'Left item 2'},
    {value: 'li3', label: 'Left item 3'},
    {value: 'li4', label: 'Left item 4'},
  ]);
  const [right, setRight] = useState([
    {value: 'ri1', label: 'Right item 1'},
    {value: 'ri2', label: 'Right item 2'},
    {value: 'ri3', label: 'Right item 3'},
    {value: 'ri4', label: 'Right item 4'},
  ]);
  return (
    <PagePaper title="Transfer List">
      <ComponentPaper>
        <TransferList
          left={left}
          right={right}
          setLeft={setLeft}
          setRight={setRight}
        />
      </ComponentPaper>
    </PagePaper>
  );
};

export default TransferListPage;`}
          >
            <TransferList left={left} right={right} setLeft={setLeft} setRight={setRight} />
          </ComponentViewer>
          <PropsTable
            data={[
              {name: 'left,setLeft', type: 'React state', desc: 'useState variables to manage left side list'},
              {name: 'right,setRight', type: 'React state', desc: 'useState variables to manage right side list'},
              {name: 'height', type: 'number', defaultVal: 200, desc: 'Set height of transfer window in px'},
            ]}
          />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default TransferListPage;
