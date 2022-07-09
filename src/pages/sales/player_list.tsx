import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import APICall from '../../utils/server_config';

import { Button } from '@paljs/ui';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import moment from 'moment';

const AgentReport = () => {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [dataset, setDatasets] = React.useState([]);
  React.useEffect(() => {
    var detail = window.location.search;
    if (detail.startsWith('?data=')) {
      detail = detail.substring(6);
      try {
        detail = JSON.parse(decodeURIComponent(detail));
      } catch (e) {
        return;
      }
    } else return;
    const child_mode = detail.child_mode;

    if (child_mode == 'players') {
      var username = detail.child_id;
      if (!username) return;
      setSubmitting(true);
      setDatasets([]);
      APICall(
        '/api/sales/player_lists_by_agent',
        {
          mode: 'child',
          value: username,
        },
        (data) => {
          setSubmitting(false);
          setDatasets(data);
        },
        (e) => {
          setSubmitting(false);
          if (e[0] == 'login_issue') {
            window.location.href = '/auth/login';
          } else alert(e[1] || 'Failed to load data.');
        },
      );
    }
  }, []);
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
                  <input type="datetime-local" id="datestart" style={{ width: '100%' }}></input>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 2 }}>
                <div className="empty-form-item">
                  <input type="datetime-local" id="dateend" style={{ width: '100%' }}></input>
                </div>
              </Col>
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
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
              </Col> */}
              {/* <Col breakPoint={{ xs: 12, md: 1 }}>
                <div className="empty-form-item">
                  <input type="text" style={{ width: '100%' }} />
                </div>
              </Col> */}
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Search type</div>
                  <div className="form-value">
                    <select
                      id="search_type"
                      onChange={(e) =>
                        (document.getElementById('user_name_field').placeholder = 'Enter ' + e.target.value)
                      }
                    >
                      <option value="username">Username</option>
                      <option value="fullname">Full Name</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 2 }}>
                <div className="empty-form-item">
                  <input type="text" id="user_name_field" placeholder="Enter username" />
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Status</div>
                  <div className="form-value">
                    <select id="status">
                      <option value="All">All</option>
                      <option value="1">Activated</option>
                      <option value="2">Deactivated</option>
                      <option value="3">Deleted</option>
                    </select>
                  </div>
                </div>
              </Col>
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Agent Level</div>
                  <div className="form-value">
                    <select>
                      <option>Select...</option>
                    </select>
                  </div>
                </div>
              </Col> */}

              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
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
              </Col> */}
            </Row>
            <Row>
              <Col breakPoint={{ xs: 6 }}>
                <div style={{ textAlign: 'right' }}>
                  <Button
                    style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}
                    onClick={() => {
                      window.location.href = window.location.pathname;
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </Col>
              <Col breakPoint={{ xs: 6 }}>
                <div style={{ textAlign: 'left' }}>
                  <Button
                    style={{
                      border: '0px',
                      background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                      color: 'white',
                      width: '100px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                    onClick={() => {
                      APICall(
                        '/api/sales/player_lists_by_search',
                        {
                          mode: 'child',
                          datestart: document.getElementById('datestart').value
                            ? new Date(document.getElementById('datestart').value).getTime()
                            : 0,
                          dateend: document.getElementById('dateend').value
                            ? new Date(document.getElementById('dateend').value).getTime()
                            : 0,
                          search:
                            document.getElementById('search_type').value == 'username'
                              ? document.getElementById('user_name_field').value
                              : '',
                          status: document.getElementById('status').value,
                          name:
                            document.getElementById('search_type').value == 'username'
                              ? ''
                              : document.getElementById('user_name_field').value,
                        },
                        (data) => {
                          setSubmitting(false);
                          setDatasets(data);
                        },
                        (e) => {
                          setSubmitting(false);
                          setDatasets([]);
                          if (e[0] == 'login_issue') {
                            window.location.href = '/auth/login';
                          } else alert(e[1] || 'Failed to load data.');
                        },
                      );
                    }}
                  >
                    Search
                  </Button>
                </div>
              </Col>
            </Row>
            <div style={{ height: '1rem' }} />
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <tbody>
                <tr className="titleimg">
                  <td colSpan={11} style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}>
                    Player List
                  </td>
                </tr>
              </tbody>
            </table>
            <Table>
              <Thead>
                <Tr>
                  <Td>User Name</Td>
                  <Td>Full Name</Td>
                  <Td>Agent Name</Td>
                  <Td>Registration date</Td>
                  <Td>Total Balance</Td>
                  <Td>Total Recharge</Td>
                  <Td>Total Withdrawal</Td>
                  <Td>Last Login</Td>
                  <Td>Status</Td>
                </Tr>
              </Thead>
              <Tbody>
                {isSubmitting ? (
                  <tr>
                    <td colSpan={9}>
                      <div className="grayRow" style={{ lineHeight: '40px' }}>
                        Loading...
                      </div>
                    </td>
                  </tr>
                ) : dataset.length ? (
                  dataset.map((player) => {
                    return (
                      <Tr>
                        <Td>
                          <a
                            href="#"
                            style={{ color: 'blue' }}
                            onClick={(e) => {
                              e.preventDefault();
                              var detail = {};
                              detail['child_mode'] = 'Player ID';
                              detail['child_id'] = player.username;
                              window.open(
                                '/sales/player_report?data=' + encodeURIComponent(JSON.stringify(detail)),
                                '_blank',
                              );
                            }}
                          >
                            {player.username}
                          </a>
                        </Td>
                        <Td>{player.fullname}</Td>
                        <Td>
                          <a
                            href="#"
                            style={{ color: 'blue' }}
                            onClick={(e) => {
                              e.preventDefault();
                              var detail = {};
                              detail['child_mode'] = 'Agent ID';
                              detail['child_id'] = player.agentname;
                              window.open(
                                '/sales/agent_group?data=' + encodeURIComponent(JSON.stringify(detail)),
                                '_blank',
                              );
                            }}
                          >
                            {player.agentname}
                          </a>
                        </Td>
                        <Td>{moment(player.registration_date).format('YYYY-MM-DD HH:mm:ss')}</Td>
                        <Td>{player.total_balance || 0}</Td>
                        <Td>{player.total_recharge || 0}</Td>
                        <Td>{player.total_withdrawal || 0}</Td>
                        <Td>{moment(player.last_login).format('YYYY-MM-DD HH:mm:ss')}</Td>
                        <Td>{player.status}</Td>
                      </Tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9}>
                      <div className="grayRow" style={{ lineHeight: '40px' }}>
                        No data
                      </div>
                    </td>
                  </tr>
                )}
              </Tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;
