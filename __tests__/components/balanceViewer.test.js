import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BalanceViewer from '../../src/components/shared/BalanceViewer';

configure({ adapter: new Adapter() });

describe('<BalanceViewer />', () => {
  const wrapper = shallow(
    <BalanceViewer currentBalance={270} />
  );
  
  it('Should render the BalanceViewer component with the defined text', () => {
    expect(wrapper.text()).toEqual('£270');
  });
});
