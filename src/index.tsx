import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'

import './index.css';
import App from './App';

moment.locale('zh-cn')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
