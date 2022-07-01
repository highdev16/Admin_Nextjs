import React, { useState, useRef, useEffect, Fragment } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import themes from './themes';
import { Layout, LayoutContent, LayoutContainer, LayoutColumns, LayoutColumn } from '@paljs/ui/Layout';
import icons from '@paljs/icons';
import { SidebarBody, SidebarRefObject, Sidebar } from '@paljs/ui/Sidebar';
import Header from './Header';
import SimpleLayout from './SimpleLayout';
import { useRouter } from 'next/router';
import { EvaIcon } from '@paljs/ui/Icon';
import { Button } from '@paljs/ui/Button';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import Link from 'next/link';
import menuItems from './menuItem';
import SEO, { SEOProps } from 'components/SEO';
import isLogin from '../utils/localstorage';

const getDefaultTheme = (): DefaultTheme['name'] => {
  return 'dark';
};

const LayoutPage: React.FC<SEOProps> = ({ children, ...rest }) => {
  const [theme, setTheme] = useState<DefaultTheme['name']>('dark');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');
  const sidebarRef = useRef<SidebarRefObject>(null);
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef<MenuRefObject>(null);
  const [seeHeader, setSeeHeader] = useState(true);

  const getState = (state?: 'hidden' | 'visible' | 'compacted' | 'expanded') => {
    setSeeHeader(state !== 'compacted');
  };

  const changeTheme = (newTheme: DefaultTheme['name']) => {
    setTheme(newTheme);
    typeof localStorage !== 'undefined' && localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const localTheme = getDefaultTheme();
    if (localTheme !== theme && theme === 'default') {
      setTheme(localTheme);
    }
    isLogin() || (window.location.href = '/auth/login');
  }, []);

  const changeDir = () => {
    const newDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(newDir);
  };

  var authLayout = router.pathname.startsWith('/auth');

  var user = isLogin();
  if (typeof window !== 'undefined' && !user && !authLayout) {
    return <div />;
  }

  return (
    <Fragment>
      <SEO {...rest} />
      <ThemeProvider theme={themes(theme, dir)}>
        <Fragment>
          <SimpleLayout />
          <Layout evaIcons={icons} dir={dir} className={'auth-layout'}>
            {!authLayout && (
              <Header
                dir={dir}
                changeDir={changeDir}
                theme={{ set: changeTheme, value: theme }}
                toggleSidebar={() => sidebarRef.current?.toggle()}
              />
            )}
            <LayoutContainer>
              {!authLayout && (
                <Sidebar
                  responsive
                  compactedBreakpoints={['xs', 'md']}
                  state="compacted"
                  getState={getState}
                  ref={sidebarRef}
                  property="start"
                  className="menu-sidebar"
                >
                  <header id="userLogoHead">
                    <div id="userLogoSidebar">
                      <table style={{ height: '100%' }}>
                        <tbody>
                          <tr>
                            <td>
                              <img src="/images/useravatar.png" style={{ height: 70, marginLeft: '20px' }} />
                            </td>
                            <td className="WhiteLabel">
                              <div style={{ color: 'white !important' }}>Welcome!</div>
                              <div style={{ color: 'white !important' }}>{user.fullname}</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </header>
                  <SidebarBody>
                    <Menu
                      nextJs
                      className="sidebar-menu"
                      style={{ margin: '0px -1.25rem -1.25rem' }}
                      Link={Link}
                      ref={menuRef}
                      items={getSelectedMenu(menuItems(user), router.pathname)}
                      currentPath={router.pathname}
                      toggleSidebar={() => sidebarRef.current?.hide()}
                    />
                  </SidebarBody>
                </Sidebar>
              )}
              <LayoutContent>
                <LayoutColumns>
                  <LayoutColumn className={authLayout ? 'main-content-fullscreen' : 'main-content'}>
                    {children}
                  </LayoutColumn>
                </LayoutColumns>
                {/* {!authLayout && <LayoutFooter>Footer</LayoutFooter>} */}
              </LayoutContent>
            </LayoutContainer>
          </Layout>
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};

export default LayoutPage;

function getSelectedMenu(menuItems, pathname) {
  return menuItems.map((menuItem) => {
    if (!menuItem.children) return menuItem;
    menuItem.children.map((childItem, index) => {
      if (pathname.startsWith(childItem.link.href)) {
        childItem.selected = true;
        menuItem.selected = menuItem.expanded = true;
      }
      return childItem;
    });
    return menuItem;
  });
}
