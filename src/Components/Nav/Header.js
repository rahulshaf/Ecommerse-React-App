import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined,UserAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
const items = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
    icon: <AppstoreOutlined />,
  },
  
  
  {
    label: "UserName", 
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: null,
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
    ],
  }
,
  {
    label: <Link to="/login">Login</Link>,
    key: 'login',
    icon: <UserOutlined />,
    className: 'float-right'
  },
  {
    label: <Link to="/register">Register</Link>,
    key: 'register',
    icon: <UserAddOutlined />,
    className:"float-right"
  },
];
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;