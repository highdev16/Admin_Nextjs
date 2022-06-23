import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

import { createGlobalStyle, css } from 'styled-components';

const CustomCSS = createGlobalStyle`
${() => css`
  .auth-layout .main-content {
    background-color: #e7e8ee;
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
  #contentTable tr {
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    border: 0px solid white;
    position: relative;
  }
  #contentTable tr td:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-align: left;
    padding-left: 70px;
    width: 60%;
  }
  #contentTable tr td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 40%;
  }
  #contentTable tr::after {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 5px;
    width: calc(100% - 10px);
    height: 1px;
    -webkit-box-shadow: 0px 0px 9px #000000;
    -moz-box-shadow: 0px 0px 9px #000000;
    box-shadow: 0px 0px 9px #000000;
    z-index: 100;
  }
  #contentTable tr:nth-child(2n) {
    background-color: #d7f5eb;
    width: 50%;
    color: #051139;
  }
  #contentTable tr:nth-child(2n + 1) {
    background-color: #dceffd;
    width: 50%;
    color: #051139;
  }
  #contentTableObj {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0px 5px;
  }
`}`;

const Accordions = () => {
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col breakPoint={{ xs: 0, md: 2 }} />
        <Col className="centerAll" breakPoint={{ xs: 12, md: 8 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-white">
            <div className="blue-title">Total Bet (Risk Management)</div>
          </div>
          <table id="contentTableObj">
            <tbody id="contentTable">
              <tr>
                <td>Username:</td>
                <td>Wewin247pro</td>
              </tr>
              <tr>
                <td>Login Name:</td>
                <td>Wewin247pro</td>
              </tr>
              <tr>
                <td>Total SH count:</td>
                <td>Wewin247pro</td>
              </tr>
              <tr>
                <td>Total Direct SSMA Count:</td>
                <td>Wewin247pro</td>
              </tr>
              <tr>
                <td>Total SSMA Count:</td>
                <td>Wewin247pro</td>
              </tr>
              <tr>
                <td>Total MA Count:</td>
                <td>Wewin247pro</td>
              </tr>
              <tr>
                <td>Total Associate Count:</td>
                <td>Wewin247pro</td>
              </tr>
              <tr>
                <td>Total Credit Member Count:</td>
                <td>Wewin247pro</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Layout>
  );
};

export default Accordions;
