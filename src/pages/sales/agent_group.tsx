import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

import { createGlobalStyle, css } from 'styled-components';
import getUserInfo from '../../utils/localstorage';

import { Button } from '@paljs/ui';
import APICall from 'utils/server_config';
import getNextLevel from 'utils/level';

const AgentGroup = () => {
  const [filterBy, setFilterBy] = React.useState('Agent ID');
  const [dataset, setDatasets] = React.useState([]);
  const [parentUser, setParentUser] = React.useState('');
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
    background: transparent;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border: 2px solid white;
    border-bottom: 0px solid black;
    color: white;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  div.tabs div.tab.selected {
    background: white;
    color: black;
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
`}`;

  const getHyperLink = (agent) => {
    return (
      <a
        href="javascript:void(0)"
        style={{ color: 'blue' }}
        onClick={(e) => {
          APICall(
            '/api/sales/get_agents',
            {
              mode: 'agent level',
              user: agent.username,
              value: getNextLevel(agent.agent_level),
            },
            (data) => {
              setParentUser(agent.username);
              setDatasets(data);
            },
            (e) => {
              if (e[0] == 'login_issue') {
                router.push('/auth/login');
              } else alert(e[1] || 'Failed to load data.');
            },
          );
        }}
      >
        {agent.username}
      </a>
    );
  };

  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Agent Group</div>
          </div>
          <div className="content-area">
            <Row>
              <Col breakPoint={{ xs: 12 }}>
                <div className="content-title">Tìm kiếm</div>
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 3 }}>
                <div className="form-item">
                  <div className="form-label">Filter</div>
                  <div className="form-value">
                    <select
                      onChange={(e) => {
                        setFilterBy(e.target.value);
                      }}
                      id="agent_filter_mode"
                    >
                      <option value="Agent ID">Agent ID</option>
                      <option value="Agent Level">Agent Level</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col breakPoint={{ xs: 3 }}>
                {' '}
                {filterBy !== 'Agent ID' ? (
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
                ) : (
                  <div className="form-item">
                    <div className="form-label">Agent ID</div>
                    <div className="form-value">
                      <input type="text" id="agent_id_filter" />
                    </div>
                  </div>
                )}
              </Col>
              <Col breakPoint={{ xs: 3 }}>
                {filterBy !== 'Agent ID' && (
                  <div className="form-item">
                    <div className="form-label">Status</div>
                    <div className="form-value">
                      <select id="status">
                        <option value="All">All</option>
                        <option value="Activated">Activated</option>
                        <option value="Delayed">Delayed</option>
                        <option value="Disabled">Disabled</option>
                      </select>
                    </div>
                  </div>
                )}
              </Col>
              <Col breakPoint={{ xs: 3 }}>
                {filterBy !== 'Agent ID' && (
                  <div className="form-item">
                    <div className="form-label">Payment Cycle</div>
                    <div className="form-value">
                      <select id="payment_cycle">
                        <option value="All">All</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                      </select>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 6 }}>
                <div style={{ textAlign: 'right' }}>
                  <Button
                    style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}
                    onClick={() => {
                      setFilterBy('Agent ID');
                      document.getElementById('agent_filter_mode').value = 'Agent ID';
                      document.getElementById('agent_id_filter')
                        ? (document.getElementById('agent_id_filter').value = '')
                        : 0;
                      document.getElementById('payment_cycle')
                        ? (document.getElementById('payment_cycle').value = 'All')
                        : 0;
                      document.getElementById('status') ? (document.getElementById('status').value = 'All') : 0;
                      document.getElementById('agent_level')
                        ? (document.getElementById('agent_level').value = getNextLevel(userInfo.aLevel))
                        : 0;
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
                      width: '170px',
                    }}
                    onClick={() => {
                      APICall(
                        '/api/sales/get_agents',
                        {
                          mode: filterBy,
                          value:
                            filterBy == 'Agent ID'
                              ? document.getElementById('agent_id_filter').value
                              : document.getElementById('agent_level').value,
                          status: document.getElementById('status') ? document.getElementById('status').value : '',
                          payment_cycle: document.getElementById('payment_cycle')
                            ? document.getElementById('payment_cycle').value
                            : '',
                        },
                        (data) => {
                          setDatasets(data);
                        },
                        (e) => {
                          if (e[0] == 'login_issue') {
                            router.push('/auth/login');
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

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <tbody>
                <tr className="titleimg">
                  <td colSpan={11} style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}>
                    Agent Group {parentUser && `(${parentUser})`}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '7%', height: '40px' }}>ID Agent</td>
                  <td style={{ width: '7%' }}>Agent Level</td>
                  <td style={{ width: '7%' }}>Real name</td>
                  <td style={{ width: '7%' }}>Payment cycle</td>
                  <td style={{ width: '13%' }}>Total number of agent</td>
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
                    {dataset.map((agent, i) => (
                      <div className="grayRow" key={'row_' + i}>
                        <table style={{ width: '100%' }} className="notranslate">
                          <tbody>
                            <tr>
                              <td style={{ width: '7%', height: '40px' }}>{getHyperLink(agent)}</td>
                              <td style={{ width: '7%' }}>{agent.agent_level}</td>
                              <td style={{ width: '7%' }}>{agent.first_name + ' ' + agent.last_name}</td>
                              <td style={{ width: '7%' }}>{agent.payment_cycle}</td>
                              <td style={{ width: '13%' }}>{agent.total_agent}</td>
                              <td style={{ width: '13%' }}>{agent.total_players}</td>
                              <td style={{ width: '7%' }}>{agent.status}</td>
                              <td style={{ width: '13%' }}>{agent.lastUpdated}</td>
                              <td style={{ width: '7%' }}>{agent.note}</td>
                              <td style={{ width: '7%' }}>{agent.operation}</td>
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

export default AgentGroup;
