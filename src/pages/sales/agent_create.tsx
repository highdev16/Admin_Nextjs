import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

import { createGlobalStyle, css } from 'styled-components';

import { Button } from '@paljs/ui';
import Switch from 'components/Switch';
import getUserInfo from 'src/utils/localstorage';
import { useRouter } from 'next/router';

const AgentCreate = () => {
  const CustomCSS = createGlobalStyle`
${() => css`
  .auth-layout .main-content {
    background-color: #e7e8ee;
    padding-top: 1rem;
  }
  .contentHeaderImage {
    border-width: 0rem;
  }
  div.header-blue {
    height: 100px;
    background: url(/images/sales/agent_group_header_bkg.png);
    background-size: cover;
    display: flex;
    position: relative;
  }
  div.white-title {
    margin: auto;
    padding-left: 3rem;
    padding-right: 3rem;
    height: 33px;
    margin-top: 0px;
    background: white;
    background-size: 334px 33px;
    color: black;
    line-height: 33px;
    font-weight: bold;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
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
  const router = useRouter();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(0);
  const [selectedPaymentOption, setPaymentSelectedOption] = React.useState(0);
  const getAvailableRoles = () => {
    const userInfo = getUserInfo();
    if (!userInfo) {
      return null;
    }
    const agentsLevels = {
      admin: ['SH', 'SSMA'],
      SH: ['SSMA'],
      SSMA: ['MA'],
      MA: ['Agent'],
    };
    return (
      <select>
        {(agentsLevels[userInfo.aLevel] || []).map((s) => {
          return (
            <option key={'agent_' + s} value={s}>
              {s}
            </option>
          );
        })}
      </select>
    );
  };

  React.useEffect(() => {
    const userInfo = getUserInfo();
    if (!userInfo) {
      return null;
    }
    if (userInfo.aLevel == 'admin') {
      router.push('/member/new_sh');
      return;
    }
    if (userInfo.aLevel == 'SH') {
      router.push('/member/new_ssma');
      return;
    }
  }, []);
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-blue">
            <div className="white-title">Create new agent account</div>
            <div className="tabs">
              <div className={'tab ' + (selectedTab === 0 && 'selected')} onClick={() => setSelectedTab(0)}>
                Agent Information
              </div>
              <div className={'tab ' + (selectedTab === 1 && 'selected')} onClick={() => setSelectedTab(1)}>
                Capital Percentage
              </div>
              <div className={'tab ' + (selectedTab === 2 && 'selected')} onClick={() => setSelectedTab(2)}>
                Custom %
              </div>
              <div className={'tab ' + (selectedTab === 3 && 'selected')} onClick={() => setSelectedTab(3)}>
                Game Settings
              </div>
            </div>
          </div>
          {selectedTab === 0 && (
            <div className="content-area">
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <div className="content-title">Basic Information</div>
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <table style={{ cursor: 'pointer' }}>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={selectedOption == 0 ? '/images/sales/checked.png' : '/images/sales/unchecked.png'}
                            style={{ width: 20 }}
                            onClick={() => setSelectedOption(0)}
                          />
                        </td>
                        <td onClick={() => setSelectedOption(0)} style={{ lineHeight: '20px', paddingRight: '1rem' }}>
                          Agent
                        </td>
                        <td>
                          {' '}
                          <img
                            src={selectedOption == 1 ? '/images/sales/checked.png' : '/images/sales/unchecked.png'}
                            style={{ width: 20 }}
                            onClick={() => setSelectedOption(1)}
                          />
                        </td>
                        <td onClick={() => setSelectedOption(1)} style={{ lineHeight: '20px' }}>
                          Member
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Agent Level</div>
                    <div className="form-value">{getAvailableRoles()}</div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Real Name</div>
                    <div className="form-value">
                      <input type="text"></input>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">ID Agent</div>
                    <div className="form-value">
                      <input type="text"></input>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Member Level</div>
                    <div className="form-value">
                      <select>
                        <option value="SMA">Default</option>
                      </select>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Password</div>
                    <div className="form-value">
                      <input type="password"></input>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Confirm Password</div>
                    <div className="form-value">
                      <input type="password"></input>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Phone number</div>
                    <div className="form-value">
                      <input type="text"></input>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Note</div>
                    <div className="form-value">
                      <input type="text"></input>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Upstream Agent Code</div>
                    <div className="form-value">
                      <select>
                        <option value="SMA">safas9</option>
                      </select>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Payment Cycle</div>
                    <div className="form-value">
                      <select>
                        <option value="SMA">Daily</option>
                      </select>
                    </div>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 3 }}>
                  <div className="form-item">
                    <div className="form-label">Currency</div>
                    <div className="form-value">
                      <select>
                        <option value="SMA">VND</option>
                      </select>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 6 }}>
                  <div style={{ textAlign: 'right' }}>
                    <Button style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}>
                      Cancel
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
                    >
                      Next
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {selectedTab === 1 && (
            <div className="content-area">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr className="titleimg">
                    <td
                      colSpan={5}
                      style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}
                    >
                      Agent Capital
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '20%', height: '40px' }}>Deposit bonus %</td>
                    <td style={{ width: '20%' }}>Other bonus %</td>
                    <td style={{ width: '20%' }}>Return %</td>
                    <td style={{ width: '20%' }}>Jackpot bonus %</td>
                    <td style={{ width: '20%' }}>Marketing bonus %</td>
                  </tr>
                  <tr>
                    <td colSpan={5}>
                      <div className="grayRow">
                        <table>
                          <tbody>
                            <tr>
                              <td style={{ width: '20%', height: '40px' }}>56</td>
                              <td style={{ width: '20%' }}>45</td>
                              <td style={{ width: '20%' }}>11</td>
                              <td style={{ width: '20%' }}>2</td>
                              <td style={{ width: '20%' }}>33</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className="titleimg">
                    <td
                      colSpan={5}
                      style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}
                    >
                      System fee (system fee = total winnings and losing customers * % system fee)
                    </td>
                  </tr>
                  <tr className="grayRow">
                    <td colSpan={5}>
                      <div className="grayRow">
                        <table>
                          <tbody>
                            <tr>
                              <td style={{ width: '20%', height: '40px', textAlign: 'left', paddingLeft: '1rem' }}>
                                100
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ height: '1rem' }}></div>
              <Row>
                <Col breakPoint={{ xs: 6 }}>
                  <div style={{ textAlign: 'right' }}>
                    <Button style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}>
                      Cancel
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
                    >
                      Next
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {selectedTab === 2 && (
            <div className="content-area">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr className="titleimg">
                    <td style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}>
                      Payment cycle
                    </td>
                  </tr>
                  <tr>
                    <td style={{ height: '60px' }}>
                      <table style={{ cursor: 'pointer' }}>
                        <tbody>
                          <tr>
                            <td>
                              {' '}
                              <img
                                src={
                                  selectedPaymentOption == 0
                                    ? '/images/sales/checked.png'
                                    : '/images/sales/unchecked.png'
                                }
                                style={{ width: 20 }}
                                onClick={() => setPaymentSelectedOption(0)}
                              />
                            </td>
                            <td
                              onClick={() => setPaymentSelectedOption(0)}
                              style={{ lineHeight: '20px', paddingRight: '1rem' }}
                            >
                              Daily ( 00: 00 ~ 23: 59 GMT +8){' '}
                            </td>
                            <td>
                              {' '}
                              <img
                                src={
                                  selectedPaymentOption == 1
                                    ? '/images/sales/checked.png'
                                    : '/images/sales/unchecked.png'
                                }
                                style={{ width: 20 }}
                                onClick={() => setPaymentSelectedOption(1)}
                              />
                            </td>
                            <td
                              onClick={() => setPaymentSelectedOption(1)}
                              style={{ lineHeight: '20px', paddingRight: '1rem' }}
                            >
                              Weekly( 00: 00 Monday~ 23: 59 Sunday GMT +8){' '}
                            </td>
                            <td>
                              {' '}
                              <img
                                src={
                                  selectedPaymentOption == 2
                                    ? '/images/sales/checked.png'
                                    : '/images/sales/unchecked.png'
                                }
                                style={{ width: 20 }}
                                onClick={() => setPaymentSelectedOption(2)}
                              />
                            </td>
                            <td onClick={() => setPaymentSelectedOption(2)} style={{ lineHeight: '20px' }}>
                              Monthly
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr className="titleimg">
                    <td
                      colSpan={5}
                      style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}
                    >
                      Statistical conditions
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Row>
                        <Col breakPoint={{ xs: 5 }}>
                          <div className="form-item">
                            <div className="form-label">Total operating revenue:</div>
                            <div className="form-value">
                              <input type="text" />
                            </div>
                          </div>
                        </Col>
                        <Col breakPoint={{ xs: 5 }}>
                          <div className="form-item">
                            <div className="form-label">Number of active guests:</div>
                            <div className="form-value">
                              <input type="text" />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </td>
                  </tr>

                  <tr className="titleimg">
                    <td
                      colSpan={5}
                      style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}
                    >
                      Customer operating conditions ( at least 1 line, must be even number &gt; 0)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Row>
                        <Col breakPoint={{ xs: 5 }}>
                          <div className="form-item">
                            <div className="form-label">Lowest effective bet:</div>
                            <div className="form-value">
                              <input type="text" />
                            </div>
                          </div>
                        </Col>
                        <Col breakPoint={{ xs: 5 }}>
                          <div className="form-item">
                            <div className="form-label">Lowest charge:</div>
                            <div className="form-value">
                              <input type="text" />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </td>
                  </tr>

                  <tr className="titleimg">
                    <td
                      colSpan={5}
                      style={{ textAlign: 'center', padding: '1rem', color: 'white', fontWeight: 'bold' }}
                    >
                      % Game
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Row>
                        <Col breakPoint={{ xs: 5 }}>
                          <div className="form-item">
                            <div className="form-label">Maximum value 8%:</div>
                            <div className="form-value">
                              <input type="text" />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ height: '1rem' }}></div>
              <Row>
                <Col breakPoint={{ xs: 6 }}>
                  <div style={{ textAlign: 'right' }}>
                    <Button style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}>
                      Cancel
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
                    >
                      Next
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {selectedTab === 3 && (
            <div className="content-area">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr className="titleimg" style={{}}>
                    <td style={{ color: 'white', width: '12%', height: '40px' }}>Live Casino</td>
                    <td style={{ color: 'white', width: '8%' }}>Status</td>
                    <td style={{ color: 'white', width: '12%' }}>Sport Book</td>
                    <td style={{ color: 'white', width: '8%' }}>Status</td>
                    <td style={{ color: 'white', width: '12%' }}>Slot games</td>
                    <td style={{ color: 'white', width: '8%' }}>Status</td>
                    <td style={{ color: 'white', width: '12%' }}>Jackpot</td>
                    <td style={{ color: 'white', width: '8%' }}>Status</td>
                    <td style={{ color: 'white', width: '12%' }}>MPG</td>
                    <td style={{ color: 'white', width: '8%' }}>Status</td>
                  </tr>

                  <tr>
                    <td colSpan={10}>
                      {[1, 2, 3, 4, 5, 6, 7].map((_) => {
                        return (
                          <div className="grayRow">
                            <table style={{ width: '100%' }}>
                              <tbody>
                                <tr>
                                  <td style={{ width: '12%', height: '40px' }}>Game 1</td>
                                  <td style={{ width: '8%' }}>
                                    <Switch height={30} />
                                  </td>
                                  <td style={{ width: '12%' }}>Game2</td>
                                  <td style={{ width: '8%' }}>
                                    <Switch height={30} />
                                  </td>
                                  <td style={{ width: '12%' }}>Game3</td>
                                  <td style={{ width: '8%' }}>
                                    <Switch height={30} />
                                  </td>
                                  <td style={{ width: '12%' }}>Game4</td>
                                  <td style={{ width: '8%' }}>
                                    <Switch height={30} />
                                  </td>
                                  <td style={{ width: '12%' }}>Game5</td>
                                  <td style={{ width: '8%' }}>
                                    <Switch height={30} />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ height: '1rem' }}></div>

              <Row>
                <Col breakPoint={{ xs: 6 }}>
                  <div style={{ textAlign: 'right' }}>
                    <Button style={{ border: '0px', background: 'gray', color: 'white', width: '100px' }}>
                      Cancel
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
                    >
                      Next
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentCreate;
