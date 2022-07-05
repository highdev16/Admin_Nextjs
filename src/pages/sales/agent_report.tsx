import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import getUserInfo from '../../utils/localstorage';
import { Button } from '@paljs/ui';
import APICall from 'utils/server_config';
import getNextLevel from 'utils/level';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Pagination from 'pages/extra-components/pagination';

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
  const [url, setURL] = React.useState('');
  const [params, setParams] = React.useState({});
  const [pageIndex, setPageIndex] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(0);
  const [pageRows, setPageRows] = React.useState(20);

  const [isSubmitting, setSubmitting] = React.useState(0);
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());

  const [dataset, setDatasets] = React.useState([]);
  const userInfo = getUserInfo();

  const [isMobile, setMobile] = React.useState(null);

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
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'baseline' }}>
                        <Calendar
                          onChange={(e) => {
                            console.log(e);
                            setDate1(e);
                          }}
                          value={date1}
                        />
                      </td>
                      <td style={{ verticalAlign: 'baseline' }}>
                        <Calendar onChange={setDate2} value={date2} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Row>
            {/* <div style={{ lineHeight: '40px', textAlign: 'left' }}>Shortcut Date Selector:</div>
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
            </div> */}
            {/* <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div style={{ color: 'red', textAlign: 'left', fontStyle: 'italic' }}>
                  *Check the last 60 days dealer report
                </div>
              </Col>
            </Row> */}
            <Row>
              {/* <Col breakPoint={{ xs: 3 }}>
                <div className="form-item">
                  <div className="form-label">Time zone</div>
                  <div className="form-value">
                    <select>
                      <option value="ID Agent">GMT+0800 (System TimeZone)</option>
                    </select>
                  </div>
                </div>
              </Col> */}
              <Col breakPoint={{ sm: 12, md: 6, lg: 3 }}>
                <div className="form-item">
                  <div className="form-label">Agent Level</div>
                  <div className="form-value">
                    <select id="agent_level">
                      {['admin'].indexOf(userInfo.aLevel) > -1 && <option value="SH">SH</option>}
                      {['admin', 'SH'].indexOf(userInfo.aLevel) > -1 && <option value="SSMA">SSMA</option>}
                      {['admin', 'SH', 'SSMA'].indexOf(userInfo.aLevel) > -1 && <option value="SMA">SMA</option>}
                      {['admin', 'SH', 'SSMA', 'SMA'].indexOf(userInfo.aLevel) > -1 && <option value="MA">MA</option>}
                      {['admin', 'SH', 'SSMA', 'SMA', 'MA'].indexOf(userInfo.aLevel) > -1 && (
                        <option value="Agent">Agent</option>
                      )}
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ sm: 12, md: 6, lg: 3 }}>
                <div className="form-item">
                  <div className="form-label">Upstream Agent:</div>
                  <div className="form-value">
                    <input type="text" id="parent_username" placeholder="Exact agent username" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ sm: 12, md: 6, lg: 3 }}>
                <div className="form-item">
                  <div className="form-label">Agent Username:</div>
                  <div className="form-value">
                    <input type="text" id="username" placeholder="Search Containing" />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ sm: 12, md: 6, lg: 3 }}>
                <div className="form-item">
                  <div className="form-label">Shortcut Date Selector:</div>
                  <div className="form-value">
                    <select
                      id="shortcut_date_selector"
                      onChange={(e) => {
                        var date;
                        switch (e.target.value) {
                          case 'All':
                            setDate1(new Date(2022, 0, 1));
                            setDate2(new Date());
                            break;
                          case 'Today':
                            setDate1(new Date());
                            setDate2(new Date());
                            break;
                          case 'Yesterday':
                            setDate1(new Date(Date.now() - 86400 * 1000));
                            setDate2(new Date(Date.now() - 86400 * 1000));
                            break;
                          case 'Past 7 days':
                            setDate1(new Date(Date.now() - 86400 * 1000 * 6));
                            setDate2(new Date());
                            break;
                          case 'Past 30 days':
                            setDate1(new Date(Date.now() - 86400 * 1000 * 29));
                            setDate2(new Date());
                            break;
                          case 'This week':
                            date = new Date();
                            while (date.getDay()) {
                              date = new Date(date.getTime() - 86400);
                            }
                            setDate1(date);
                            setDate2(new Date());
                            break;
                          case 'Last week':
                            date = new Date(Date.now() - 86400 * 1000);
                            while (date.getDay()) {
                              date = new Date(date.getTime() - 86400);
                            }
                            setDate1(date);
                            setDate2(new Date(date.getTime() + 86400 * 1000 * 6));
                            break;
                          case 'This month':
                            date = new Date();
                            while (date.getDate() > 1) {
                              date = new Date(date.getTime() - 86400);
                            }
                            setDate1(date);
                            setDate2(new Date());
                            break;
                        }
                      }}
                    >
                      {[
                        'All',
                        'Today',
                        'Yesterday',
                        'Past 7 days',
                        'Past 30 days',
                        'This week',
                        'Last Week',
                        'This month',
                      ].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </Col>
              {/* <Col breakPoint={{ xs: 3 }}>
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
              </Col> */}
              {/* <Col breakPoint={{ xs: 3 }}>
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
              </Col> */}
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
                    onClick={() => {
                      const paramValues = {
                        mode: 'Agent Level',
                        agent_level: document.getElementById('agent_level').value,
                        parent_username: document.getElementById('parent_username').value.trim(),
                        username: document.getElementById('username').value.trim(),
                        date1,
                        date2,
                      };
                      setParams(paramValues);
                      setSubmitting(true);
                      APICall(
                        '/api/sales/agent_report',
                        {
                          ...paramValues,
                          pageIndex: 1,
                          pageRows,
                        },
                        (data) => {
                          setURL('/api/sales/agent_report');
                          setPageIndex(1);
                          setPageCount(Math.ceil(data.total / pageRows));
                          setSubmitting(false);
                          setDatasets(data.data);
                        },
                        (e) => {
                          setSubmitting(false);
                          if (e[0] == 'login_issue') {
                            window.location.href = '/auth/login';
                          } else alert(e[1] || 'Failed to load data.');
                        },
                      );
                    }}
                  >
                    {isSubmitting ? 'Loading... ' : 'Search'}
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
              </tbody>
            </table>
            <Table>
              <Thead>
                <Tr>
                  <Th>Agent ID</Th>
                  <Th>Agent Level</Th>
                  <Th>Number of downstream agents</Th>
                  <Th>Total number of subscribers</Th>
                  <Th>Total number of players</Th>
                  {/* <Th>No duplicate bettors</Th>
                  <Th>Deposit order</Th>
                  <Th>Deposit amount/First deposit</Th> */}
                  <Th>Deposit amount</Th>
                  <Th>Withdrawal amount</Th>
                  <Th>Manual adjustment</Th>
                </Tr>
              </Thead>
              <Tbody>
                {isSubmitting ? (
                  <tr>
                    <td colSpan={8}>
                      <div className="grayRow" style={{ lineHeight: '40px' }}>
                        Loading...
                      </div>
                    </td>
                  </tr>
                ) : dataset.length ? (
                  dataset.map((agent, i) => (
                    <Tr key={'rowt_' + i}>
                      <Td>{agent.username}</Td>
                      <Td>{agent.agent_level}</Td>
                      <Td>{agent.downAgents || 0}</Td>
                      <Td>{agent.subscribers || 0}</Td>
                      <Td>{agent.players || 0}</Td>
                      <Td>{(Number(agent.depositAmount) || 0).toFixed(2)}</Td>
                      <Td>{(Number(agent.withdrawAmount) || 0).toFixed(2)}</Td>
                      <Td>{0}</Td>
                    </Tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8}>
                      <div className="grayRow" style={{ lineHeight: '40px' }}>
                        No data
                      </div>
                    </td>
                  </tr>
                )}
              </Tbody>
            </Table>
            <Pagination
              pageIndex={pageIndex}
              pageCount={pageCount}
              pageRows={pageRows}
              onPageSelect={(pageNumber) => {
                setSubmitting(true);
                APICall(
                  url,
                  { ...params, pageIndex: pageNumber, pageRows },
                  (data) => {
                    setPageIndex(Math.min(Math.ceil(data.total / pageRows), pageNumber));
                    setPageCount(Math.ceil(data.total / pageRows));
                    setSubmitting(false);
                    setDatasets(data.data);
                  },
                  (e) => {
                    setSubmitting(false);
                    if (e[0] == 'login_issue') {
                      window.location.href = '/auth/login';
                    } else alert(e[1] || 'Failed to load data.');
                  },
                );
              }}
              onPageRowsChanged={(pageRows) => {
                setSubmitting(true);
                setPageRows(pageRows);
                APICall(
                  url,
                  { ...params, pageIndex: 1, pageRows },
                  (data) => {
                    setPageIndex(1);
                    setPageCount(Math.ceil(data.total / pageRows));
                    setSubmitting(false);
                    setDatasets(data.data);
                  },
                  (e) => {
                    setSubmitting(false);
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
