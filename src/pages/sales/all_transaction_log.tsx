import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Pagination from 'pages/extra-components/pagination';
import { Button } from '@paljs/ui';
import getUserInfo from '../../utils/localstorage';
import APICall from 'utils/server_config';
import moment from 'moment';

const AgentReport = () => {
  const [url, setURL] = React.useState('');
  const [params, setParams] = React.useState({});
  const [pageIndex, setPageIndex] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(0);
  const [pageRows, setPageRows] = React.useState(20);
  const [pageTotal, setPageTotal] = React.useState(0);
  const [isSubmitting, setSubmitting] = React.useState(0);
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());

  const [isMobile, setMobile] = React.useState(null);

  const [dataset, setDatasets] = React.useState([]);
  const userInfo = getUserInfo();

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
      margin-bottom: 0.5rem;
      float: left;
    }
  `}`;

  React.useEffect(() => {
    if (window.innerWidth < 768) setMobile(true);
    else setMobile(false);
  }, []);

  if (isMobile === null) return <div />;
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">All Transaction Logs</div>
          </div>
          <div className="content-area">
            <Row>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Day Trading(From)</div>
                  <div className="form-value">
                    <input type="date" id="fromdate" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Day Trading(To)</div>
                  <div className="form-value">
                    <input type="date" id="todate" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Member Account</div>
                  <div className="form-value">
                    <input type="text" id="member_account" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Minimum amount</div>
                  <div className="form-value">
                    <input type="text" id="min_amount" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Maximum amount</div>
                  <div className="form-value">
                    <input type="text" id="max_amount" />
                  </div>
                </div>
              </Col>
              <div style={{ display: 'none' }}>
                {/* <Col breakPoint={{ xs: 12, md: 3 }}>
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
                    <select>
                      <option>All</option>
                    </select>
                  </div>
                </div>
              </Col>

              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Match ID</div>
                  <div className="form-value">
                    <select></select>
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
                            <input style={{ width: '100%' }} type="text" />
                          </td>
                          <td style={{ width: '24%' }}>
                            <select style={{ width: '100%' }}>
                              <option>&lt;=</option>
                            </select>
                          </td>
                          <td style={{ width: '24%' }}>
                            <input style={{ width: '100%' }} type="text" />
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
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Bonus</div>
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
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
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
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
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
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div className="middle-title-area">
                  <div>Status</div>
                  <div style={{ flexGrow: 1 }}>
                    <div className="button">Deposits</div>
                    <div className="button">Withdraw Money</div>
                    <div className="button">Successful order</div>
                    <div className="button">Add money manually</div>
                    <div className="button">Minus money manually</div>
                    <div className="button">The proposal accepted</div>
                    <div className="button">Refund</div>
                    <div className="button">Complementary</div>
                    <div className="button">Proposal Rewards</div>
                    <div className="button">Referral Bonus</div>
                    <div className="button">Sales commission</div>
                    <div className="button">Quest rewards</div>
                  </div>
                </div>
              </Col> */}
              </div>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <Button style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}>
                            Reset
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
                            onClick={() => {
                              if (isSubmitting) return;
                              const paramValues = {
                                member: document.getElementById('member_account').value,
                                min: Number(document.getElementById('max_amount').value) || 0,
                                max: Number(document.getElementById('max_amount').value) || Math.pow(10, 20),
                                date1: new Date(document.getElementById('fromdate').value).getTime() || 0,
                                date2:
                                  (new Date(document.getElementById('todate').value).getTime() || 9656995982852) +
                                  86400 * 1000 -
                                  1,
                              };
                              setParams(paramValues);
                              setSubmitting(true);
                              APICall(
                                '/api/sales/all_transaction_log',
                                {
                                  ...paramValues,
                                  pageIndex: 1,
                                  pageRows,
                                },
                                (data) => {
                                  setURL('/api/sales/all_transaction_log');
                                  setPageIndex(1);
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
                  <td colSpan={6} style={{ color: 'white', height: '44px' }}>
                    Transaction List
                  </td>
                </tr>
              </thead>
            </table>
            <Table>
              <Thead>
                <Tr>
                  <Th>Day Trading</Th>
                  <Th>Transaction Type</Th>
                  <Th>Member Account</Th>
                  <Th>Transaction Amount</Th>
                  <Th>Currency</Th>
                  {/* <Th>Before settlement</Th> */}
                  <Th>Balance after transaction</Th>
                </Tr>
              </Thead>
              <Tbody>
                {isSubmitting ? (
                  <tr>
                    <td colSpan={6}>
                      <div className="grayRow" style={{ lineHeight: '40px' }}>
                        Loading...
                      </div>
                    </td>
                  </tr>
                ) : dataset.length ? (
                  dataset.map((data, i) => (
                    <Tr key={'rowt_' + i}>
                      <Td>{moment(new Date(data.time * 1000)).format('YYYY-MM-DD HH:mm:ss')}</Td>
                      <Td>{data.category}</Td>
                      <Td>{data.UserName}</Td>
                      <Td>{data.Amount}</Td>
                      <Td>{data.Unit}</Td>
                      <Td>-</Td>
                    </Tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>
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
