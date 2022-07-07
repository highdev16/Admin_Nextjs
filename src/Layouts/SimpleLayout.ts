import { createGlobalStyle, css } from 'styled-components';
import GlobalStyle from '@paljs/ui/GlobalStyle';
import { breakpointDown } from '@paljs/ui/breakpoints';

const SimpleLayout = createGlobalStyle`
${({ theme }) => css`
  ${GlobalStyle}
  .react-calendar__tile--active, .react-calendar__tile--active:enabled:hover {
    background: orange !important;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  nav {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .ReactTable .-pagination {
    z-index: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 3px;
    -webkit-box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  .ReactTable .-pagination .-next,
  .ReactTable .-pagination .-previous {
    -ms-flex: 1;
    flex: 1 1;
    text-align: center;
  }
  .ReactTable .-pagination .-center {
    -ms-flex: 1.5;
    flex: 1.5 1;
    text-align: center;
    margin-bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .ReactTable .-pagination .-next,
  .ReactTable .-pagination .-previous {
    -ms-flex: 1;
    flex: 1 1;
    text-align: center;
  }
  .ReactTable .-pagination .-pageJump input {
    width: 70px;
    text-align: center;
  }
  .ReactTable .-pagination input,
  .ReactTable .-pagination select {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 5px 7px;
    font-size: inherit;
    border-radius: 3px;
    font-weight: 400;
    outline-width: 0;
  }

  .ReactTable .-pagination .-pageInfo {
    display: inline-block;
    margin: 3px 10px;
    white-space: nowrap;
    gap: 3rem;
  }

  .ReactTable .-pagination .-pageJump {
    display: inline-block;
  }
  input[type='datetime-local'] {
    max-width: 180px;
  }
  body {
    top: 0px !important;
  }
  aside.expanded {
    display: block;
    opacity: 1;
    transition: display 0.6s, opacity 0.6s linear;
  }
  aside.compacted {
    display: none;
    opacity: 0;
    transition: display 0.6s, opacity 0.6s linear;
  }
  #rfs-btn {
    border: 1px solid;
    border-color: rgba(107, 114, 128, 1);
    color: rgba(209, 213, 219, 1);
  }

  #goog-gt-tt {
    display: none !important;
  }

  .goog-tooltip {
    display: none !important;
  }

  .goog-te-banner-frame.skiptranslate {
    display: none !important;
  }

  * {
    font-family: Lato;
  }
  .contentHeaderImage {
    margin-bottom: 1rem;
    height: 50px;
  }
  .centerAll {
    text-align: center;
    justify-content: center;
  }
  table .WhiteLabel div {
    color: white !important;
  }
  aside header * {
    background: #0000 !important;
  }
  aside.expanded #userLogoHead {
    transition: 0.2s linear all;
  }
  aside.compacted #userLogoHead {
    opacity: 0;
    transition: 0.2s linear all;
  }
  aside.menu-sidebar {
    top: 3rem;
  }
  header * {
    background: white !important;
    color: black !important;
  }
  div.layout > header ~ div {
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

  .digit-code-6 {
    ${breakpointDown('md')`
      padding: 0rem 0.5rem !important;
    `}
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
  #userLogoHead {
    background: #0000 !important;
    height: 120px;
    padding-bottom: 0;
  }
  aside header div#userLogoSidebar {
    width: 100%;
    height: 100%;
    background-image: url(/images/name_background.png) !important;
    background-size: auto !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    border-radius: 5px;
  }
  ${breakpointDown('md')`
    div.tabs {
      
    }
  `}
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
  div.form-item {
    background: #dceffd;
    display: flex;
    height: 40px;
    width: 100%;
    border-radius: 10px;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  div.form-item div.form-label {
    min-width: 40%;
    height: 40px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  div.form-item div.form-value {
    flex-grow: 1;
    display: flex;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: center;
  }
  div.form-item div.form-value select,
  div.form-item div.form-value input {
    height: 30px;
  }
  div.empty-form-item * {
    height: 33px;
  }
  div.empty-form-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .responsiveTable tbody tr {
    background: #dceffd;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    width: 100%;
  }
  .responsiveTable td {
    padding: 0.3rem 0;
  }
  .responsiveTable td input,
  .responsiveTable td select {
    width: 100%;
  }
  .responsiveTable tbody tr:nth-child(2n + 1) {
    background: #d7f5eb;
  }

  @media screen and (max-width: 40em) {
    .responsiveTable td.pivoted {
      display: flex;
      padding-left: 10px !important;
      padding-left: -webkit-calc(10px) !important;
    }
    .responsiveTable td .tdBefore {
      position: relative;
    }
  }
`}
`;
export default SimpleLayout;
