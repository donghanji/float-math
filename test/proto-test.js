/**
 * test
 * @type {[type]}
 */
var expect=require('expect.js');
var fl= require('../dest/proto/float-math');

describe('proto-test unit test start ...', function(){
    describe('basic calculation:', function() {
        var f1=3.0;
        var f2=4.0;
        beforeEach(function(done) {
            done();
        });
        describe('method add', function() {
            it('3.0 + 4.0 = 7.0', function(){
                //
                expect(f1.add(f2)).to.eql(7.0);
            });
        });

        describe('method mul', function() {
            it('3.0 * 4.0 = 12.0', function(){
                //
                expect(f1.mul(f2)).to.eql(12.0);
            });
        });

        describe('method sub', function() {
            it('4.0-3.0 = 1.0', function(){
                //
                expect(f2.sub(f1)).to.eql(1.0);
            });
        });

        describe('method div', function() {
            var f1=12.0;
            it('12.0 / 4.0 = 3.0', function(){
                //
                expect(f1.div(f2)).to.eql(3.0);
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
            var f1=3.0;
            it('3.0 + 4.0 + 5.1 = 12.1', function(){
                //console.log(f1.add(4.0,5.1));
                expect(f1.add(4.0,5.1)).to.eql(12.1);
            });
        });

        describe('method mul', function() {
            var f1=3.1;
            it('3.1 * 4.0 * 5.0 = 62', function(){
                //console.log(f1.mul(4.0,5.0));
                expect(f1.mul(4.0,5.0)).to.eql(62);
            });
        });

        describe('method sub', function() {
            var f1=4.1;
            it('4.1-3.0-1.0=0.1', function(){
                //console.log(f1.sub(3.0,1.0));
                expect(f1.sub(3.0,1.0)).to.eql(0.1);
            });
        });

        describe('method div', function() {
            var f1=12.0;
            it('12.0 / 4.0 / 3.0 = 1', function(){
                //console.log(f1.div(4.0,3));
                expect(f1.div(4.0,3)).to.eql(1);
            });
        });

        afterEach(function(done) {
            done();
        });
    });
    describe('others calculation:', function() {
        var f1=1;
        beforeEach(function(done) {
            done();
        });
        describe('method add empty', function() {
            it('f1.add()', function(){
                //console.log('f1.add():',f1.add());
                expect(f1.add()).to.eql(1);
            });
        });
        describe('method add only one param', function() {
            //
            it('f1.add(1)', function(){
                //
                expect(f1.add(f1)).to.eql(2);
            });
        });

        describe('method mul empty', function() {
            it('f1.mul()', function(){
                //
                expect(f1.mul()).to.eql(1);
            });
        });
        describe('method mul only one param', function() {
            //
            it('f1.mul(1)', function(){
                //
                expect(f1.mul(f1)).to.eql(1);
            });
        });

        describe('method sub empty', function() {
            it('f1.sub()', function(){
                //
                expect(f1.sub()).to.eql(1);
            });
        });
        describe('method sub only one param', function() {
            //
            it('f1.sub(1)', function(){
                //
                expect(f1.sub(f1)).to.eql(0);
            });
        });

        describe('method div empty', function() {
            it('f1.div()', function(){
                //
                expect(f1.div()).to.eql(1);
            });
        });
        describe('method div only one param', function() {
            //
            it('f1.div(1)', function(){
                //
                expect(f1.div()).to.eql(1);
            });
        });

        afterEach(function(done) {
            done();
        });
    });
});