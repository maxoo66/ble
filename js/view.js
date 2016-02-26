'use strict';

var View = {};
View.build = function() {
  return Object.create(
    View.proto,
    View.state
  );
};
View.proto = {
  initialize: function() {

  },
  setGame: function(game) {
    this.game = game;
  },
  updateView: function() {
    this.updateTankA(this.game.fieldA.tank);
    this.updateTankB(this.game.fieldB.tank);
    this.updateTankC(this.game.fieldC.tank);
    this.updateScore(this.game.score);
    this.updateReserve(this.game.reserve);
    this.updateMoney(this.game.money);
  },
  updateRecoltA: function(state) {
    var buttonA = document.getElementById('recoltA');
    buttonA.disabled = state;
  },
  updateRecoltB: function(state) {
    var buttonB = document.getElementById('recoltB');
    buttonB.disabled = state;
  },
  updateRecoltC: function(state) {
    var buttonC = document.getElementById('recoltC');
    buttonC.disabled = state;
  },
  updateTankA: function(value) {
    var tankAInput = document.getElementById('tankA');
    tankAInput.value = value;
  },
  updateTankB: function(value) {
    var tankBInput = document.getElementById('tankB');
    tankBInput.value = value;
  },
  updateTankC: function(value) {
    var tankCInput = document.getElementById('tankC');
    tankCInput.value = value;
  },
  updateScore: function(score) {
    var scoreInput = document.getElementById('score');
    scoreInput.value = score;
  },
  updateReserve: function(reserve) {
    var reserveInput = document.getElementById('reserve');
    reserveInput.value = reserve;
  },
  updateMoney: function(money) {
    var moneyInput = document.getElementById('money');
    moneyInput.value = money;
  },
  update: function() {
    this.updateView();
  }
};
View.state = {
  game: {writable: true, value: 3, enumerable: true}
};

mixin(Observable, View);