'use strict';

let parser = require('../../src/lib/parser.js');

describe("URL parser", () => {

    it ('require a request object', () => {
        let req = undefined;
        return parser(req)
        .then(response => false)
        .catch(err=> expect(err).toBeDefined());
    });

    it('requires a req object with url', () => {
        let req = {};
        return parser(req)
          .then( response => false )
          .catch( err => expect(err).toBeDefined() );
      });

      it('given a url returns an object', () => {
        let req = { url: 'http://localhost' };
        return parser(req)
          .then( request => expect(typeof request.url).toEqual('object') )
          .catch( err => false );
      });

      it('given a complicated url, properly pars4es it', () => {
        let req = { method:'GET', url: 'http://localhost?x=y&w=z' };
        return parser(req)
          .then( request => {
            expect(request.url.query.x).toEqual('y');
            expect(request.url.query.w).toEqual('z');
          })
          .catch( console.error );
      });
    
 });