import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
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
    <PagePaper title="Transfer List">
      <ComponentPaper>
        <TransferList left={left} right={right} setLeft={setLeft} setRight={setRight} />
      </ComponentPaper>
      <CodeBlock
        fullCode={`import ComponentPaper from "Components/ComponentPaper";
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
        initial={`<TransferList left={left} right={right} setLeft={setLeft} setRight={setRight} />`}
      />
      <Table
        data={[
          {name: 'left,setLeft', type: 'React state', desc: 'useState variables to manage left side list'},
          {name: 'right,setRight', type: 'React state', desc: 'useState variables to manage right side list'},
          {name: 'height', type: 'number', defaultVal: 200, desc: 'Set height of transfer window in px'},
        ]}
      />
    </PagePaper>
  );
};

export default TransferListPage;
