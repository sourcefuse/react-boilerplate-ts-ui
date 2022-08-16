import Button from 'Components/Button/Button';
import CodeBlock from 'Components/CodeBlock/CodeBlock';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import Table from 'Components/Table';
import React from 'react';

const ButtonPage = () => {
  return (
    <PagePaper title="Button">
      <ComponentPaper>
        <Button color="primary" variant="outlined">
          Click here
        </Button>
      </ComponentPaper>
      <CodeBlock
        fullCode={`import Button from 'Components/Button/Button';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';

const ButtonPage = () => {
  return (
    <PagePaper title="Button">
      <ComponentPaper>
        <Button color="primary" variant="outlined">
          Click here
        </Button>
      </ComponentPaper>
    </PagePaper>
  );
};

export default ButtonPage;`}
        initial={`<Button color="primary" variant="outlined">
  Click here
</Button>`}
      />
      <Table
        data={[
          {name: 'color', type: 'string', desc: 'color of the button'},
          {name: 'isLoading', type: 'bool', defaultVal: 'false', desc: 'loading state of the button'},
          {name: 'disabled', type: 'bool', defaultVal: 'false'},
        ]}
      />
    </PagePaper>
  );
};

export default ButtonPage;
