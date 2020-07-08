import VendService from "./services.js";

let vendService = new VendService()

function draw() {
    document.getElementById("target").innerHTML = vendService.Template
    // if (vendService.Money < vendService.snacks[input]) {
    //document.getElementById()
    //}
    for (const key in vendService.snacks) {
        if (vendService.snacks.hasOwnProperty(key)) {
            const element = vendService.snacks[key];
            if (vendService.money < element) {
                document.getElementById(key).setAttribute("disabled", "")
            }
        }
    }
}


export default class Controller {
    constructor() {
        console.log('I work');
        draw()
    }
    moneyInput() {
        vendService.moneyInput()
        draw()
    }
    buySnack(input) {
        vendService.buySnack(input)
        draw()
    }
}