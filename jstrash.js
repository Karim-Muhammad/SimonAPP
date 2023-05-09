const buttons = $(".btn");
let pattern = [];
let start = true;
let levels = 1;

buttons.each((id, el) => {
    $(el).on("click", UI_Animation);
});

// pressing buttons
function UI_Animation() {

    this.classList.add("pressed");

    setTimeout(() => {

        this.classList.remove("pressed");

    }, 200);

}

// start game
$(document).on("keydown", (e) => {

    if (e.key === "a" && start) {

        $("h1").text(`level ${levels}`);

        start = false;

        system_round();

    }
});

function system_round() {

    // $(buttons[rndmPress]).fadeToggle("fast");
    // $(buttons[rndmPress]).click();
    btn_random().click();

    setTimeout(() => {


        console.log("e");

        // $(buttons[rndmPress]).fadeToggle("fast");


    }, 100);
    pattern.push($(buttons[rndmPress]).attr("class")[1]);

    // user_round();
    return false;
}

function user_round() {


    for (let i = 0; i < pattern.length; i++) {

        console.log(i);

    }
    console.log("hey user");


    // system_round();
    return false;
}

function btn_random() {
    let rndmPress = Math.floor(Math.random() * buttons.length);
    return $(buttons)[rndmPress];
}
