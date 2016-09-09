#Integration Testing
##Explain what an integration test is.
An integration test is meant to verify functional, performance, and reliability requirements placed on the major use cases of a program. It does this by ensuring the multiple parts of a use case work together as a developer expects. Often an integration test verifies the functionality of a module even though its submodules have already been individually unit tested.

##Explain why integration tests are important.


##Use test-driven development to write integration tests.
Here's an example of an integration test for a fictitious HTTP server.

'use strict';

process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { suite, test } = require('mocha');

// The module that lets you send HTTP requests to an express server
// Super agent extends supertest's capabilities.
const request = require('supertest');
const server = require('../server');

suite('greet routes', () => {
  test('GET /greet', (done) => {
    request(server)
      .get('/greet')
      .expect('Content-Type', /plain/)
      .expect(200, 'Hello world', done);
  });

  test('POST /greet', (done) => {
    request(server)
      .post('/greet')
      .expect('Content-Type', /plain/)
      .expect(404, 'Not found', done);
  });
});
