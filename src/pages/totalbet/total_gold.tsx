import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

import { createGlobalStyle, css } from 'styled-components';
import { breakpointDown } from '@paljs/ui/breakpoints';
import Select from '@paljs/ui/Select';

const MoneyLine = () => {
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
    background: url(/images/totalbet/member_total/header.png);
    background-size: cover;
    display: flex;
  }
  div.white-title {
    position: absolute;
    margin: auto;
    margin-left: 3rem;
    margin-right: 0rem;
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
  div.cash-option,
  div.credit-option {
    color: gray;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 2px solid gray;
    border-top: 0px solid gray;
    background: #0000;
  }
  div.selected {
    background: url(/images/totalbet/member_total/credit.png);
    background-size: 100% 100%;
    color: white;
    border: 0px solid gray;
  }
  #contentTableObj {
    border: 0px solid black;
    border-collapse: collapse;
  }
  #contentTable tr {
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    border: 0px solid white;
    position: relative;
  }
  #contentTable tr {
    background-color: #d7f5eb;
    width: 50%;
    color: #051139;
  }
  #contentTableObj,
  #Main-contentTableObj {
    width: 100%;
  }
  #Main-contentTableObj {
    height: calc(100vh - 300px);
    background: white;
  }
  #Main-contentTableObj * {
    color: black;
  }
  ${breakpointDown('sm')`
    div.white-title {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      float: left;
    }
    div.header-blue {
      border-radius: 7px;
      height: 130px;
    }
    div.header-blue {
      display: block;
    }
  `}

  div.ticket {
    width: 200px;
    height: 70px;
    margin: auto;
    position: relative;
    background: linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%);
    border-radius: 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 70px;
    grid-template-areas: 'small-title right-icon' 'big-title right-icon';
    display: grid;
  }
  div.ticket div.small-title {
    justify-content: bottom;
    display: flex;
    grid-area: small-title;
    margin-left: 1rem;
    margin-bottom: 0rem;
    text-align: left;
    color: #aaa;
    justify-content: end;
    flex-direction: column;
  }
  div.ticket div.right-icon {
    display: flex;
    background: url(/images/totalbet/member_total/Icon.png);
    width: 56px;
    height: 56px;
    grid-area: right-icon;
    margin: auto;
  }
  div.ticket div.right-icon > img {
    margin: auto;
  }
  div.ticket div.big-title {
    margin-left: 1rem;
    margin-top: 0rem;
    grid-area: big-title;
    text-align: left;
    font-weight: bold;
  }
  div.select {
    height: 36px;
  }
  div.ticket.select {
    display: block;
    margin-bottom: 1rem;
  }
`}`;
  return (
    <Layout title="Accordions">
      <CustomCSS />
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col className="centerAll" breakPoint={{ xs: 12, md: 12 }}>
          <img src="/images/logo_black.png" className="contentHeaderImage" />
          <div className="header-blue">
            <div className="white-title">Total Gold</div>
            <div className="ticket select">
              <Select style={{ width: '100%' }} options={[{ value: 'Simple Mode', label: 'Simple Mode' }]} />
            </div>
            <div className="ticket select">
              <Select style={{ width: '100%' }} options={[{ value: 'Select Language', label: 'Simple Mode' }]} />
            </div>
            <div className="ticket select">
              <Select style={{ width: '100%' }} options={[{ value: 'Monitor', label: 'Simple Mode' }]} />
            </div>
            <div className="ticket">
              <div className="small-title">Currency</div>
              <div className="big-title">SGD</div>
              <div className="right-icon">
                <img src="/images/totalbet/member_total/s-icon.png" />
              </div>
            </div>
            <div className="ticket">
              <div className="small-title">Loading</div>
              <div className="big-title">Refresh</div>
              <div className="right-icon">
                <img src="/images/totalbet/member_total/lightning.svg" />
              </div>
            </div>
          </div>
          <table id="contentTableObj">
            <tbody id="contentTable">
              <tr>
                <td style={{ width: '20%' }}>Time</td>
                <td style={{ width: '20%', borderLeft: '1px solid black' }}>Teams</td>
                <td style={{ width: '20%', borderLeft: '1px solid black' }}>Best List</td>
                <td style={{ width: '10%', borderLeft: '1px solid black' }}>0-1</td>
                <td style={{ width: '10%', borderLeft: '1px solid black' }}>2-3</td>
                <td style={{ width: '10%', borderLeft: '1px solid black' }}>4-6</td>
                <td style={{ width: '20%', borderLeft: '1px solid black' }}>7 & Over</td>
              </tr>
            </tbody>
          </table>
          <table id="Main-contentTableObj">
            <tbody id="Main-contentTable">
              <tr>
                <td>
                  <img src="/images/not_found_content.png" />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Layout>
  );
};

export default MoneyLine;
