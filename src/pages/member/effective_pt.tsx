import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import { Radio } from '@paljs/ui/Radio';
import { Checkbox } from '@paljs/ui/Checkbox';
import { Button } from '@paljs/ui/Button';
const AgentReport = () => {
  const CustomCSS = createGlobalStyle`
${() => css`
  #contentTableObj {
    border: 0px solid black;
    border-collapse: collapse;
  }
  #contentTable tr {
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    border: 0px solid white;
    position: relative;
  }
  #contentTable tr {
    background-color: #d7f5eb;
    width: 50%;
    color: #051139;
  }
  #contentTableObj,
  #Main-contentTableObj {
    width: 100%;
  }

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
  .allblack * {
    color: black !important;
  }
`}`;
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Select</div>
          </div>
          <div className="content-area">
            <table style={{ width: '100%', border: '1px solid white', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td>
                    <div className="grayRow">
                      <Col breakPoint={{ sm: 12, md: 4 }}>
                        <div className="form-item" style={{ background: '#0000' }}>
                          <div className="form-label"> Select SH:</div>
                          <div className="form-value">
                            {' '}
                            <input type="text" />
                          </div>
                        </div>
                      </Col>
                    </div>
                    <div className="grayRow">
                      <Col breakPoint={{ sm: 12, md: 4 }}>
                        <div className="form-item" style={{ background: '#0000' }}>
                          <div className="form-label"> Select SSMA:</div>
                          <div className="form-value">
                            {' '}
                            <select>
                              <option>-- Select --</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                    </div>
                    <div className="grayRow">
                      <Col breakPoint={{ sm: 12, md: 4 }}>
                        <div className="form-item" style={{ background: '#0000' }}>
                          <div className="form-label"> Select SMA:</div>
                          <div className="form-value">
                            {' '}
                            <select>
                              <option>-- Select --</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                    </div>
                    <div className="grayRow">
                      <Col breakPoint={{ sm: 12, md: 4 }}>
                        <div className="form-item" style={{ background: '#0000' }}>
                          <div className="form-label"> Select MA:</div>
                          <div className="form-value">
                            {' '}
                            <select>
                              <option>-- Select --</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                    </div>
                    <div className="grayRow">
                      <Col breakPoint={{ sm: 12, md: 4 }}>
                        <div className="form-item" style={{ background: '#0000' }}>
                          <div className="form-label"> Select Agent:</div>
                          <div className="form-value">
                            {' '}
                            <select>
                              <option>-- Select --</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                    </div>
                    <div className="grayRow">
                      <Col breakPoint={{ sm: 12, md: 12 }}>
                        <div className="form-item" style={{ background: '#0000' }}>
                          <div className="form-label" style={{ width: 100 }}>
                            {' '}
                            Select SSMA:
                          </div>
                          <div className="form-value allblack">
                            <div style={{ display: 'flex' }}>
                              <Radio
                                name="radio"
                                onChange={() => {}}
                                options={[
                                  {
                                    value: 'PT 1',
                                    label: 'PT 1',
                                    checked: true,
                                  },
                                  {
                                    value: 'PT 2',
                                    label: 'PT 2',
                                  },
                                  {
                                    value: 'AH Live',
                                    label: 'AH Live',
                                  },
                                  {
                                    value: 'Outright',
                                    label: 'Outright',
                                  },
                                ]}
                              />
                              <Checkbox checked={false} onChange={() => {}}>
                                Apply changes to all PT groups
                              </Checkbox>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </div>
                    <div>
                      <table style={{ width: '100%', marginTop: '3rem' }}>
                        <tbody>
                          <tr>
                            <td style={{ width: '2rem' }}>
                              <img src="/images/sales/Subtract.png"></img>
                            </td>
                            <td style={{ textAlign: 'left' }}>Remark</td>
                          </tr>
                          <tr>
                            <td style={{ height: '1rem' }} />
                          </tr>
                          <tr>
                            <td style={{ textAlign: 'left' }} colSpan={2}>
                              Please verify the results if you choose to update all bet types or sport types
                            </td>
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
            <div className="blue-title">Effective PT</div>
          </div>
          <div className="content-area">
            <table id="contentTableObj">
              <tbody id="contentTable">
                <tr>
                  <td rowSpan={2} style={{ width: '15%' }}>
                    Username
                  </td>
                  <td
                    rowSpan={2}
                    style={{ width: '35%', borderLeft: '1px solid black', borderRight: '1px solid black' }}
                  >
                    Teams
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: '20%', borderBottom: '1px solid black', borderRight: '1px solid black' }}
                  >
                    First Goal
                  </td>
                  <td colSpan={2} style={{ width: '20%', borderBottom: '1px solid black' }}>
                    First Half
                  </td>
                  <td rowSpan={2} style={{ width: '20%', borderLeft: '1px solid black' }}>
                    No Goal
                  </td>
                </tr>
                <tr>
                  <td>Home</td>
                  <td style={{ borderLeft: '1px solid black', borderRight: '1px solid black' }}>Away</td>
                  <td>Home</td>
                  <td style={{ borderLeft: '1px solid black' }}>Away</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="header-white" style={{ marginTop: '1rem' }}>
            <div className="blue-title">Effect PT Settings</div>
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
                    <Col breakPoint={{ sm: 12, md: 4 }}>
                      <div className="grayRow">
                        <div className="form-item">
                          <div className="form-label">Min PT:</div>
                          <div className="form-value">
                            <select>
                              <option></option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="grayRow">
                        <div className="form-item">
                          <div className="form-label">Forced PT:</div>
                          <div className="form-value">
                            <select>
                              <option></option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="grayRow">
                        <div className="form-item">
                          <div className="form-label">Is Take All: </div>
                          <div className="form-value">
                            <select>
                              <option></option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button
            style={{
              border: '0px',
              background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
              color: 'white',
              width: '150px',
              marginTop: '1rem',
              backgroundSize: 'cover',
              borderRadius: 10,
            }}
          >
            Update
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;
