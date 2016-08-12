/**
 * test
 * @type {[type]}
 */
var expect=require('expect.js');
var fl= require('../index');

describe('unit test start ...', function(){
    describe('basic calculation:', function() {
        beforeEach(function(done) {
            done();
        });
        describe('method add', function() {
            it('3.0 + 4.0 = 7.0', function(){
                //
                expect(fl.add(3.0,4.0)).to.eql(7.0);
            });
        });

        describe('method mul', function() {
            it('3.0 * 4.0 = 12.0', function(){
                //
                expect(fl.mul(3.0,4.0)).to.eql(12.0);
            });
        });

        describe('method sub', function() {
            it('4.0-3.0 = 1.0', function(){
                //
                expect(fl.sub(4.0,3.0)).to.eql(1.0);
            });
        });

        describe('method div', function() {
            it('12.0 / 4.0 = 3.0', function(){
                //
                expect(fl.div(12.0,4.0)).to.eql(3.0);
            });
        });

        afterEach(function(done) {
            done();
        });
    });
    //
    describe('more calculation:', function() {
        beforeEach(function(done) {
            done();
        });
        describe('method add', function() {
            it('3.0 + 4.0 + 5.1 = 12.1', function(){
                //console.log(fl.add(3.0,4.0,5.1));
                expect(fl.add(3.0,4.0,5.1)).to.eql(12.1);
            });
        });

        describe('method mul', function() {
            it('3.1 * 4.0 * 5.0 = 62', function(){
                //console.log(fl.mul(3.1,4.0,5.0));
                expect(fl.mul(3.1,4.0,5.0)).to.eql(62);
            });
        });

        describe('method sub', function() {
            it('4.1-3.0-1.0=0.1', function(){
                //console.log(fl.sub(4.1,3.0,1.0));
                expect(fl.sub(4.1,3.0,1.0)).to.eql(0.1);
            });
        });

        describe('method div', function() {
            it('12.0 / 4.0 / 3.0 = 1', function(){
                //console.log(fl.div(12.0,4.0,3));
                expect(fl.div(12.0,4.0,3)).to.eql(1);
            });
        });

        afterEach(function(done) {
            done();
        });
    });
    describe('others calculation:', function() {
        beforeEach(function(done) {
            done();
        });
        describe('method add empty', function() {
            it('fl.add()', function(){
                //
                expect(fl.add()).to.eql(0);
            });
        });
        describe('method add only one param', function() {
            it('fl.add(1)', function(){
                //
                expect(fl.add(1)).to.eql(1);
            });
        });

        describe('method mul empty', function() {
            it('fl.mul()', function(){
                //
                expect(fl.mul()).to.eql(0);
            });
        });
        describe('method mul only one param', function() {
            it('fl.mul(1)', function(){
                //
                expect(fl.mul(1)).to.eql(1);
            });
        });

        describe('method sub empty', function() {
            it('fl.sub()', function(){
                //
                expect(fl.sub()).to.eql(0);
            });
        });
        describe('method sub only one param', function() {
            it('fl.sub(1)', function(){
                //
                expect(fl.sub(1)).to.eql(1);
            });
        });

        describe('method div empty', function() {
            it('fl.div()', function(){
                //
                expect(fl.div()).to.eql(0);
            });
        });
        describe('method div only one param', function() {
            it('fl.div(1)', function(){
                //
                expect(fl.div(1)).to.eql(1);
            });
        });

        afterEach(function(done) {
            done();
        });
    });
});