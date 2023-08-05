let color = "#d4AF37";

function partie() {

    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let count = 0;
    let cells = document.querySelectorAll(".cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", e);

        function e() {

            if (count % 2 == 0) {
                cells[i].innerHTML = "X";
                cells[i].style.pointerEvents = "none";
                board[i] = 1;
                count += 1;
                let joueurDiv = document.getElementById("joueur");
                if (joueurDiv) { joueurDiv.innerHTML = "" };
                let lettre = document.createElement("p");
                lettre.textContent = "Tour du joueur 2 ";
                joueurDiv.appendChild(lettre);
            } else {
                cells[i].innerHTML = "O";
                cells[i].style.pointerEvents = "none";
                board[i] = 5;
                count += 1;
                let joueurDiv = document.getElementById("joueur");
                if (joueurDiv) { joueurDiv.innerHTML = "" };
                let lettre = document.createElement("p");
                lettre.textContent = "Tour du joueur 1 ";
                joueurDiv.appendChild(lettre);
            }

            let l0 = board[0] + board[1] + board[2];
            let l1 = board[3] + board[4] + board[5];
            let l2 = board[6] + board[7] + board[8];
            let c0 = board[0] + board[3] + board[6];
            let c1 = board[1] + board[4] + board[7];
            let c2 = board[2] + board[5] + board[8];
            let d0 = board[0] + board[4] + board[8];
            let d1 = board[2] + board[4] + board[6];


            if ((l0 == 3) || (l1 == 3) || (l2 == 3) || (c0 == 3) || (c1 == 3) || (c2 == 3) || (d0 == 3) || (d1 == 3)) {
                board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                count = 0;
                // alert("victoire j1");
                let joueurDiv = document.getElementById("joueur");
                if (joueurDiv) { joueurDiv.innerHTML = "victoire joueur 1" };
                let cells = document.querySelectorAll(".cell");
                for (let i = 0; i < cells.length; i++) {
                    cells[i].style.pointerEvents = "none";
                };
            } else if ((l0 == 15) || (l1 == 15) || (l2 == 15) || (c0 == 15) || (c1 == 15) || (c2 == 15) || (d0 == 15) || (d1 == 15)) {
                board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                count = 0;
                // alert("victoire j2");
                let joueurDiv = document.getElementById("joueur");
                if (joueurDiv) { joueurDiv.innerHTML = "victoire joueur 2" };
                let cells = document.querySelectorAll(".cell");
                for (let i = 0; i < cells.length; i++) {
                    cells[i].style.pointerEvents = "none";
                };
            } else if (((l0 + l1 + l2) == 25) || ((l0 + l1 + l2) == 29)) {
                board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                count = 0;
                // alert("match nul");
                let joueurDiv = document.getElementById("joueur");
                if (joueurDiv) { joueurDiv.innerHTML = "match nul" };
                let cells = document.querySelectorAll(".cell");
                for (let i = 0; i < cells.length; i++) {
                    cells[i].style.pointerEvents = "none";
                };
            }

            if (l0 == 3 || l0 == 15) {
                document.querySelector(".c1").style.backgroundColor = color;
                document.querySelector(".c2").style.backgroundColor = color;
                document.querySelector(".c3").style.backgroundColor = color;
            } else if (l1 == 3 || l1 == 15) {
                document.querySelector(".c4").style.backgroundColor = color;
                document.querySelector(".c5").style.backgroundColor = color;
                document.querySelector(".c6").style.backgroundColor = color;
            } else if (l2 == 3 || l2 == 15) {
                document.querySelector(".c7").style.backgroundColor = color;
                document.querySelector(".c8").style.backgroundColor = color;
                document.querySelector(".c9").style.backgroundColor = color;
            } else if (c0 == 3 || c0 == 15) {
                document.querySelector(".c1").style.backgroundColor = color;
                document.querySelector(".c4").style.backgroundColor = color;
                document.querySelector(".c7").style.backgroundColor = color;
            } else if (c1 == 3 || c1 == 15) {
                document.querySelector(".c2").style.backgroundColor = color;
                document.querySelector(".c5").style.backgroundColor = color;
                document.querySelector(".c8").style.backgroundColor = color;
            } else if (c2 == 3 || c2 == 15) {
                document.querySelector(".c3").style.backgroundColor = color;
                document.querySelector(".c6").style.backgroundColor = color;
                document.querySelector(".c9").style.backgroundColor = color;
            } else if (d0 == 3 || d0 == 15) {
                document.querySelector(".c1").style.backgroundColor = color;
                document.querySelector(".c5").style.backgroundColor = color;
                document.querySelector(".c9").style.backgroundColor = color;
            } else if (d1 == 3 || d1 == 15) {
                document.querySelector(".c3").style.backgroundColor = color;
                document.querySelector(".c5").style.backgroundColor = color;
                document.querySelector(".c7").style.backgroundColor = color;
            };
        }
    }
}

function reset() {
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        cells[i].style.pointerEvents = "";
        cells[i].style.backgroundColor = "white";
    };
    let joueurDiv = document.getElementById("joueur");
    if (joueurDiv) { joueurDiv.innerHTML = "Tour du joueur 1" };
    partie();
}


window.onload = partie();