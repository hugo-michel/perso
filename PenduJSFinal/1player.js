//le nombre de vie est codé "en dur" : let vie l128 (func ajoutMystery)

function affichageGoal() {
    let goal = localStorage.getItem("goal");
    goal = JSON.parse(goal);
    let goalDiv = document.getElementById("goalDiv");
    if (goalDiv) {goalDiv.innerHTML = "";};
    goalDiv = document.getElementById("goalDiv");
    let lettre = document.createElement("p");
    if (goal) {
    lettre.textContent = goal.join(" ")};
    goalDiv.appendChild(lettre);
}

function affichageHint() {
    let hint = localStorage.getItem("hint");
    hint = JSON.parse(hint);
    let hintDiv = document.getElementById("hintDiv");
    if (hintDiv) {hintDiv.innerHTML = ""};
    let lettre = document.createElement("p");
    lettre.textContent = "Indice : " + hint;
    hintDiv.appendChild(lettre);
}

function affichageVie() {
    let vie = localStorage.getItem("vie");
    vie = JSON.parse(vie);
    let vieDiv = document.getElementById("vieDiv");
    if (vieDiv) {vieDiv.innerHTML = "";};
    vieDiv = document.getElementById("vieDiv");
    let lettre = document.createElement("p");
    if (vie) {
    lettre.textContent = "Vies restantes : " + vie};
    vieDiv.appendChild(lettre);
}

function affichageMiss() {
    let miss = localStorage.getItem("miss");
    miss = JSON.parse(miss);
    let missDiv = document.getElementById("missDiv");
    if (missDiv) {missDiv.innerHTML = ""};
    missDiv = document.getElementById("missDiv");
    let lettre = document.createElement("p");
    if (miss) {
    lettre.textContent = "Lettres essayées : " + miss.join(" ")};
    missDiv.appendChild(lettre);
}

function resultat() {
    let mysteryListe = localStorage.getItem("mysteryListe");
    let goal = localStorage.getItem("goal");
    let vie = localStorage.getItem("vie");
    let mystery = localStorage.getItem("mystery");
    mysteryListe = JSON.parse(mysteryListe);
    goal = JSON.parse(goal);
    vie = JSON.parse(vie);
    mystery = JSON.parse(mystery);

    //affichage victoire
    if (JSON.stringify(goal) == JSON.stringify(mysteryListe)) {
        let resultatDiv = document.getElementById("resultatDiv");
        if (resultatDiv) {resultatDiv.innerHTML = ""};
        document.getElementById("fin").style.display = "flex";
        document.getElementById("main").style.display = "none";
        let resultat = document.createElement("p");
        resultat.textContent = "FELICITATIONS";
        resultatDiv.appendChild(resultat);
    }

    //affichage defaite
    if (vie == 0) {
        let resultatDiv = document.getElementById("resultatDiv");
        if (resultatDiv) {resultatDiv.innerHTML = ""};
        document.getElementById("fin").style.display = "flex";
        document.getElementById("main").style.display = "none";
        let resultat = document.createElement("p");
        resultat.textContent = `DEFAITE, le mot était ${mystery}`;
        resultatDiv.appendChild(resultat);
    }
}

function ajoutMystery() {
    
    let banque = [
        ["allemagne","italie","france","grece","suisse","pologne","ukraine","belgique","irlande","luxembourg"],
        ["abricot","cerise","fraise","framboise","melon","peche","prune","orange","banane","kiwi"],
        ["basket","football","handball","rugby","tennis","badminton","pingpong","baseball","judo","golf"],
        ["banquier","coiffeur","electricien","policier","caissier","avocat","medecin","jardinier","professeur","mecanicien"],
        ["mario","bowser","link","zelda","luigi","toad","yoshi","ganon","kirby","samus"],
        ["harry","hermione","dumbledore","hagrid","malefoy","voldemort","neville","sirius"]
    ]
    document.getElementById("fin").style.display = "none";
    
    let random = Math.floor(Math.random() * banque.length)
    let hint = getCategory(random);
    let category = banque[random];
    let mystery = category[Math.floor(Math.random() * category.length)]
    
    function getCategory(n) {
        let hint;
        switch (n) {
            case 0:
                hint = "pays europeen";
                break;
            case 1:
                hint = "fruit";
                break;
            case 2:
                hint = "sport";
                break;
            case 3:
                hint = "metier";
                break;
            case 4:
                hint= "personnage de Nintendo";
                break;
            case 5:
                hint = "personnage de harry potter";
                break;
        }
        return hint;
    }


    mystery = mystery.toUpperCase();
    localStorage.setItem("mystery", JSON.stringify(mystery));
    //creation et stockage en LS de mysteryListe, goal, miss et vie
    let vie = 7;
    let mysteryListe = mystery.split("");
    let goal = [];
    let miss = [];
    for (i = 0; i < mysteryListe.length; i++) {
        goal[i] = "-";
    }
    localStorage.setItem("hint", JSON.stringify(hint));
    localStorage.setItem("mysteryListe", JSON.stringify(mysteryListe));
    localStorage.setItem("goal", JSON.stringify(goal));
    localStorage.setItem("vie", JSON.stringify(vie));
    localStorage.setItem("miss", JSON.stringify(miss));

    //affichage goal, vie
    affichageGoal();
    // affichageVie();
    affichageHint();
    // affichageMiss();
}

function ajoutGuess() {
    //recuperation guess
    let guess = document.getElementById("guess").value;
    guess = guess.toUpperCase();
    let regex = /^[a-zA-Z]{1}$/;
    let testRegex = regex.test(guess);

    //recuperation depuis LS des variables
    let mysteryListe = localStorage.getItem("mysteryListe");
    let goal = localStorage.getItem("goal");
    let mystery = localStorage.getItem("mystery");
    let vie = localStorage.getItem("vie");
    let miss = localStorage.getItem("miss");

    //parseisation des variables
    mystery = JSON.parse(mystery);
    mysteryListe = JSON.parse(mysteryListe);
    goal = JSON.parse(goal);
    vie = JSON.parse(vie);
    miss = JSON.parse(miss);

    //verification du guess dans le mystery
    //si présent changement du goal en guess
    //sinon vie -1, ajout guess dans miss
    if (testRegex) {
        if (mysteryListe.includes(guess)) {
            for (i = 0; i < mysteryListe.length; i++) {
                if (guess == mystery[i]) {
                    goal[i] = guess;
                }
            }
        } else {
            vie -= 1;
            miss.push(guess);           
        }
        //stockage du nouveau goal, vie, miss
        localStorage.setItem("vie", JSON.stringify(vie));
        localStorage.setItem("goal", JSON.stringify(goal));
        localStorage.setItem("miss", JSON.stringify(miss));

        //affichage du nouveau goal, vie, miss, resultat
        affichageVie();
        affichageGoal();
        affichageMiss();
         } else {
            alert("le guess n'est pas valide, une seule lettre svp")
        }
    document.getElementById("guess").value = "";
    resultat();
}

function reset() {
    localStorage.clear();
    let resultatDiv = document.getElementById("resultatDiv");
    if (resultatDiv) {resultatDiv.innerHTML = ""};
    affichageGoal();
    affichageVie();
    affichageMiss();
    affichageHint();
    ajoutMystery();
    document.getElementById("fin").style.display = "none";
    document.getElementById("main").style.display = "flex";
}

window.onload = ajoutMystery();
