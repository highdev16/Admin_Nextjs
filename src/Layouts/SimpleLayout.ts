import { createGlobalStyle, css } from 'styled-components';
import GlobalStyle from '@paljs/ui/GlobalStyle';
import { breakpointDown } from '@paljs/ui/breakpoints';

const SimpleLayout = createGlobalStyle`
${({ theme }) => css`
  ${GlobalStyle}
  table .WhiteLabel div {
    color: white !important;
  }
  aside header * {
    background: #0000 !important;
  }
  header,
  header * {
    background: white !important;
    color: black !important;
  }
  header ~ div {
    padding-top: 3rem !important;
  }
  aside header ~ div {
    padding-top: 0px !important;
  }
  header nav {
    box-shadow: 0 0.5rem 0.5rem 0 #0033ff21 !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    height: 3rem !important;
  }
  aside {
    border: 0px solid black !important;
    background: url(/images/sidebar_bkg.png) !important;
  }
  html {
    font-size: 16px;
  }
  .column.small {
    flex: 0.15 !important;
  }

  .auth-layout {
    .main-content-fullscreen {
      padding: 0 !important;
      overflow: hidden;
    }
    .main-content {
      background: white;
      padding: 2.5rem;
      ${breakpointDown('sm')`
        padding: 0;
      `}
    }
  }

  aside.settings-sidebar {
    transition: transform 0.3s ease;
    width: 19rem;
    overflow: hidden;
    transform: translateX(${theme.dir === 'rtl' && '-'}100%);
    &.start {
      transform: translateX(${theme.dir === 'ltr' && '-'}100%);
    }

    &.expanded,
    &.expanded.start {
      transform: translateX(0);
    }

    .scrollable {
      width: 19rem;
      padding: 3.4rem 0.25rem;
    }

    .main-container {
      width: 19rem;
      transition: width 0.3s ease;
      overflow: hidden;

      .scrollable {
        width: 19rem;
      }
    }
  }

  ${breakpointDown('xs')`
  .main-content-fullscreen {
    padding: 0 !important;
  }
    .main-content {
      background: white;
        padding: 0.75rem !important;
      }
  `}

  .with-margin {
    margin: 0 0.75rem 2rem 0;
  }
  .inline-block {
    display: inline-block;
  }
  .popover-card {
    margin-bottom: 0;
    width: 300px;
    box-shadow: none;
  }
  .btn {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 500;
    border: 2px solid transparent;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .ck-content {
    min-height: 20rem;
  }
`}
`;
export default SimpleLayout;
