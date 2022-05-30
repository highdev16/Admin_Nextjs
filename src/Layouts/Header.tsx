import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { DefaultTheme } from 'styled-components';
import Select from '@paljs/ui/Select';
import { LayoutHeader } from '@paljs/ui/Layout';
// import { EvaIcon } from '@paljs/ui/Icon';
// import { Button } from '@paljs/ui/Button';
import { Actions } from '@paljs/ui/Actions';
import ContextMenu from '@paljs/ui/ContextMenu';
import User from '@paljs/ui/User';
import { breakpointDown } from '@paljs/ui/breakpoints';
// import moment from 'moment';

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
  .right > div {
    height: auto;
    display: flex;
    align-content: center;
  }
  .logo {
    font-size: 1.25rem;
    white-space: nowrap;
    text-decoration: none;
  }
  .left {
    display: flex;
    align-items: center;
    .github {
      font-size: 18px;
      margin-right: 5px;
    }
  }
`;

// const Label = styled.span`
//   display: flex;
//   align-items: center;
// `;

const getTimeString = (time: string | number | Date) => {
  var t = new Date(time);
  return (
    t.getFullYear() +
    '/' +
    (t.getMonth() + 1 + '').padStart(2, '0') +
    '/' +
    (t.getDate() + '').padStart(2, '0') +
    ' ' +
    (t.getHours() + '').padStart(2, '0') +
    ':' +
    (t.getMinutes() + '').padStart(2, '0') +
    ':' +
    (t.getSeconds() + '').padStart(2, '0')
  );
};
// const SelectStyled = styled(Select)`
//   min-width: 150px;
// `;

interface HeaderProps {
  toggleSidebar: () => void;
  theme: {
    set: (value: DefaultTheme['name']) => void;
    value: DefaultTheme['name'];
  };
  changeDir: () => void;
  dir: 'rtl' | 'ltr';
}

const showGoodmorning = () => {
  var time = new Date();
  if (time.getHours() < 12) return 'Good morning';
  if (time.getHours() < 19) return 'Good afternoon';
  return 'Good evening';
};
const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();
  const [timeAndDate, setTimeAndDate] = React.useState(Date.now());

  useEffect(() => {
    var timer = setInterval(() => {
      setTimeAndDate(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <Actions
          size="Medium"
          actions={[
            {
              icon: { name: 'menu-2-outline' },
              url: {
                onClick: props.toggleSidebar,
              },
            },
            {
              content: (
                <Link href="/">
                  <a className="logo">{showGoodmorning()}</a>
                </Link>
              ),
            },
            {
              content: <div>{getTimeString(timeAndDate)}</div>,
            },
            // {
            //   content: (
            //     <SelectStyled
            //       instanceId="react-select-input"
            //       isSearchable={false}
            //       shape="SemiRound"
            //       placeholder="Themes"
            //       value={themeOptions().find((item) => item.value === props.theme.value)}
            //       options={themeOptions()}
            //       onChange={({ value }: { value: DefaultTheme['name'] }) => props.theme.set(value)}
            //     />
            //   ),
            // },
            // {
            //   content: (
            //     <Button size="Small" onClick={() => props.changeDir()}>
            //       {props.dir}
            //     </Button>
            //   ),
            // },
          ]}
        />
        <Actions
          size="Small"
          className="right"
          actions={[
            // {
            //   content: (
            //     <a
            //       className="left"
            //       href={`https://github.com/paljs/nextjs-admin-template`}
            //       target="_blank"
            //       rel="noreferrer"
            //     >
            //       <span className="github">Support us in GitHub</span>
            //       <img src={`https://badgen.net/github/stars/paljs/nextjs-admin-template`} />
            //     </a>
            //   ),
            // },
            // {
            //   content: (
            //     <a href="https://discord.gg/NRmdvDxsT8" target="_blank" rel="noreferrer">
            //       <img height="20" src="/discord.svg" alt="slack" />
            //     </a>
            //   ),
            // },
            // {
            //   icon: 'twitter',
            //   url: { href: 'https://twitter.com/AhmedElywh', target: '_blank' },
            // },
            {
              content: (
                <div style={{ width: 100 }}>
                  <Select options={[{ value: 'English', label: 'EN' }]} placeholder="EN" style={{ width: 100 }} />
                </div>
              ),
            },
            {
              content: (
                <ContextMenu
                  nextJs
                  style={{ cursor: 'pointer' }}
                  placement="bottom"
                  currentPath={router.pathname}
                  items={[
                    { title: 'Profile', link: { href: '/modal-overlays/tooltip' } },
                    { title: 'Log out', link: { href: '/auth/login' } },
                  ]}
                  Link={Link}
                >
                  <User image="url('/icons/icon-72x72.png')" name="Administrator" title="Manger" size="Medium" />
                </ContextMenu>
              ),
            },
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
};
export default Header;
