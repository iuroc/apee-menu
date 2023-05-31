"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var util_1 = require("./util");
(0, util_1.makeNewMenu)(config_1.menuConfig, 5, 50);
window.addEventListener('mouseover', function (event) {
    var taregt = event.target;
    if (!taregt.hasAttribute('data-menu-app'))
        (0, util_1.removeSubMenu)();
});
