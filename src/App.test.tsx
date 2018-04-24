import { shallow } from 'enzyme';
import 'jest-enzyme';
import * as React from 'react';
import App from './App';

describe('<App />', () => {
  const element = shallow(<App />);
  test('Shallow Render <App />', () => {
    expect(element.find('.App')).toExist();
  });

  test('Match Snapshot', () => {
    expect(element).toMatchSnapshot();
  });
});
