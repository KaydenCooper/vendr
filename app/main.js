import Controller from "./controller.js";

class App {
    constructor() {
        this.controller = new Controller()
    }
}

window["app"] = new App()