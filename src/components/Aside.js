import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../assets/bg1.jpg';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>

      </SidebarHeader>

      <SidebarContent>
      <Menu >

{/* <SubMenu

  title={intl.formatMessage({ id: 'Admin üye İşlemleri' })}>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>

</SubMenu>
<SubMenu

  title={intl.formatMessage({ id: 'Mod üye İşlemleri' })}

>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
</SubMenu>


<SubMenu

  title={intl.formatMessage({ id: 'Üye üye İşlemleri' })}

>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
</SubMenu>

<SubMenu

  title={intl.formatMessage({ id: 'Falcı İşlemleri' })}

>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
</SubMenu>
 */}





</Menu>
        <Menu  >
        <SubMenu

title={intl.formatMessage({ id: 'Admin üye İşlemleri' })}>
<MenuItem>Ekle</MenuItem>
<MenuItem>Listele</MenuItem>
<MenuItem>Sil</MenuItem>
<MenuItem>Ara</MenuItem>
<MenuItem>Güncelle</MenuItem>

{/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem> */}

</SubMenu>
<SubMenu

title={intl.formatMessage({ id: 'Mod üye İşlemleri' })}

>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
</SubMenu>


<SubMenu

title={intl.formatMessage({ id: 'Üye üye İşlemleri' })}

>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
</SubMenu>

<SubMenu

title={intl.formatMessage({ id: 'Falcı İşlemleri' })}

>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
<MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
</SubMenu>
        {/*   <MenuItem>
            {intl.formatMessage({ id: 'Admin üye İşlemleri' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'Mod üye İşlemleri' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'Üye üye İşlemleri' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'Falcı İşlemleri' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'İndirim Modülü İşlemleri' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'Sistem Modülü İşlemleri' })}
          </MenuItem> */}

         {/*  <MenuItem>
            {intl.formatMessage({ id: 'components' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'components' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'components' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'components' })}
          </MenuItem>
          <MenuItem>
            {intl.formatMessage({ id: 'components' })}
          </MenuItem> */}

          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })}>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
  <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
  <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
    <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
    <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
    <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
    <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
      <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
      <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
      <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>

    </SubMenu>
  </SubMenu>
</SubMenu>

        </Menu>
      
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >

        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
