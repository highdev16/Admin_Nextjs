import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import APICall from 'utils/server_config';
import { useRouter } from 'next/router';
import { Button } from '@paljs/ui';
import moment from 'moment';
import Pagination from 'pages/extra-components/pagination';

const AgentReport = () => {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [dataset, setDatasets] = React.useState([]);
  const [url, setURL] = React.useState('');
  const [params, setParams] = React.useState({});
  const [pageIndex, setPageIndex] = React.useState(1);
  const [pageTotal, setPageTotal] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);
  const [pageRows, setPageRows] = React.useState(20);
  const router = useRouter();
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
  }
`}`;

  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Betting History</div>
          </div>
          <div className="content-area">
            <Row>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Bet Time(from)</div>
                  <div className="form-value">
                    <input type="datetime-local" id="starttime" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Bet Time(to)</div>
                  <div className="form-value">
                    <input type="datetime-local" id="endtime" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Member Account</div>
                  <div className="form-value">
                    <input type="text" id="username" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Game Provider</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Product Type</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Game Group</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Game</div>
                  <div className="form-value">
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Transaction ID</div>
                  <div className="form-value">
                    <input type="text" id="transaction_id" />
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Match ID</div>
                  <div className="form-value">
                    <input type="text" id="match_id" />
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 6 }}>
                <div className="form-item">
                  <div className="form-label">Total Bet Amount</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '24%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&gt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '24%' }}>
                            <input style={{ width: '100%' }} type="text" id="bet_low" />
                          </td>
                          <td style={{ width: '24%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&lt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '24%' }}>
                            <input style={{ width: '100%' }} type="text" id="bet_high" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Win/lose</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '48%' }}>
                            <select style={{ width: '100%' }} id="winlose_type">
                              <option value="gt">&gt;=</option>
                              <option value="lt">&gt;=</option>
                              <option value="equal">=</option>
                            </select>
                          </td>
                          <td style={{ width: '48%' }}>
                            <input style={{ width: '100%' }} type="text" id="winlose" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Bonus</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '48%' }}>
                            <select style={{ width: '100%' }} id="bonus_type">
                              <option value="gt">&gt;=</option>
                              <option value="lt">&lt;=</option>
                              <option value="equal">=</option>
                            </select>
                          </td>
                          <td style={{ width: '48%' }}>
                            <input style={{ width: '100%' }} type="text" id="bonus" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Jackpot betting</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '48%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&gt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '48%' }}>
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col> */}
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Jackpot prize</div>
                  <div className="form-value">
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '48%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&gt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '48%' }}>
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col> */}
            </Row>
            {/* <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div className="middle-title-area">
                  <div>Status</div>
                  <div className="button">All</div>
                  <div className="button">Solved</div>
                  <div className="button">Refuse</div>
                  <div className="button">Cancel</div>
                  <div className="button">Order cancellation system</div>
                  <div className="button">Active</div>
                  <div className="button">The player cancels</div>
                </div>
              </Col>
            </Row> */}
            <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <Button
                            style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}
                            onClick={() => (window.location.href = '/sales/betting_history')}
                          >
                            Reset
                          </Button>
                        </td>
                        {/* <td>
                          <Button
                            style={{
                              border: '0px',
                              background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                              color: 'white',
                              paddingLeft: '1rem',
                              paddingRight: '1rem',
                            }}
                          >
                            Yesterday
                          </Button>
                        </td>
                        <td>
                          <Button
                            style={{
                              border: '0px',
                              background: 'linear-gradient(89.33deg, #0075FF 0.58%, #00D1FF 104.03%)',
                              color: 'white',
                              paddingLeft: '1rem',
                              paddingRight: '1rem',
                            }}
                          >
                            Today
                          </Button>
                        </td> */}
                        <td>
                          <Button
                            style={{
                              border: '0px',
                              background: 'orange',
                              color: 'white',
                              paddingLeft: '1rem',
                              paddingRight: '1rem',
                              cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            }}
                            onClick={() => {
                              if (isSubmitting) return;
                              setSubmitting(true);
                              setDatasets([]);
                              var fields =
                                'starttime,endtime,username,transaction_id,match_id,bet_low,bet_high,winlose_type,winlose,bonus_type,bonus'.split(
                                  ',',
                                );
                              var values = {};
                              fields.map((s) => (values[s] = document.getElementById(s).value));

                              if (document.getElementById('starttime').value)
                                values['starttime'] = new Date(values['starttime']).getTime() || 0;
                              if (document.getElementById('endtime').value)
                                values['endtime'] = new Date(values['endtime']).getTime() || 0;

                              APICall(
                                '/api/sales/betting_history',
                                { value: values, pageIndex: 1, pageRows },
                                (data) => {
                                  setURL('/api/sales/betting_history');
                                  setParams({ value: values });
                                  setPageIndex(1);
                                  setPageCount(Math.ceil(data.total / pageRows));
                                  setSubmitting(false);
                                  setPageTotal(data.total);
                                  setDatasets(data.data);
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
            <div style={{ height: '1rem' }} />
            <table style={{ width: '100%', border: '1px solid white' }}>
              <thead style={{ background: 'url(/images/totalbet/member_total/header.png)', backgroundSize: 'cover' }}>
                <tr>
                  <td colSpan={12} style={{ color: 'white', height: '44px' }}>
                    Player Report
                  </td>
                </tr>
              </thead>
            </table>
            <Table>
              <Thead>
                <Tr>
                  <Th>Bet time</Th>
                  <Th>Transaction ID</Th>
                  <Th>Match ID number/round</Th>
                  <Th>Game Type</Th>
                  <Th>Game</Th>
                  <Th>Member Account</Th>
                  <Th>Bet amount</Th>
                  {/* <Th>Valid bets</Th>
                  <Th>Win/lose</Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {isSubmitting ? (
                  <tr>
                    <td colSpan={10}>
                      <div className="grayRow" style={{ lineHeight: '40px' }}>
                        Loading...
                      </div>
                    </td>
                  </tr>
                ) : dataset.length ? (
                  dataset.map((player, i) => (
                    <Tr key={'rowt_' + i}>
                      <Td>{moment(player.betTime).format('YYYY-MM-DD HH:mm:ss')}</Td>
                      <Td>{player.transactionID}</Td>
                      <Td>{player.matchID}</Td>
                      <Td>{player.gameType}</Td>
                      <Td>{player.game}</Td>
                      <Td>{player.username}</Td>
                      <Td>{player.betAmount}</Td>
                      {/* <Td>{player.validBets}</Td>
                        <Td>{player.winlose}</Td> */}
                    </Tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={10}>
                      <div className="grayRow" style={{ lineHeight: '40px' }}>
                        No data
                      </div>
                    </td>
                  </tr>
                )}
              </Tbody>
            </Table>
            <Pagination
              total={pageTotal}
              pageIndex={pageIndex}
              pageCount={pageCount}
              pageRows={pageRows}
              onPageSelect={(pageNumber) => {
                if (isSubmitting) return;
                setSubmitting(true);
                APICall(
                  url,
                  { ...params, pageIndex: pageNumber, pageRows },
                  (data) => {
                    setURL('/api/sales/betting_history');
                    setPageIndex(Math.min(Math.ceil(data.total / pageRows), pageNumber));
                    setPageCount(Math.ceil(data.total / pageRows));
                    setPageTotal(data.total);
                    setSubmitting(false);
                    setDatasets(data.data);
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
              onPageRowsChanged={(pageRows) => {
                if (isSubmitting) return;
                setSubmitting(true);
                setPageRows(pageRows);
                APICall(
                  url,
                  { ...params, pageIndex: 1, pageRows },
                  (data) => {
                    setPageIndex(1);
                    setPageCount(Math.ceil(data.total / pageRows));
                    setSubmitting(false);
                    setPageTotal(data.total);
                    setDatasets(data.data);
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
            />
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;
