import React from 'react';

describe('bowling score', () => {

  let rolls;
  let Game;

  beforeEach(() => {
    rolls = [];
    Game = {
      roll : (round) => {
        rolls.push(round);
      },
      score: () => {
        let total = 0;
        for(let firstInFrame = 0; firstInFrame < rolls.length; firstInFrame+=2 ){
          let frame = rolls[firstInFrame] + rolls[firstInFrame+1];
          if (rolls.length % 2 == 0 && frame === 10) {
            frame += rolls[firstInFrame+2]
          }
          total += frame;
        }
        return total;
      }
    };
  });

  it('Play game will take a roll', function () {
    Game.roll(0);
    expect(rolls.length).toEqual(1);
  });

  it('Play game will take multiple rounds', function () {
    Game.roll(0);
    Game.roll(0);
    expect(rolls.length).toEqual(2);
  });

  it('can play a game with all rounds', function () {
    playGame(20, 0);
    expect(rolls.length).toEqual(20);
  });

  it('game of all zeros will have a score of zero', function () {
    playGame(20, 0);
    expect(Game.score()).toEqual(0);
  });

  it('game of all 1s will have a score of 20', function () {
    playGame(20, 1);
    expect(Game.score()).toEqual(20);
  });

  it('game can play a spare', function () {
    Game.roll(5);
    Game.roll(5);
    Game.roll(5);
    playGame(17, 0);
    expect(Game.score()).toEqual(20);
  });

  it('game can play a final spare', function () {
    playGame(18, 0);
    Game.roll(5);
    Game.roll(5);
    Game.roll(5);
    expect(Game.score()).toEqual(20);
  });

  let playGame = function(rounds, pins) {
    for (let i = 1; i<=rounds; i++) {
      Game.roll(pins);
    }
  };

});
