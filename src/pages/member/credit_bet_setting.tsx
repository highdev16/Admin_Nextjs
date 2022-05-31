import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
const AgentReport = () => {
  const CustomCSS = createGlobalStyle`
${() => css`
  .auth-layout .main-content {
    background-color: #e7e8ee;
    padding-top: 1rem;
  }
  .contentHeaderImage {
    margin-bottom: 0rem;
  }
  div.header-white {
    height: 50px;
    background: url(/images/white_table_head.png);
    background-size: cover;
    display: flex;
  }
  div.blue-title {
    margin: auto;
    width: 334px;
    height: 33px;
    margin-top: 0px;
    background: url(/images/black_title_bkg.png);
    background-size: 334px 33px;
    line-height: 33px;
    font-weight: bold;
  }
  div.tabs {
    left: 0px;
    bottom: 0;
    width: 100%;
    max-width: 800px;
  }
  div.tabs div.tab {
    cursor: pointer;
    max-width: 200px;
    padding: 1rem;
    float: left;
    background: white;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border: 1px solid gray;
    color: gray;
    text-align: center;
  }
  div.tabs div.tab.selected {
    background: url(/images/sales/tabcell_bkg.png);
    background-size: cover;
    color: white;
    padding-top: calc(1rem + 2px);
    border: 0px solid white;
  }
  div.content-area {
    width: 100%;
    background: white;
    padding: 1rem 1rem 4rem 1rem;
  }
  div.content-area * {
    color: #051139;
  }
  div.content-title {
    color: #0071ff;
  }

  tr.titleimg {
    background: url(/images/sales/header_row.png);
    background-size: 100% 100%;
  }
  div.grayRow {
    background: #dceffd;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    width: 100%;
  }
  div.grayRow:nth-child(2n + 1) {
    background: #d7f5eb;
  }
  div.grayRow table {
    width: 100%;
  }
  div.form-item div.form-label {
    min-width: 0%;
  }
  div.mobile {
    display: none;
  }
  div.desktop {
    display: block;
  }
  .react-calendar {
    height: 305px;
    background: #14235b;
  }
  .react-calendar * {
    color: white !important;
  }
  .react-calendar__tile:enabled:hover {
    background-color: white;
    border-radius: 20px;
    color: #0075ff;
  }
  .react-calendar__tile--active {
    border-radius: 20px;
  }
  .react-calendar__tile:enabled:hover * {
    color: #0075ff !important;
  }
  .react-calendar__tile--now,
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: linear-gradient(89.33deg, #0075ff 0.58%, #00d1ff 104.03%);
    background-size: cover;
    border-radius: 20px;
  }
  ${breakpointDown('sm')`
    div.mobile {
        display: block;
    }
    div.desktop {
        display: none;
    }
  `}

  div.middle-title-area {
    background: url(/images/sales/agent_group_header_bkg.png);
    background-size: cover;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    color: white;
  }
  div.middle-title-area div.button:hover {
    background: #fff3;
  }
  div.middle-title-area div {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: white;
  }
  div.middle-title-area div.button {
    background: #0000;
    border: 1px solid #fff9;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 0.5rem;
    float: left;
  }
  div.form-label {
    width: 30%;
  }
`}`;
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/wewinlogo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Credit Bet Setting</div>
          </div>
          <div className="content-area">
            <table style={{ width: '100%', border: '1px solid white', borderCollapse: 'collapse' }}>
              <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
                <tr>
                  <td style={{ color: 'white', height: '44px', width: '5%' }}>#</td>
                  <td style={{ color: 'white', width: '5%' }}>Username</td>
                  <td style={{ color: 'white', width: '9%' }}>First name</td>
                  <td style={{ color: 'white', width: '9%' }}>Last name</td>
                  <td style={{ color: 'white', width: '5%' }}>Modified</td>
                  <td style={{ color: 'white', width: '8%' }}>Sport Min Bet</td>
                  <td style={{ color: 'white', width: '8%' }}>Sport max Bet</td>
                  <td style={{ color: 'white', width: '12%' }}>Sport max per match</td>
                  <td style={{ color: 'white', width: '12%' }}>Casino Min Bet</td>
                  <td style={{ color: 'white', width: '12%' }}>Casino Table Limit</td>
                  <td style={{ color: 'white', width: '6%' }}>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={12}>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ height: '44px', width: '5%' }}>1</td>
                            <td style={{ width: '5%' }}>Micah</td>
                            <td style={{ width: '9%' }}>Trie</td>
                            <td style={{ width: '9%' }}>Sunn</td>
                            <td style={{ width: '5%' }}>
                              <input type="checkbox" />
                            </td>
                            <td style={{ width: '8%' }}>100</td>
                            <td style={{ width: '8%' }}>2000</td>
                            <td style={{ width: '12%' }}>100</td>
                            <td style={{ width: '12%' }}>190</td>
                            <td style={{ width: '12%' }}>200</td>
                            <td style={{ width: '6%' }}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ height: '44px', width: '5%' }}>2</td>
                            <td style={{ width: '5%' }}>SIW</td>
                            <td style={{ width: '9%' }}>Trie</td>
                            <td style={{ width: '9%' }}>Sunn</td>
                            <td style={{ width: '5%' }}>
                              <input type="checkbox" />
                            </td>
                            <td style={{ width: '8%' }}>100</td>
                            <td style={{ width: '8%' }}>2000</td>
                            <td style={{ width: '12%' }}>100</td>
                            <td style={{ width: '12%' }}>190</td>
                            <td style={{ width: '12%' }}>200</td>
                            <td style={{ width: '6%' }}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="header-white" style={{ marginTop: '1rem' }}>
            <div className="blue-title">Bet Setting Limit</div>
          </div>
          <div className="content-area">
            <table style={{ width: '100%', border: '1px solid white', borderCollapse: 'collapse' }}>
              <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
                <tr>
                  <td style={{ color: 'white', height: '44px', width: '35%' }}>Type</td>
                  <td style={{ color: 'white', width: '33%' }}>Min Value</td>
                  <td style={{ color: 'white', width: '32%' }}>Max Value</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={12}>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ height: '44px', width: '35%' }}>1</td>
                            <td style={{ width: '33%' }}>4934</td>
                            <td style={{ width: '32%' }}>18212</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="grayRow">
                      <table style={{ borderCollapse: 'collapse' }}>
                        <tbody>
                          <tr>
                            <td style={{ height: '44px', width: '35%' }}>2</td>
                            <td style={{ width: '33%' }}>1921</td>
                            <td style={{ width: '32%' }}>40000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;
