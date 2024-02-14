import { ConfigProvider, theme } from 'antd';
import './App.css';
import DynamicTheme from './components';
import { useState } from 'react';

function App() {
  const [ customTheme, setCustomTheme ] = useState({
    primary: '#00b96b',
    bgContainer:'#f6ffed',
    fontFamily:'sans-serif',
    onDarkMode: false
  });

  console.log("customTheme main ==", customTheme);

  return (
    <div>
      <ConfigProvider 
        theme={{ token: { 
          colorPrimary: customTheme.primary,
          colorBgContainer: customTheme.bgContainer, 
          fontFamily: customTheme.fontFamily }, cssVar: true, 
          algorithm:  customTheme?.onDarkMode ? [theme.compactAlgorithm, theme.darkAlgorithm ] : theme.defaultAlgorithm 
        }}
      >
        <DynamicTheme customTheme={customTheme} setCustomTheme={setCustomTheme} />
      </ConfigProvider>
    </div>
  );
}

export default App;
