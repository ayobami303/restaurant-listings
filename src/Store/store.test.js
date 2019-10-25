
import React, { useContext, useState } from 'react'
import { shallow } from 'enzyme';
import * as GlobalContext from './';
import { GlobalStoreContext, useMyContext } from  './';


export const MyComponent = (props) => {
  const [context, setContext] = useMyContext(); // instead of useContext(MyContext)
  // const [state, setState] = useState(GlobalStoreContext);
  return <div data-test="my-component" {...props} {...context} setGlobalState={setContext}>{context.value}</div>;
};
describe('Returns context with provider', () => {
  it("renders the child component with correct props and context passed", () => {
    jest.spyOn(GlobalContext, "useMyContext").mockImplementation(() => ([{value: 'foobar', locations: [], options: {}}, jest.fn(() => 'set successfully')]));
  
    const wrapper = shallow(
      <GlobalStoreContext.Provider>
        <MyComponent />
      </GlobalStoreContext.Provider>
    ).dive();
    const props = wrapper.props();
    expect(wrapper.text()).toEqual("foobar");
    expect(props.locations).toEqual([]);
    expect(props.options).toEqual({});
    expect(props.setGlobalState()).toEqual('set successfully');
  });
})