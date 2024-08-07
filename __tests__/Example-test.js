import 'react-native';
import React from 'react';
import {Example} from '../src/Example';
// import {render, screen, fireEvent} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

test('match snapshot', () => {
  const snap = renderer.create(<Example />).toJSON();
  expect(snap).toMatchSnapshot();
});
