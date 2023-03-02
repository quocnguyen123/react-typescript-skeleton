import React, { ReactElement, useState } from 'react';

interface TabProps {
  label: string;
  children: ReactElement;
}

interface TabsProps {
  children: ReactElement[];
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
    event.preventDefault();
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tabs-nav">
        {
          children.map((child, index) => (
            <a 
              key={index} 
              href='#' 
              className={activeTab === index ? 'active' : ''}
              onClick={event => handleClick(event, index)}
            >
              {child.props.label}
            </a>
          ))
        }
      </div>
    </div>
  );
};

const Tab = ({ label, children }: TabProps) => {
  return (
    <div className='tab'>
      <h1>{label}</h1>
      {children}
    </div>
  );
};

const CompoundComponent = () => {
  return (
    <Tabs>
      <Tab label="Tab 1">
        <p>This is a content of tab 1</p>
      </Tab>
      <Tab label="Tab 2">
        <p>This is a content of tab 2</p>
      </Tab>
      <Tab label="Tab 3">
        <p>This is a content of tab 3</p>
      </Tab>
    </Tabs>
  );
};

export default CompoundComponent;