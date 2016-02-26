'use strict';

var game = new DryFieldGame.build();
var view = new View.build();
view.setGame(game);
var controller = new Controller.build();
controller.setGame(game);
controller.setView(view);
view.attach(controller);
game.attach(view);