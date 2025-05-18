const allQuestions = [
    { question: "En quelle année le drapeau haïtien a-t-il été créé ?", options: ["1804", "1803", "1791", "1810"], answer: "1803" },
    { question: "Qui a cousu le premier drapeau haïtien ?", options: ["Catherine Flon", "Marie-Jeanne", "Cécile Fatiman", "Claire Heureuse"], answer: "Catherine Flon" },
    { question: "Qui a demandé la création du drapeau haïtien ?", options: ["Jean-Jacques Dessalines", "Toussaint Louverture", "Alexandre Pétion", "Henri Christophe"], answer: "Jean-Jacques Dessalines" },
    { question: "Où a été cousu le premier drapeau haïtien ?", options: ["Cap-Haïtien", "Port-au-Prince", "Arcahaie", "Les Cayes"], answer: "Arcahaie" },
    { question: "Quelles sont les couleurs du drapeau haïtien ?", options: ["Bleu et rouge", "Bleu et blanc", "Noir et rouge", "Rouge et vert"], answer: "Bleu et rouge" },
    { question: "Quelle est la signification de la couleur bleue dans le drapeau ?", options: ["Le ciel", "Le peuple noir", "La liberté", "La justice"], answer: "Le peuple noir" },
    { question: "Quelle est la signification de la couleur rouge dans le drapeau ?", options: ["Le courage", "Le sang des martyrs", "Le peuple mulâtre", "La force"], answer: "Le peuple mulâtre" },
    { question: "Quel symbole figure au centre du drapeau haïtien ?", options: ["Une ancre", "Une machette", "Un palmier avec un bonnet de liberté", "Un coq"], answer: "Un palmier avec un bonnet de liberté" },
    { question: "Quelle devise est inscrite sur les armes du drapeau ?", options: ["Liberté ou la mort", "Unité, travail, progrès", "L'union fait la force", "Patrie ou mort"], answer: "L'union fait la force" },
    { question: "Combien de canons figurent dans les armes du drapeau ?", options: ["4", "6", "8", "2"], answer: "6" },
    { question: "Quel jour célèbre-t-on la Fête du Drapeau en Haïti ?", options: ["17 octobre", "1er janvier", "18 mai", "20 avril"], answer: "18 mai" },
    { question: "Pourquoi a-t-on choisi le 18 mai ?", options: ["Date de la mort de Dessalines", "Date de l'indépendance", "Adoption du drapeau à l'Arcahaie", "Naissance de Catherine Flon"], answer: "Adoption du drapeau à l'Arcahaie" },
    { question: "Quel élément n'apparaît PAS dans les armes du drapeau ?", options: ["Tambour", "Canon", "Ancre", "Fusil"], answer: "Ancre" },
    { question: "Le bonnet phrygien symbolise :", options: ["La royauté", "La liberté", "La justice", "Le pouvoir militaire"], answer: "La liberté" },
    { question: "Quel arbre figure dans les armes du drapeau ?", options: ["Un chêne", "Un palmier", "Un flamboyant", "Un cocotier"], answer: "Un palmier" },
    { question: "Le drapeau haïtien a été inspiré de :", options: ["Drapeau français", "Drapeau américain", "Drapeau africain", "Drapeau espagnol"], answer: "Drapeau français" },
    { question: "Dessalines a-t-il arraché quelle couleur du drapeau français ?", options: ["Le bleu", "Le blanc", "Le rouge", "Le vert"], answer: "Le blanc" },
    { question: "Que symbolise le retrait du blanc dans le drapeau français ?", options: ["La paix", "Le départ des colons", "La neutralité", "Le métissage"], answer: "Le départ des colons" },
    { question: "Combien de drapeaux différents Haïti a-t-elle connus depuis 1803 ?", options: ["1", "2", "5", "Plus de 10"], answer: "Plus de 10" },
    { question: "Sous quelle forme était le drapeau en 1804 ?", options: ["Horizontal", "Vertical", "Carré", "Sans symbole"], answer: "Vertical" },
    { question: "Le drapeau utilisé pendant la période de Henri Christophe était :", options: ["Noir et rouge", "Bleu et rouge", "Bleu et blanc", "Rouge et vert"], answer: "Noir et rouge" },
    { question: "Qui a adopté le drapeau noir et rouge ?", options: ["Dessalines", "Christophe", "Pétion", "Soulouque"], answer: "Dessalines" },
    { question: "Le drapeau actuel est en usage depuis :", options: ["1804", "1964", "1986", "1987"], answer: "1987" },
    { question: "Que célèbre-t-on aussi le 18 mai ?", options: ["La fête des mères", "La Journée des enseignants", "La fête de l'université", "La Journée de l'Université haïtienne"], answer: "La Journée de l'Université haïtienne" },
    { question: "Combien de tambours apparaissent dans les armoiries ?", options: ["1", "2", "3", "4"], answer: "2" },
    { question: "Quelle est la position des couleurs sur le drapeau haïtien actuel ?", options: ["Rouge en haut", "Bleu en haut", "Rouge à gauche", "Bleu à droite"], answer: "Bleu en haut" },
    { question: "Qui a rétabli les couleurs bleu et rouge après Duvalier ?", options: ["Jean-Claude Duvalier", "Jean-Bertrand Aristide", "Henri Namphy", "Les militaires"], answer: "Henri Namphy" },
    { question: "Quelle dictature a imposé le noir et rouge ?", options: ["Les Tontons Macoutes", "Jean-Claude Duvalier", "François Duvalier", "Jean-Jacques Dessalines"], answer: "François Duvalier" },
    { question: "Où se tient le défilé du 18 mai chaque année ?", options: ["Port-au-Prince", "Cap-Haïtien", "Arcahaie", "Jacmel"], answer: "Arcahaie" },
    { question: "Combien de haches apparaissent dans les armoiries ?", options: ["2", "4", "6", "Aucune"], answer: "6" },
    { question: "Les drapeaux haïtiens sont souvent confectionnés en :", options: ["Soie", "Tissu simple", "Plastique", "Coton"], answer: "Tissu simple" },
    { question: "Le drapeau haïtien a-t-il changé pendant l’occupation américaine ?", options: ["Oui", "Non"], answer: "Oui" },
    { question: "Le drapeau de 1964 à 1986 était :", options: ["Bleu et rouge", "Rouge et noir", "Bleu et blanc", "Vert et noir"], answer: "Rouge et noir" },
    { question: "Le drapeau officiel est adopté dans quelle constitution ?", options: ["1805", "1843", "1987", "2004"], answer: "1987" },
    { question: "La loi haïtienne autorise-t-elle la modification du drapeau ?", options: ["Oui", "Non"], answer: "Non" },
    { question: "Qui garde le drapeau pendant les défilés officiels ?", options: ["Les enfants", "L’armée", "La police", "Le président"], answer: "L’armée" },
    { question: "Le drapeau haïtien est hissé à quelle occasion ?", options: ["Lors de compétitions sportives", "Lors des funérailles", "Chaque jour", "Uniquement le 1er janvier"], answer: "Lors de compétitions sportives" },
    { question: "Le drapeau représente la fierté de :", options: ["La nation", "La diaspora", "Le gouvernement", "L’armée"], answer: "La nation" },
    { question: "Un drapeau inversé symbolise :", options: ["Paix", "Soutien", "Détresse", "Victoire"], answer: "Détresse" },
    { question: "Quel est le surnom de Catherine Flon en Haïti ?", options: ["Mère de la nation", "Couturière de l’indépendance", "Sœur de la liberté", "Femme de la révolution"], answer: "Couturière de l’indépendance" },
    { question: "Dans quelle ville Catherine Flon est-elle née ?", options: ["Arcahaie", "Cap-Haïtien", "Port-au-Prince", "Petit-Goâve"], answer: "Arcahaie" },
    { question: "La forme du drapeau est :", options: ["Carrée", "Rectangulaire", "Triangulaire", "Ronde"], answer: "Rectangulaire" },
    { question: "Combien de lances figurent dans les armoiries ?", options: ["4", "6", "2", "8"], answer: "6" },
    { question: "Le drapeau haïtien inspire :", options: ["L’unité", "La division", "Le conflit", "Le silence"], answer: "L’unité" },
    { question: "Le drapeau est hissé sur les bâtiments :", options: ["Gouvernementaux", "Privés", "Commerciaux", "Religieux"], answer: "Gouvernementaux" },
    { question: "Le drapeau de 1804 était :", options: ["Vertical", "Horizontal", "Carré", "Croisé"], answer: "Vertical" },
    { question: "Combien de drapeaux étrangers ont influencé celui d’Haïti ?", options: ["1", "2", "3", "Aucun"], answer: "1" },
    { question: "Le drapeau est un symbole de :", options: ["Soumission", "Colonisation", "Résistance", "Prospérité"], answer: "Résistance" },
  ];
  
  let selectedQuestions = [];
  let currentQuestion = 0;
  let score = 0;
  
  // melanger aleatoirement les questions
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  function startQuiz() {
    selectedQuestions = shuffle([...allQuestions]).slice(0, 10);
    currentQuestion = 0;
    score = 0;
    showQuestion();
  }
  
  function showQuestion() {
    const q = selectedQuestions[currentQuestion];
    document.getElementById("question").textContent = `Question ${currentQuestion + 1} : ${q.question}`;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
  
    shuffle(q.options).forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      answersDiv.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = selectedQuestions[currentQuestion].answer;
    if (selected === correct) score++;
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
      showQuestion();
    } else {
      document.getElementById("question").textContent = "Résultat final";
      document.getElementById("answers").innerHTML = "";
      document.getElementById("result").textContent = `Vous avez obtenu ${score}/10 🎉`;
    }
  }
  
  startQuiz();
  