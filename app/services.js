export default class VendService {
    constructor(name, price) {
        this.name = name
        this.price = price
        this.money = 0
        this.snacks = {
            chips: 1.50,
            twix: 0.75,
            bears: 2.00
        }
        console.log('do i work?');

    }
    moneyInput() {
        this.money += .25
    }

    buySnack(input) {
        this.money = this.money - this.snacks[input]

    }
    get Money() {
        return this.money
    }
    get Template() {
        let template = `<header class="container-fluid">
        <div class="row bg-dark text-white text-center">
            <div class="col-12 p-2">
                <h1>SUGAR VENDOR</h1>
            </div>
        </div>
    </header>

    <main class="container-fluid">
        <div class="row text-center">
            <div class="col-3 p-2"><img class="img-fluid size" src="./assets/chips1.png" alt="chips"></div>
            <div class="col-3 p-2"><img class="img-fluid size" src="./assets/twix.png" alt="twix"></div>
            <div class="col-3 p-2"><img class="img-fluid size" src="./assets/gummybears.png" alt="bears"></div>
            <div class="col-3 px-3 bg-dark">
                <div class="card bg-black border-light text-success p-4 my-5">
                    <h1>$${this.money}</h1>
                </div>

            </div>
        </div>
        <div class="row text-center p-2 text-white bg-dark">
            <div class="col-3"><button id="chips" class="btn btn-secondary" onclick="app.controller.buySnack('chips')">BUY $1.50</button></div>
            <div class="col-3"><button id="twix" class="btn btn-secondary" onclick="app.controller.buySnack('twix')">BUY $0.75</button></div>
            <div class="col-3"><button id="bears" class="btn btn-secondary" onclick="app.controller.buySnack('bears')">BUY $2.00</button></div>

        </div>
        <div class="row text-center">
            <div class="col-3 p-2"><img class="img-fluid size" src="" alt="chips"></div>
            <div class="col-3 p-2"><img class="img-fluid size" src="" alt="twix"></div>
            <div class="col-3 p-2"><img class="img-fluid size" src="" alt="bears"></div>
            <div class="col-3 p-2 bg-dark"> <img onclick="app.controller.moneyInput()" class="img-fluid size"
                    src="./assets/coin-slot-png-2-transparent.png" alt="coin"></div>
        </div>
        <div class="row text-center p-2 text-white bg-dark">
            <div class="col-3"><button id="" class="btn btn-secondary" onclick="app.controller.buySnack('chips')">BUY $1.50</button></div>
            <div class="col-3"><button id="" class="btn btn-secondary" onclick="app.controller.buySnack('twix')">BUY $0.75</button></div>
            <div class="col-3"><button id="" class="btn btn-secondary" onclick="app.controller.buySnack('bears')">BUY $2.00</button></div>

        </div>


    </main>

    <footer class="container-fluid">
        <div class="row text-center bg-dark text-white">
            <div class="col-12 p-1">
                <P>CREATED BY: KAYDEN COOPER</P>
            </div>
        </div>
    </footer>`
        return template
    };

}