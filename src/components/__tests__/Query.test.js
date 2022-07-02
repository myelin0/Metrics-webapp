import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Query from '../Query';

describe('Testing Search component', () => {});
it('should render correctly Search component', () => {
  const tree = render(
    <Provider store={store}>
      <Query />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
