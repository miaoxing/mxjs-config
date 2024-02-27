import { createContext, useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';

const ConfigContext = createContext(null);

const ConfigProvider = ({config: userConfig = {}, children}) => {
  const [config, setConfig] = useState(userConfig);
  useEffect(() => {
    if (config !== userConfig) {
      setConfig(userConfig);
    }
  }, [userConfig]);

  const addConfig = (name, value) => {
    setConfig({...config, [name]: value});
  };

  const mergeConfig = (value) => {
    setConfig({...config, ...value});
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        setConfig,
        addConfig,
        mergeConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

ConfigProvider.propTypes = {
  config: propTypes.object,
  children: propTypes.node,
};

const ConfigConsumer = ConfigContext.Consumer;

const useConfig = () => {
  return useContext(ConfigContext);
};

export { ConfigProvider, ConfigConsumer, useConfig };