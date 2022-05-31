import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';

import { Button } from '@paljs/ui';

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
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 800px;
  }
  div.tabs div.tab {
    cursor: pointer;
    max-width: 200px;
    width: 25%;
    background: white;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border: 1px solid gray;
    color: gray;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  div.tabs div.tab.selected {
    background: url(/images/sales/tabcell_bkg.png);
    color: white;
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
            <div className="blue-title">Agent Report</div>
          </div>
          <div></div>
          <div className="content-area">
            <Row>
              <div className="mobile">
                <Calendar onChange={setDate1} value={date1} />
              </div>
              <div className="mobile">
                <Calendar onChange={setDate2} value={date2} />
              </div>
              <div className="desktop">
                <table style={{ width: '100%' }}>
                  <tr>
                    <td style={{ verticalAlign: 'baseline' }}>
                      <Calendar onChange={setDate1} value={date1} />
                    </td>
                    <td style={{ verticalAlign: 'baseline' }}>
                      <Calendar onChange={setDate2} value={date2} />
                    </td>
                  </tr>
                </table>
              </div>
            </Row>
            <div style={{ lineHeight: '40px', textAlign: 'left' }}>Shortcut Date Selector:</div>
            <div style={{ position: 'relative', height: '50px' }}>
              <div className="tabs">
                <div className={'tab ' + (selectedTab === 0 && 'selected')} onClick={() => setSelectedTab(0)}>
                  All
                </div>
                <div className={'tab ' + (selectedTab === 1 && 'selected')} onClick={() => setSelectedTab(1)}>
                  Today
                </div>
                <div className={'tab ' + (selectedTab === 2 && 'selected')} onClick={() => setSelectedTab(2)}>
                  Yesterday
                </div>
                <div className={'tab ' + (selectedTab === 3 && 'selected')} onClick={() => setSelectedTab(3)}>
                  Past 7 days
                </div>
                <div className={'tab ' + (selectedTab === 4 && 'selected')} onClick={() => setSelectedTab(4)}>
                  Past 30 days
                </div>
                <div className={'tab ' + (selectedTab === 5 && 'selected')} onClick={() => setSelectedTab(5)}>
                  This week
                </div>
                <div className={'tab ' + (selectedTab === 6 && 'selected')} onClick={() => setSelectedTab(6)}>
                  Last week
                </div>
                <div className={'tab ' + (selectedTab === 7 && 'selected')} onClick={() => setSelectedTab(7)}>
                  This month
                </div>
              </div>
            </div>
            <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div style={{ color: 'red', textAlign: 'left', fontStyle: 'italic' }}>
                  *Check the last 60 days dealer report
                </div>
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 3 }}>
                <div className="form-item">
                  <div className="form-label">Time zone</div>
                  <div className="form-value">
                    <select>
                      <option value="ID Agent">GMT+0800 (System TimeZone)</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 3 }}>
                <div className="form-item">
                  <div className="form-label">Agent Level</div>
                  <div className="form-value">
                    <select>
                      <option value="SSMA">SSMA</option>
                      <option value="SMA">SMA</option>
                      <option value="MA">MA</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 3 }}>
                <div className="form-item">
                  <div className="form-label">Report Type</div>
                  <div className="form-value">
                    <select>
                      <option value="All">All</option>
                      <option value="Activated">Activated</option>
                      <option value="Delayed">Delayed</option>
                      <option value="Disabled">Disabled</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 3 }}>
                <div className="form-item">
                  <div className="form-label">Data Filter</div>
                  <div className="form-value">
                    <select>
                      <option value="All">All</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 6 }}>
                <div style={{ textAlign: 'right' }}>
                  <Button style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}>Reset</Button>
                </div>
              </Col>
              <Col breakPoint={{ xs: 6 }}>
                <div style={{ textAlign: 'left' }}>
                  <Button
                    style={{
                      border: '0px',
                      background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                      color: 'white',
                      width: '170px',
                    }}
                  >
                    Search
                  </Button>
                </div>
              </Col>
            </Row>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <tbody>
                <tr className="titleimg">
                  <td colSpan={11} style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}>
                    Upstream Agent Report
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan={7}>
                    <div style={{ color: 'red', textAlign: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
                      (This report will show the current subordinate agents and their data. If you need to settle with
                      an agent, please save the data before changing geographical positions. The system settles at
                      00:00~01:00 (GMT+8). Please check the data after settlement
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '7%', height: '40px' }}>ID Agent</td>
                  <td style={{ width: '7%' }}>Agent Level</td>
                  <td style={{ width: '7%' }}>Real name</td>
                  <td style={{ width: '7%' }}>Payment cycle</td>
                  <td style={{ width: '13%' }}>Low number of agent</td>
                  <td style={{ width: '13%' }}>Total number of players</td>
                  <td style={{ width: '7%' }}>Status</td>
                  <td style={{ width: '13%' }}>Last updated</td>
                  <td style={{ width: '7%' }}>Note </td>
                  <td style={{ width: '7%' }}>Operation</td>
                  <td style={{ width: '3%' }}>
                    <img src="/images/sales/eye.png" />
                  </td>
                </tr>
                <tr>
                  <td colSpan={11}>
                    {[1, 2, 3, 4, 5, 67, 1].map((_) => (
                      <div className="grayRow">
                        <table style={{ width: '100%' }}>
                          <tbody>
                            <tr>
                              <td style={{ width: '7%', height: '40px' }}>sjkfjkls</td>
                              <td style={{ width: '7%' }}>SSMA</td>
                              <td style={{ width: '7%' }}>MICHAEL</td>
                              <td style={{ width: '7%' }}>Daily</td>
                              <td style={{ width: '13%' }}>10</td>
                              <td style={{ width: '13%' }}>10192</td>
                              <td style={{ width: '7%' }}>Activated</td>
                              <td style={{ width: '13%' }}>2022-11-19 01:30:11</td>
                              <td style={{ width: '7%' }}></td>
                              <td style={{ width: '7%' }}></td>
                              <td style={{ width: '3%' }}>+</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
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
