import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconifyIcon from 'components/base/IconifyIcon';
import userMenuItems from './userMenuItems'; // Adjust the path as needed
import { handleMenuAction } from 'utils/authUtils'; // Adjust the path as needed

const UserMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      {userMenuItems.map((item) => (
        <div
          key={item.id}
          onClick={() => handleMenuAction(item.id)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px' }}
        >
          <IconifyIcon icon={item.icon} color={item.color} />
          <span style={{ marginLeft: '10px' }}>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default UserMenu;
