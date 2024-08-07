import react from 'react';
import 'react-native';

import renderer from 'react-test-renderer';
import Example2, {Sum} from '../src/Example2';


// find element
test('renders correctly and check all element', () => {
  const tree = renderer.create(<Example2 />).toJSON();

});


// test sum funcition
test('testing sum function', () => {
  expect(Sum(20,20)).toBe(40);
});
