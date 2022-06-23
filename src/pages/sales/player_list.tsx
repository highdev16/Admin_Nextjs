import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
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
    border-width: 0rem;
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

  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Player List</div>
          </div>
          <div className="content-area">
            <Row>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Type of date</div>
                  <div className="form-value">
                    <select>
                      <option value="SMA">Time of Last Login</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 2 }}>
                <div className="empty-form-item">
                  <input type="text" style={{ width: '100%' }}></input>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 2 }}>
                <div className="empty-form-item">
                  <input type="text" style={{ width: '100%' }}></input>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Settlement Type</div>
                  <div className="form-value">
                    <select>
                      <option>Total Amount</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 1 }}>
                <div className="empty-form-item">
                  <input type="text" style={{ width: '100%', margin: 'auto' }} />
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 1 }}>
                <div className="empty-form-item">
                  <input type="text" style={{ width: '100%' }} />
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Search type</div>
                  <div className="form-value">
                    <select>
                      <option>Member Account</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 2 }}>
                <div className="empty-form-item">
                  <select>
                    <option>Exact search</option>
                  </select>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 1 }}></Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Status</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Agent Level</div>
                  <div className="form-value">
                    <select>
                      <option>Select...</option>
                    </select>
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Label Name</div>
                  <div className="form-value">
                    <select>
                      <option>Enter to select...</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Confirm SMS</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">VIP Level</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
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
            <div style={{ height: '1rem' }} />
            <table style={{ width: '100%', border: '1px solid white' }}>
              <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
                <tr>
                  <td colSpan={6} style={{ color: 'white', height: '25px' }}>
                    Member Information
                  </td>
                  <td colSpan={3} style={{ color: 'white', height: '25px' }}>
                    Wallet Information
                  </td>
                  <td colSpan={2} style={{ color: 'white', height: '25px' }}>
                    Other
                  </td>
                  <td rowSpan={2} style={{ color: 'white', width: '8%' }}>
                    Operation
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ color: 'white', width: '25%' }}>
                    Group Level
                  </td>
                  <td style={{ color: 'white', width: '8%' }}>Label Name</td>
                  <td style={{ color: 'white', width: '8%' }}>New Agent Group</td>
                  <td style={{ color: 'white', width: '8%' }}>Registration date</td>
                  <td style={{ color: 'white', width: '5%' }}>Total Balance</td>
                  <td style={{ color: 'white', width: '6%' }}>Total Recharge</td>
                  <td style={{ color: 'white', width: '5%' }}>Total Withdrawal</td>
                  <td style={{ color: 'white', width: '12%' }}>Last Login</td>
                  <td style={{ color: 'white', width: '8%' }}>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={12}>
                    <div className="grayRow">
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ width: '8%', height: '40px' }}>dung5678</td>
                            <td style={{ width: '8%' }}>vip 0</td>
                            <td style={{ width: '8%' }}>Default</td>
                            <td style={{ width: '8%' }}>Eako</td>
                            <td style={{ width: '8%' }}>dung5678</td>
                            <td style={{ width: '8%' }}>2021-01-01</td>
                            <td style={{ width: '7%' }}>0.51</td>
                            <td style={{ width: '6%' }}>1,000.00</td>
                            <td style={{ width: '5%' }}>0.00</td>
                            <td style={{ width: '12%' }}>2022-05-18 00:34:12</td>
                            <td style={{ width: '8%' }}>Activated</td>
                            <td style={{ width: '8%' }}></td>
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
