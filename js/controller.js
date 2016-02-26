'use strict';

var Controller = {};
Controller.build = function() {
  return Object.create(
    Controller.proto,
    Controller.state
  );
};
Controller.proto = {
  setGame: function(game) {
    this.game = game;
  },
  setView: function(view) {
    this.view = view;
  },
  initializeGame: function() {
    this.view.updateView();
  },
  startGame: function() {
    game.fieldA.startTimer();
    game.fieldB.startTimer();
    game.fieldC.startTimer();
  },
  update: function() {
    if(game.fieldA.maturity == 20) {
      this.view.updateRecoltA(false);
    } else {
      this.view.updateRecoltA(true);
    }
    if(game.fieldB.maturity == 20) {
      this.view.updateRecoltB(false);
    } else {
      this.view.updateRecoltB(true);
    }
    if(game.fieldC.maturity == 20) {
      this.view.updateRecoltC(false);
    } else {
      this.view.updateRecoltC(true);
    }
  },
  buywater: function() {
    var quantityInput = document.getElementById('waterQuantity');
    var quantity = parseInt(quantityInput.value);
    this.game.money -= quantity * 1;
    this.game.reserve += quantity;
    this.view.updateView();
  },
  irrigateFieldA: function() {
    this.game.reserve--;
    this.game.fieldA.tank++;
    this.view.update();
  },
  irrigateFieldB: function() {
    this.game.reserve--;
    this.game.fieldB.tank++;
    this.view.update();
  },
  irrigateFieldC: function() {
    this.game.reserve--;
    this.game.fieldC.tank++;
    this.view.update();
  },
  recoltA: function() {
    this.game.fieldA.maturity = 0;
    this.game.score++;
    this.game.money += 50;
    this.view.update();
  },
  recoltB: function() {
    this.game.fieldB.maturity = 0;
    this.game.score++;
    this.game.money += 50;
    this.view.update();
  },
  recoltC: function() {
    this.game.fieldC.maturity = 0;
    this.game.score++;
    this.game.money += 50;
    this.view.update();
  }
};
Controller.state = {
  game: {writable: true, value: 3, enumerable: true},
  view: {writable: true, value: 3, enumerable: true}
};

mixin(Observer, Controller);