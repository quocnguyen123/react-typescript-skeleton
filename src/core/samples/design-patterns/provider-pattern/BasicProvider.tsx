import React, { createContext, ReactElement, useContext, useState } from 'react';

interface BasicConsumerProps {
  count: number;
}

interface BasicProviderProps {
  children: ReactElement[];
}

const BasicContext = createContext({});

function BasicProvider(props: BasicProviderProps) {
  const [data, setData] = useState({ count: 0 });

  return (
    <BasicContext.Provider value={{ data, setData }}>
      {props.children.map(child => child)}
    </BasicContext.Provider>
  );
}

function BasicChildConsumer() {
  const { data } = useContext(BasicContext) as any;
  return (
    <div>
      <p>Count: {data.count}</p>
    </div>
  );
}

function BasicConsumer(props: BasicConsumerProps) {
  const { data, setData } = useContext(BasicContext) as any;
  return (
    <div>
      <BasicChildConsumer />
      <button onClick={() => setData({ count: data.count + props.count })}>
        Add count + {props.count}
      </button>
    </div>
  );
}

function Main() {
  return (
    <BasicProvider>
      <BasicConsumer count={1}></BasicConsumer>
      <BasicConsumer count={2}></BasicConsumer>
      <BasicConsumer count={3}></BasicConsumer>
    </BasicProvider>
  );
}

export default Main;