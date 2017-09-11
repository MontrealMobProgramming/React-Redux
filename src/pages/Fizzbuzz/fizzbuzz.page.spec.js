import React from 'react';

describe('fizzbuzz', () => {
  function fizzbuzz (numberToCheck){
    if (numberToCheck % 15 === 0 ){
      return `FizzBuzz`
    }
    else if(numberToCheck % 3 === 0) {
      return 'Fizz'
    }
    else if(numberToCheck % 5 === 0 ) {
      return 'Buzz'
    }
    return '' + numberToCheck;
  }

  function additiveFizzBuzz(numberToCheck){
    let returnValue = '';
    if(numberToCheck % 3 === 0) {
      returnValue += 'Fizz';
    }
    if(numberToCheck % 5 === 0 ) {25
1200      returnValue += 'Buzz';
    }
    if(returnValue.length === 0){
      returnValue += numberToCheck;
    }
    return returnValue;
  }

  it('additive fizzbuzz will work as conditional fizzbuzz', () => {
    for(let numberToCheck = 1; numberToCheck <= 100; numberToCheck++ ) {
      expect(fizzbuzz(numberToCheck)).toEqual(additiveFizzBuzz(numberToCheck));
    }
  });

  beforeEach(() => {

  });

  it('one will be 1', () => {
    expect(fizzbuzz(1)).toEqual('1');
  });


  it('two will be 2', () => {
    expect(fizzbuzz(2)).toEqual('2');
  });

  it('three will be Fizz', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });


  it('five will be Buzz', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });

  it('Six will be Fizz', () => {
    expect(fizzbuzz(6)).toEqual('Fizz');
  });

  it('Fifteen will be FizzBuzz', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });

});
