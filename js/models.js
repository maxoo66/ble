'use strict';

/**
 * Observer
 */
var Observer = {};
Observer.build = function () {
  return Object.create(
    Observer.proto,
    Observer.state
  );
};
Observer.proto = {
  update: function () {
    //abstract function bitch !
  }
};
Observer.state = {};

/**
 * Observable
 */
var Observable = {};
Observable.build = function () {
  return Object.create(
    Observable.proto,
    Observable.state
  );
};
Observable.proto = {
  attach: function (observer) {
    this.observers.push(observer);
  },
  notify: function() {
    for(var i = 0; i < this.observers.length; i++) {
      this.observers[i].update();
    }
  }
};
Observable.state = {
  observers: {writable: true, value: [], enumerable: true}
};


/**
 * Field Object
 */
var Field = {};
Field.build = function () {
  return Object.create(
    Field.proto,
    Field.state
  );
};
Field.proto = {
  startTimer: function() {
    setInterval(function() {
      console.log(this.maturity);
      if(this.maturity < 20 && this.tank > 0) {
        this.maturity++;
        this.tank--;
      }
      this.notify();
    }.bind(this), 1000);
  }
};
Field.state = {
  maturity: {writable: true, value: 0, enumerable: false},
  tank: {writable: true, value: 3, enumerable: false}
};

mixin(Observable, Field);

/**
 * Dryfield Game
 */
var DryFieldGame = {};
DryFieldGame.build = function () {
  return Object.create(
    DryFieldGame.proto,
    DryFieldGame.state
  );
};
DryFieldGame.proto = {
  start: function () {
    console.log("Game started !");
  },
  setMoney: function(money) {
    this.money = money;
    this.notify();
  },
  setReserve: function(reserve) {
    this.reserve = reserve;
    this.notify();
  },
  setTankA: function(tankA) {
    this.fieldA.tank = tankA;
    this.notify();
  },
  setTankB: function(tankB) {
    this.fieldB.tank = tankB;
    this.notify();
  },
  setTankC: function(tankA) {
    this.fieldC.tank = tankA;
    this.notify();
  },
  setWaterPrice: function(waterPrice) {
    this.waterPrice = waterPrice;
    this.notify();
  },
  setFieldPrice: function(fieldPrice) {
    this.fieldPrice = fieldPrice;
    this.notify();
  }
};
DryFieldGame.state = {
  money: {writable: true, value: 50, enumerable: false},
  reserve: {writable: true, value: 3, enumerable: false},
  fieldA: {writable: true, value: new Field.build(), enumerable: false},
  fieldB: {writable: true, value: new Field.build(), enumerable: false},
  fieldC: {writable: true, value: new Field.build(), enumerable: false},
  score: {writable: true, value: 0, enumerable: false},
  waterPrice: {writable: true, value: 1, enumerable: false},
  fieldPrice: {writable: true, value: 40, enumerable: false}
};

mixin(Observable, DryFieldGame);

function mixin(source, target) {
  for (var key in source.proto) {
    if (!target.proto[key]) {
      target.proto[key] = source.proto[key];
    }
  }
  for (var key in source.state) {
    if (!target.state[key]) {
      target.state[key] = source.state[key];
    }
  }
}