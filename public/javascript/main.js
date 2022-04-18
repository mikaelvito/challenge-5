class match {
  constructor() {
    this.batunyaPlayer = document.querySelector(".batunyaPlayer");
    this.kertasPlayer = document.querySelector(".kertasnyaPlayer");
    this.guntingnyaPlayer = document.querySelector(".guntingnyaPlayer");
    this.bgBatuPlayer = document.querySelector(".batuPlayer");
    this.bgKertasPlayer = document.querySelector(".kertasPlayer");
    this.bgGuntingPlayer = document.querySelector(".guntingPlayer");
    this.bgBatuComputer = document.querySelector(".batuComputer");
    this.bgKertasComputer = document.querySelector(".kertasComputer");
    this.bgGuntingComputer = document.querySelector(".guntingComputer");
    this.versus = document.querySelector(".vs");
    this.bgVersus = document.querySelector(".versus");
    this.refresh = document.querySelector(".refresh");
    this.playerChoice = "";
    this.computerChoice = "";
    this.result = "";
  }

  matchPlay() {
    this.batuMatch();
    this.kertasMatch();
    this.guntingMatch();
    this.refreshMatch();
  }

  refreshMatch() {
    this.refresh.addEventListener("click", () => {
      this.removeStyle();
    });
  }

  batuMatch() {
    this.batunyaPlayer.addEventListener("click", () => {
      this.playerChoice = "batu";
      console.log(`saya memilih ${this.playerChoice}`);
      this.removeStyle();
      setTimeout(() => {
        this.matchFlow();
        this.chooseStyle();
      }, 500);
    });
  }

  kertasMatch() {
    this.kertasPlayer.addEventListener("click", () => {
      this.playerChoice = "kertas";
      console.log(`saya memilih ${this.playerChoice}`);
      this.removeStyle();
      setTimeout(() => {
        this.matchFlow();
        this.chooseStyle();
      }, 500);
    });
  }

  guntingMatch() {
    this.guntingnyaPlayer.addEventListener("click", () => {
      this.playerChoice = "gunting";
      console.log(`saya memilih ${this.playerChoice}`);
      this.removeStyle();
      setTimeout(() => {
        this.matchFlow();
        this.chooseStyle();
      }, 500);
    });
  }

  matchFlow() {
    this.computerChoose();
    this.winning();
    this.winOrLose();
  }

  computerChoose() {
    const acak = Math.floor(Math.random() * 3 + 1);
    if (acak === 1) {
      this.computerChoice = "batu";
    } else if (acak === 2) {
      this.computerChoice = "kertas";
    } else if (acak === 3) {
      this.computerChoice = "gunting";
    }
  }

  winning() {
    if (this.playerChoice === this.computerChoice) {
      this.result = "draw";
    } else if (this.playerChoice === "batu") {
      this.computerChoice === "kertas"
        ? (this.result = "kalah")
        : (this.result = "menang");
    } else if (this.playerChoice === "kertas") {
      this.computerChoice === "gunting"
        ? (this.result = "kalah")
        : (this.result = "menang");
    } else if (this.playerChoice === "gunting") {
      this.computerChoice === "batu"
        ? (this.result = "kalah")
        : (this.result = "menang");
    }
  }

  changeVersusLogo() {}
  winOrLose() {
    if (this.result === "menang") {
      this.versus.textContent = "Player 1 Win";
      this.bgVersus.style.backgroundColor = "#4C9654";
      this.versus.style.color = "white";
      // this.bgVersus.style.transform = "rotate(-40deg)";
      this.versus.style.fontSize = "40px";
    } else if (this.result === "kalah") {
      this.versus.textContent = "Com Win";
      this.bgVersus.style.backgroundColor = "#4C9654";
      this.versus.style.color = "white";
      // this.bgVersus.style.transform = "rotate(-40deg)";
      this.versus.style.fontSize = "40px";
    } else {
      this.versus.textContent = "Draw";
      this.bgVersus.style.backgroundColor = "#035B0C";
      this.versus.style.color = "white";
      // this.bgVersus.style.transform = "rotate(-40deg)";
      this.versus.style.fontSize = "40px";
    }
  }

  chooseStyle() {
    this.computerChooseStyle();
    this.playerChooseStyle();
  }

  computerChooseStyle() {
    if (this.computerChoice === "batu") {
      this.bgBatuComputer.style.backgroundColor = "#c4c4c4";
      this.bgKertasComputer.style.backgroundColor = null;
      this.bgGuntingComputer.style.backgroundColor = null;
    } else if (this.computerChoice === "kertas") {
      this.bgBatuComputer.style.backgroundColor = null;
      this.bgKertasComputer.style.backgroundColor = "#c4c4c4";
      this.bgGuntingComputer.style.backgroundColor = null;
    } else if (this.computerChoice === "gunting") {
      this.bgBatuComputer.style.backgroundColor = null;
      this.bgKertasComputer.style.backgroundColor = null;
      this.bgGuntingComputer.style.backgroundColor = "#c4c4c4";
    }
  }

  playerChooseStyle() {
    if (this.playerChoice === "batu") {
      this.bgBatuPlayer.style.backgroundColor = "#c4c4c4";
      this.bgKertasPlayer.style.backgroundColor = null;
      this.bgGuntingPlayer.style.backgroundColor = null;
    } else if (this.playerChoice === "kertas") {
      this.bgBatuPlayer.style.backgroundColor = null;
      this.bgKertasPlayer.style.backgroundColor = "#c4c4c4";
      this.bgGuntingPlayer.style.backgroundColor = null;
    } else if (this.playerChoice === "gunting") {
      this.bgBatuPlayer.style.backgroundColor = null;
      this.bgKertasPlayer.style.backgroundColor = null;
      this.bgGuntingPlayer.style.backgroundColor = "#c4c4c4";
    }
  }

  removeStyle() {
    this.bgBatuPlayer.style.backgroundColor = null;
    this.bgKertasPlayer.style.backgroundColor = null;
    this.bgGuntingPlayer.style.backgroundColor = null;
    this.bgBatuComputer.style.backgroundColor = null;
    this.bgKertasComputer.style.backgroundColor = null;
    this.bgGuntingComputer.style.backgroundColor = null;
    this.versus.textContent = "VS";
    this.bgVersus.style.backgroundColor = null;
    this.versus.style.color = null;
    this.bgVersus.style.transform = null;
    this.versus.style.fontSize = "144px";
  }
}

const vito = new match();
vito.matchPlay();
