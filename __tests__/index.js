import {ConfigProvider, useConfig} from '../index';
import {render} from '@testing-library/react';

describe('config', () => {
  test('basic', () => {
    const Child = () => {
      const config = useConfig();
      return config.key;
    };

    const {container} = render(<ConfigProvider config={{
      key: 'value',
    }}>
      <Child/>
    </ConfigProvider>);
    expect(container).toMatchSnapshot();
  });
});
