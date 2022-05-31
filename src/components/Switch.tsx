import React from 'react';

import { createGlobalStyle, css } from 'styled-components';

const Switch = (props: { height: number }) => {
  const id = 'element_' + (Math.random() + '').replace('.', '');
  const CustomCSS = createGlobalStyle`
${() => css`
  #${id} .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  #${id} .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  #${id} .react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  #${id} .react-switch-checkbox:checked + .react-switch-label {
    background: lightgreen;
  }
  #${id} .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  #${id} .react-switch-label:active .react-switch-button {
    width: 60px;
  }
`}`;
  return (
    <div id={id} style={{ zoom: props.height / 60, display: 'flex', marginLeft: 'calc(50% - 60px)' }}>
      <CustomCSS />
      <input className="react-switch-checkbox" id={id + `react-switch-new`} type="checkbox" />
      <label className="react-switch-label" htmlFor={id + `react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;
