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
import moment from 'moment';

const AgentReport = () => {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [dataset, setDatasets] = React.useState([]);
  const [url, setURL] = React.useState('');
  const [params, setParams] = React.useState({});
  const [pageIndex, setPageIndex] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(0);
  const [pageRows, setPageRows] = React.useState(20);
  const [pageTotal, setPageTotal] = React.useState(0);
  const [updated, setUpdated] = React.useState(false);
  const [mode, setMode] = React.useState('Deposit');
  const [username, setUsername] = React.useState('');

  const onSearch = () => {
    if (isSubmitting) return;
    if (!username.trim().length) {
      return alert('Enter the username you want to see.');
    }
    setSubmitting(true);
    setDatasets([]);
    var params1 = {
      username: username,
      mode: mode,
    };
    APICall(
      '/api/sales/player_deposit_withdraw',
      {
        ...params1,
        pageIndex: 1,
        pageRows,
      },
      (data) => {
        setURL('/api/sales/player_deposit_withdraw');
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
    if (detail.startsWith('?data=')) {
      detail = detail.substring(6);
      try {
        detail = JSON.parse(decodeURIComponent(detail));
      } catch (e) {
        return;
      }
    } else return;
    if (detail.mode == 'Deposit' || detail.mode == 'Withdraw') {
      setMode(detail.mode);
      setUsername(detail.username || '');
      setUpdated(true);
    }
  }, []);

  React.useEffect(() => {
    if (updated) {
      onSearch();
    }
  }, [updated]);
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
            <div className="blue-title">Player Deposit/Withdraw</div>
          </div>
          <div className="content-area">
            <Row>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Search Mode</div>
                  <div className="form-value">
                    <select id="mode" value={mode} onChange={(e) => setMode(e.target.value)}>
                      <option value="Deposit">Deposit History</option>
                      <option value="Withdraw">Withdrawal History</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 12, md: 3 }}>
                <div className="form-item">
                  <div className="form-label">Player username</div>
                  <div className="form-value">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>
              </Col>
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
                    Player Deposit/Withdrawal History
                  </td>
                </tr>
              </thead>
            </table>
            <Table>
              <Thead>
                <Tr>
                  <Th>UserName</Th>
                  <Th>Date</Th>
                  <Th>Coin</Th>
                  <Th>Amount</Th>
                  <Th>Payment</Th>
                </Tr>
              </Thead>
              <Tbody>
                {isSubmitting ? (
                  <tr>
                    <td colSpan={5}>
                      <div className="grayRow" style={{ lineHeight: '40px' }}>
                        Loading...
                      </div>
                    </td>
                  </tr>
                ) : dataset.length ? (
                  dataset.map((player) => {
                    return (
                      <Tr>
                        <Td>{player.username || player.user_name}</Td>
                        <Td>{moment(player.time * 1000).format('YYYY-MM-DD HH:mm:ss')}</Td>
                        <Td>{player.coin}</Td>
                        <Td>{formatNumber(player.amount)}</Td>
                        <Td>{(player.type || '').toUpperCase()}</Td>
                      </Tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5}>
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
