import random

#affichage pendu > tableaux pré-dessinés
pendu_0 = [
    ["_", "_", "_", " ", " "],
    ["|", " " , " ", "|", " "],
    ["|", " ", "\\", "o", "/"],
    ["|", " ", " ", "|", " "],
    ["|", " ", "/", " ", "\\"],
    ["|", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_1 = [
    ["_", "_", "_", " ", " "],
    ["|", " " , " ", "|", " "],
    ["|", " ", "\\", "o", "/"],
    ["|", " ", " ", "|", " "],
    ["|", " ", "/", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_2 = [
    ["_", "_", "_", " ", " "],
    ["|", " " , " ", "|", " "],
    ["|", " ", "\\", "o", "/"],
    ["|", " ", " ", "|", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_3 = [
    ["_", "_", "_", " ", " "],
    ["|", " " , " ", "|", " "],
    ["|", " ", "\\", "o", " "],
    ["|", " ", " ", "|", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_4 = [
    ["_", "_", "_", " ", " "],
    ["|", " " , " ", "|", " "],
    ["|", " ", " ", "o", " "],
    ["|", " ", " ", "|", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_5 = [
    ["_", "_", "_", " ", " "],
    ["|", " " , " ", "|", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_6 = [
    ["_", "_", "_", " ", " "],
    ["|", " " , " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_7 = [
    ["_", " ", " ", " ", " "],
    ["|", " " , " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_8 = [
    [" ", " ", " ", " ", " "],
    [" ", " " , " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    ["|", "\\", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]
pendu_9 = [
    [" ", " ", " ", " ", " "],
    [" ", " " , " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    ["|", "_", "\\", " ", " "]
]

#fonction affichage pendu, prend en parametre {vie}
def affichage(vie):
    if vie == 9:
        for line in pendu_9:
            print(*line)
    if vie == 8:
        for line in pendu_8:
            print(*line)
    if vie == 7:
        for line in pendu_7:
            print(*line)
    if vie == 6:
        for line in pendu_6:
            print(*line)
    if vie == 5:
        for line in pendu_5:
            print(*line)
    if vie == 4:
        for line in pendu_4:
            print(*line)
    if vie == 3:
        for line in pendu_3:
            print(*line)
    if vie == 2:
        for line in pendu_2:
            print(*line)
    if vie == 1:
        for line in pendu_1:
            print(*line)
    if vie == 0:
        for line in pendu_0:
            print(*line)


#a rajouter :
# 4bis) ou alors empecher de retenter la mm lettre 2 fois (avec mess d'erreur)

banque = ["anaconda", "autruche", "barracuda", "bouquetin", "coccinelle ", "crocodile", "dromadaire", "elephant", 
          "escargot", "fourmilier", "grenouille", "hippocampe", "hippopotame", "kangourou", "libellule", "perroquet", 
          "pipistrelle", "rhinoceros ", "sauterelle", "tarentule”, “aubergine","betterave","citrouille","concombre","framboise",
          "groseille","mandarine","mirabelle","myrtille”, “pamplemousse”,“agriculteur","archeologue","architecte","astronaute","bijoutier",
          "biologiste","charcutier","charpentier","cuisinier","electricien","horticulteur","infirmier","mecanicien","menuisier","meteorologue",
          "photographe","professeur","standardiste","veterinaire”, “volcanologue”, ”allemagne","antarctique","argentine","atlantique","australie",
          "embouchure","hemisphere","hydrographie","kilimandjaro","luxembourg","madagascar","mediterranee","mississippi","normandie","pacifique",
          "planisphere","strasbourg","superficie","venezuela","washington"]
vie = 10
goal = ""
guess_list = ""

# selection random du mot à découvrir
number = random.randint(0, len(banque)-1)
random_select = banque[number]

#transformation mot en liste de lettre individuel
randon_select_liste = [i for i in random_select]

#création liste lettre en lettre masquee ( - )
for i in range(0, len(randon_select_liste)+1):
    goal = ["-"]*i

#texte au démarrage
print("Le jeu du pendu démarre")
print(f"Vous avez {vie} essais")
print("Essayez de deviner le mot suivant :\n")

#boucle de jeu
while True and (vie > 0):
    print(goal)
    print("\n")
    # afficher liste des lettres tentées
    print(f"Vous avez essayé {guess_list}")
    #input du joueur + conversion en minuscule
    guess = input("Entrez votre lettre : ").lower()
    #maj liste des lettres essayées
    guess_list += guess + "-"
    #test guess is lettre Et 1 seule lettre
    if (guess.isalpha()) and (len(guess) == 1):
        #si occurence de guess dans mot
        if random_select.count(guess) > 0:
            #remplacement - par le guess
            for i in range(0, len(randon_select_liste)):
                if guess == randon_select_liste[i]:
                    goal[i] = guess
        #si pas d'occurence de guess
        else:
            print("\ncette lettre n'est pas dans le mot")
            vie -= 1
            affichage(vie)
    else:
        print("Entrez une seule lettre (a -> z) s'il vous plait")

    #victoire
    if goal == randon_select_liste:
        print(goal)
        print(f"\nLe mot était bien {random_select}, vous avez gagné !")
        break

    #defaite
    if vie == 0:
        print("\nvous avez perdu")
        print(f"\nle mot était {random_select}")
        break
    
    #vies restantes
    print(f"\nvies restante : {vie} \n")
