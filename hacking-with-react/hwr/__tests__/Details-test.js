jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Detail = require('../src/pages/Detail').default;

describe('Detail', () => {
  it('starts with zero commits', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo: ''}} />
    );

    expect(rendered.state.commits.length).toEqual(0);
  });

  it('renders commits by default', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo: ''}} />
    );

    expect(rendered.state.mode).toEqual('commits');
  });

  it('shows forks when the button is tapped', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo:''}} />
    );


    const forksButton = rendered.refs.forks;
    // We 'Click' the forks button
    TestUtils.Simulate.click(forksButton);

    expect(rendered.state.mode).toEqual('forks');
  });

  // We edit this one out because we don't wanna get banned from Github API
  // it('fetches forks from Github', () => {
  //   const rendered = TestUtils.renderIntoDocument(
  //     <Detail params={{repo: 'react'}} />
  //   );
  //
  //   beforeEach(() => {
  //     if (rendered.state.forks.length > 0) {
  //       console.log('Waiting for forks: ' + rendered.state.forks.length);
  //       done();
  //     }
  //   }, "commits to be set", 2000);
  //
  //   afterEach(() => {
  //     expect(rendered.state.forks.length).toEqual(30);
  //   });
  // });

  it('fetches forks from a local source', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo: ''}} />
    );

    const testData = require('./forks.json');
    rendered.saveFeed('forks', testData);
    rendered.selectMode('forks');

    expect(rendered.state.forks.length).toEqual(30);
  });

  it('checks that 30 forks are rendered', () => {
    const rendered = TestUtils.renderIntoDocument(
      <Detail params={{repo: ''}} />
    );

    const testData = require('./forks.json');
    rendered.saveFeed('forks', testData);
    rendered.selectMode('forks');

    const forks = TestUtils.scryRenderedDOMComponentsWithClass(rendered, 'github');
    
    expect(forks.length).toEqual(30);
  });
});
