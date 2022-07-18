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
import setUserInfo from '../../utils/localstorageset';
import getUserInfo from '../../utils/localstorage';

const AgentReport = () => {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [dataset, setDatasets] = React.useState([]);
  const userInfo = getUserInfo();
  React.useEffect(() => {}, []);
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
            <div className="blue-title">Change Password</div>
          </div>
          <div className="content-area">
            <table style={{ marginTop: '2rem' }}>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/sales/Key_fill.png" />
                  </td>
                  <td style={{ textAlign: 'left' }}>Password Policy</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/sales/Subtract.png" />
                  </td>
                  <td style={{ textAlign: 'left' }}>Your password length must between 6-20 characters</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/sales/Subtract.png" />
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    Your password must include a combination of characters (uppercase or lowercase letters) and numbers
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/sales/Subtract.png" />
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    Your password must not contain your login name first and last name
                  </td>
                </tr>
              </tbody>
            </table>
            <Row>
              <Col breakPoint={{ xs: 12, md: 6 }}>
                <div className="form-item">
                  <div className="form-label" style={{ width: 150 }}>
                    Current Password
                  </div>
                  <div className="form-value">
                    <input type="password" autoComplete="off" id="current_password" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 12, md: 6 }}>
                <div className="form-item">
                  <div className="form-label" style={{ width: 150 }}>
                    New Password
                  </div>
                  <div className="form-value">
                    <input type="password" autoComplete="off" id="new_password" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 12, md: 6 }}>
                <div className="form-item">
                  <div className="form-label" style={{ width: 150 }}>
                    Confirm Password
                  </div>
                  <div className="form-value">
                    <input type="password" autoComplete="off" id="confirm_password" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col breakPoint={{ xs: 12, md: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <table>
                    <tbody>
                      <tr>
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
                              if (
                                document.getElementById('new_password').value !=
                                document.getElementById('confirm_password').value
                              )
                                return alert("Passwords don't match.");
                              var password = document.getElementById('new_password').value,
                                error = '';
                              if (password.length > 20 || password.length < 6) error = 'Should be 6-20 characters.';
                              if (!password.match(/[a-z]/g)) error = 'Should contain lowercase letter.';
                              if (!password.match(/[A-Z]/g)) error = 'Should contain uppercase letter.';
                              if (!password.match(/[0-9]/g)) error = 'Should contain number';
                              if (error) alert('Password ' + error.toLowerCase());
                              setSubmitting(true);
                              APICall(
                                '/api/security/change_password',
                                {
                                  old: document.getElementById('current_password').value,
                                  new: document.getElementById('new_password').value,
                                },
                                (data) => {
                                  if (data === true) {
                                    var flag = 0;
                                    if (!userInfo.passwordsetup) flag = 1;
                                    setUserInfo('passwordsetup', true);
                                    alert('Successfully updated.');
                                    document.getElementById('current_password').value =
                                      document.getElementById('new_password').value =
                                      document.getElementById('confirm_password').value =
                                        '';
                                    setTimeout(() => {
                                      if (flag) window.location.href = '/security/change_pin_code';
                                    }, 500);
                                  } else {
                                    alert(data);
                                  }
                                  setSubmitting(false);
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
                            {isSubmitting ? 'Updating...' : 'Update Password'}
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default AgentReport;
