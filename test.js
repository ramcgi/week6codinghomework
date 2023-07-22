// let assert = require('chai').assert;

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
let expect = chai.expect;



describe('greaterThanTen()', function(){
    it('should return true if the number is greater than 10', function(){
        expect(deck.length).to.equal(52);
        
    });
    it('should return false if the number is less than 10', function(){
        expect(greaterThanTen(9)).to.equal(false);
    });

    it('should return false if the number is equal to 10', function(){
        expect(greaterThanTen(10)).to.equal(false);
    });
});

describe('createArray()', function(){
    it('should return an array', function(){
        expect(createArray()).to.be.an('array');
    }
    );
    it('should return an array of length 3', function(){
        expect(createArray()).to.have.lengthOf(3);
    }
    );
    it('should return an array with 1, 2, 3', function(){
        expect(createArray()).to.include(1, 2, 3);
    }
    );
});

describe('Testing the Multiply Function', function(){
    it('should return a number', function(){
        expect(multiply(2, 3)).to.be.a('number');
    }
    );
    it('should return 6 when passed 2 and 3', function(){
        expect(multiply(2, 3)).to.equal(6);
    }
    );
    it('should return 0 when passed 0 and 3', function(){
        expect(multiply(0, 3)).to.equal(0);
    }
    );
    it('should return 0 when passed 0 and 0', function(){
        expect(multiply(0, 0)).to.equal(0);
    }
    );
    it('should return -6 when passed -2 and 3', function(){
        expect(multiply(-2, 3)).to.equal(-6);
    }
    );
    it('should return 6 when passed -2 and -3', function(){
        expect(multiply(-2, -3)).to.equal(6);
    }
    );
    it('should return 6 when passed 2 and -3', function(){
        expect(multiply(2, -3)).to.equal(-6);
    }
    );
});