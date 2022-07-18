import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';
import 'react-calendar/dist/Calendar.css';
import { breakpointDown } from '@paljs/ui/breakpoints';
import { createGlobalStyle, css } from 'styled-components';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Button } from '@paljs/ui';
import APICall from '../../utils/server_config';
import Pagination from 'pages/extra-components/pagination';
import formatNumber from 'utils/formatNumber';
import CloseIcon from '@mui/icons-material/Close';

const AgentReport = () => {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [dataset, setDatasets] = React.useState([]);
  const [url, setURL] = React.useState('');
  const [params, setParams] = React.useState({});
  const [pageIndex, setPageIndex] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(0);
  const [pageRows, setPageRows] = React.useState(20);
  const [pageTotal, setPageTotal] = React.useState(0);
  const [debit, setDebit] = React.useState(0);
  const [credit, setCredit] = React.useState(0);
  const [hiddenCredit, setHiddenCredit] = React.useState(true);
  const onSearch = () => {
    if (isSubmitting) return;
    setSubmitting(true);
    setDatasets([]);
    var params1 = {
      member_search_type: 'like', // document.getElementById('member_search_type').value,
      username:
        document.getElementById('member_search_type').value == 'Username'
          ? document.getElementById('username').value
          : '',
      full_name:
        document.getElementById('member_search_type').value == 'Full Name'
          ? document.getElementById('username').value
          : '',
      agent:
        document.getElementById('member_search_type').value == 'Agent' ? document.getElementById('username').value : '',
    };
    APICall(
      '/api/sales/player_reports_by_search',
      {
        ...params1,
        pageIndex: 1,
        pageRows,
      },
      (data) => {
        setURL('/api/sales/player_reports_by_search');
        setPageIndex(1);
        setPageCount(Math.ceil(data.total / pageRows));
        setPageTotal(data.total);
        setSubmitting(false);
        setDatasets(data.data);
        setParams(params1);
      },
      (e) => {
        setSubmitting(false);
        if (e[0] == 'login_issue') {
          window.location.href = '/auth/login';
        } else alert(e[1] || 'Failed to load data.');
      },
    );
  };
  React.useEffect(() => {
    var detail = window.location.search;
    let child_mode;
    if (detail.startsWith('?data=')) {
      detail = detail.substring(6);
      try {
        detail = JSON.parse(decodeURIComponent(detail));
        child_mode = detail.child_mode;
      } catch (e) {
        return;
      }
    }
    var mode = '';
    var username = '';
    if (child_mode == 'Player ID') {
      username = detail.child_id;
      if (!username) return;
      mode = 1;
      setSubmitting(true);
      setDatasets([]);
      APICall(
        '/api/sales/player_reports_by_id',
        {
          value: username,
        },
        (data) => {
          setSubmitting(false);
          setDatasets(data.data);
          setPageIndex(1);
          setPageCount(1);
          setPageTotal(1);
          setParams({ value: username });
          setURL('/api/sales/player_reports_by_id');
          document.getElementById('username').value = username;
        },
        (e) => {
          setSubmitting(false);
          if (e[0] == 'login_issue') {
            window.location.href = '/auth/login';
          } else alert(e[1] || 'Failed to load data.');
        },
      );
    } else if (child_mode == 'Player List') {
      username = detail.agent;
      if (!username) return;
      setSubmitting(true);
      setDatasets([]);
      document.getElementById('member_search_type').value == 'Agent';
      document.getElementById('username').value = detail.agent;
      var data1 = {
        username:
          document.getElementById('member_search_type').value == 'Username'
            ? document.getElementById('username').value
            : '',
        full_name:
          document.getElementById('member_search_type').value == 'Full Name'
            ? document.getElementById('username').value
            : '',
        agent: detail.agent,
      };
      APICall(
        '/api/sales/player_reports_by_search',
        {
          ...data1,
          pageIndex: 1,
          pageRows,
        },
        (data) => {
          setURL('/api/sales/player_reports_by_search');
          setParams(data1);
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
    }

    if (mode !== 1)
      APICall(
        '/api/sales/getTotalWinLost',
        {
          user: username,
        },
        (data) => {
          setCredit(data[1] || '0.00');
          setDebit(data[0] || '0.00');
          setHiddenCredit(false);
        },
        (e) => {},
      );
    else setHiddenCredit(true);
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

  const onNumberOfWithdrawals = (e) => {
    e.preventDefault();
    window.open(
      '/sales/player_deposit_withdraw?data=' +
        encodeURIComponent(
          JSON.stringify({
            mode: 'Withdraw',
            username: e.target.getAttribute('data-id'),
          }),
        ),
      '_blank',
    );
  };

  const onNumberOfDeposits = (e) => {
    e.preventDefault();
    window.open(
      '/sales/player_deposit_withdraw?data=' +
        encodeURIComponent(
          JSON.stringify({
            mode: 'Deposit',
            username: e.target.getAttribute('data-id'),
          }),
        ),
      '_blank',
    );
  };

  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Player Report</div>
          </div>
          <div className="content-area">
            <Row>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Search Mode</div>
                  <div className="form-value">
                    <select id="member_search_type">
                      <option value="Username">Username</option>
                      <option value="Full Name">Full Name</option>
                      <option value="Agent">Agent</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="empty-form-item">
                  <input type="text" autoComplete="off" id="username" style={{ width: '100%' }}></input>
                </div>
              </Col>
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Full Name</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  id="full_name" />
                  </div>
                </div>
              </Col> */}
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Time zone</div>
                  <div className="form-value">
                    <select>
                      <option>GMT+8</option>
                    </select>
                  </div>
                </div>
              </Col> */}
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Name Label</div>
                  <div className="form-value">
                    <select>
                      <option>Select</option>
                    </select>
                  </div>
                </div>
              </Col> */}
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="empty-form-item">
                  <input type="text" autoComplete="off"  style={{ width: '100%', margin: 'auto' }} />
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="empty-form-item">
                  <input type="text" autoComplete="off"  style={{ width: '100%' }} />
                </div>
              </Col> */}
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Lowest deposit</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Top deposit</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Lowest withdrawal</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Top withdrawal</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  />
                  </div>
                </div>
              </Col> */}
              {/* <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">More valid bets</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Smallest valid bets</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Lowest total win/loss</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  />
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Highest total win/loss</div>
                  <div className="form-value">
                    <input type="text" autoComplete="off"  />
                  </div>
                </div>
              </Col> */}
            </Row>
            <Row>
              <Col breakPoint={{ xs: 6 }}>
                <div style={{ textAlign: 'right' }}>
                  <Button
                    style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}
                    onClick={() => (window.location.href = window.location.pathname)}
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
                    onClick={onSearch}
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
                  <td colSpan={12} style={{ color: 'white', height: '44px' }}>
                    Player Report
                  </td>
                </tr>
              </thead>
            </table>
            {!hiddenCredit && (
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td colSpan={11}>
                      <div style={{ textAlign: 'right', fontSize: '18px', padding: '0.5rem 0rem' }}>
                        Debit: <b style={{ color: 'red' }}>{formatNumber(debit)}</b>, Credit:{' '}
                        <b style={{ color: 'green' }}>{formatNumber(credit)}</b>, Profit:{' '}
                        <b style={{ color: debit - credit < 0 ? 'green' : 'red' }}>{formatNumber(debit - credit)}</b>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <Table>
              <Thead>
                <Tr>
                  <Th>UserName</Th>
                  <Th>Agent</Th>
                  <Th>Full Name</Th>
                  <Th>No. of deposits</Th>
                  <Th>Deposit amount</Th>
                  <Th>No. of withdrawal</Th>
                  <Th>Withdrawal amount</Th>
                  <Th>Win/Lose</Th>
                  <Th>Total Bet Amount</Th>
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
                  dataset.map((player, i) => {
                    return (
                      <Tr key={'player_row_' + i}>
                        <Td>{player.UserName}</Td>
                        <Td>
                          <a
                            href="#"
                            style={{ color: 'blue' }}
                            onClick={(e) => {
                              e.preventDefault();
                              var detail = {};
                              detail['child_mode'] = 'Agent ID';
                              detail['child_id'] = player.Sponsor;
                              window.open(
                                '/sales/agent_group?data=' + encodeURIComponent(JSON.stringify(detail)),
                                '_blank',
                              );
                            }}
                          >
                            {player.Sponsor}
                          </a>
                        </Td>
                        <Td>{player.FullName}</Td>
                        <Td>
                          {Number(player.numberOfRecharges) ? (
                            <a
                              href="#"
                              onClick={onNumberOfDeposits}
                              style={{ color: 'blue' }}
                              data-id={player.UserName}
                            >
                              {formatNumber(player.numberOfRecharges, 0)}
                            </a>
                          ) : (
                            formatNumber(player.numberOfRecharges, 0)
                          )}
                        </Td>
                        <Td>{formatNumber(player.depositAmount)}</Td>
                        <Td>
                          {Number(player.numberOfWithdrawals) ? (
                            <a
                              href="#"
                              onClick={onNumberOfWithdrawals}
                              style={{ color: 'blue' }}
                              data-id={player.UserName}
                            >
                              {formatNumber(player.numberOfWithdrawals, 0)}
                            </a>
                          ) : (
                            formatNumber(player.numberOfWithdrawals, 0)
                          )}
                        </Td>
                        <Td>{formatNumber(player.withdrawalAmount)}</Td>
                        <Td
                          style={{
                            color: player.winlose > 0 ? 'green' : player.winlose < 0 ? 'red' : '#aaa',
                            fontWeight: player.winlose > 0 || player.winlose < 0 ? 1000 : 400,
                          }}
                        >
                          {formatNumber(player.winlose)}
                        </Td>
                        <Td>{formatNumber(player.totalBets)}</Td>
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
            <Pagination
              pageIndex={pageIndex}
              pageCount={pageCount}
              pageRows={pageRows}
              total={pageTotal}
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
                    setPageTotal(data.total);
                    setSubmitting(false);
                    setDatasets(data.data);
                  },
                  (e) => {
                    setDatasets([]);
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
