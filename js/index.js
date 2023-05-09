const buttons = $(".btn");
let syspattern = [];
let usrpattern = [];
let usr_role = false;
let time_user = 0;
let start = true;
let levels = 1;

buttons.each((id, el) => {
    $(el).on("click", UI_Animation);
    $(el).on("click", ()=> {
        playSound(id);
    })
});

// pressing buttons
function UI_Animation() {

    // console.log(e)
    this.classList.add("pressed");

    setTimeout(() => {

        this.classList.remove("pressed");

    }, 200);

    if(usr_role) {
        --time_user;
        usrpattern.push(this.classList[1]);
        let isMatch = usrpattern.every((el, ind)=> {
            return el === syspattern[ind];
        })
        if(isMatch) {

            if(time_user == 0) {
                levels++;
                $("h1").text(`level ${levels}`);
                
                system_round();
                usrpattern = [];
                
            }

        }else {
            $("h1").text("Game Over, Press Any Key to Restart");
            $(document.body).addClass("game-over");
            setTimeout(()=>{
                $(document.body).removeClass("game-over");
            }, 200)

            new Audio($("source:last-child").attr("src")).play()
        }
    }
    
    user_round();

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

    console.log("System Role");

    usr_role = false;

    let btn_ran = btn_random();

    syspattern.push(btn_ran.classList[1])

    $(btn_ran).addClass("fadeIn");
    setTimeout(()=> {

        $(btn_ran).removeClass("fadeIn");

    }, 800)
    
    time_user = syspattern.length;

    console.log(usr_role)

    user_round();
    // setTimeout(()=> {}, 300)
    // btn_ran.click();
}

function user_round() {

    console.log("User Role")

    usr_role = true;

}

function btn_random() {
    let rndmPress = Math.floor(Math.random() * buttons.length);
    return buttons[rndmPress];
}

function match_pattern() {
    // console.log(usrpattern, syspattern)
    return usrpattern.every((el, ind)=> {
        return el === syspattern[ind];
    })
}

function playSound(id) {
    // console.log( $("audio source") );
    let src = $($("audio source")[id]).attr("src");
    let audio = new Audio(src);
    audio.play();
}