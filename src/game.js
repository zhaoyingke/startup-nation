
// 0
export default [{
  message: `Ce newsgame est basé sur des reportages et des interviews avec des entrepreneurs, des investisseurs et des conseillers en création d'entreprise. Nous avons simplifié les étapes pour montrer les enjeux de l'entreprenariat. Dans la vraie vie, l'ambition entrepreneuriale implique bien plus de labeur, de savoir-faire, et de chance…. Nous sommes trois étudiants à l’École de journalisme de Sciences Po: Yingke Zhao, Ariana Mozafari et Viola Stefanello. Ce projet est encadré par nos enseignants Jules Bonnard, Pierre Romera, et Célia Mériguet. Musique faite par Iden Mozafari (Maxxid). Crédit Images : Vecteezy.com et Ariana Mozafari.`,
  buttons: [`J'ai compris`]
},
{
  message: `Le célèbre entrepreneur Steve Blank l'explique simplement : "Une startup est une organisation temporaire à la recherche d'un business model industrialisable, rentable et permettant la croissance". En France, c’est avec la campagne électorale d’Emmanuel Macron, qui promettait de transformer le pays dans une "startup nation", que l’on a commencé à en entendre parler de plus en plus. Aujourd'hui, le monde de startups en France est plein d'incertitudes mais aussi d'opportunités. Ce petit jeu va vous aider à mieux comprendre ce que cela implique de lancer une startup!`,
  buttons: ['Je continue']
},
{
  advice: `“La plupart des gens qui montent une startup ont déjà travaillé dans le secteur et ils ont eu l’occasion de voir les défauts et les qualités de leur activité, de voir ce qu’il manquait”, témoigne Barthélemy Aupée, qui a créé sa première entreprise Stagissimo en 2015, après avoir travaillé pendant cinq ans dans le recrutement.`,
  message: `Choisissez votre niveau de difficulté. Cela affectera les évènements que vous rencontrerez dans votre aventure à venir. Vous pouvez suivre les conseils d'entrepreneurs et de conseillers en cliquant sur le 💬 ci-dessus à droite.`,
  buttons: [
    {
      label: 'Plus facile',
      action: (commit) => {
        commit('setDifficulty', 'easy')
        commit('addMoney', 500)
      }
    },
    {
      label: 'Plus difficile',
      action: (commit) => {
        commit('setDifficulty', 'hard')
        commit('addMoney', 250)
      }
    }
  ]
},
// 3
{
  advice: `“La plupart des gens qui montent une startup ont déjà travaillé dans le secteur et ils ont eu l’occasion de voir les défauts et les qualités de leur activité”, dit Barthélemy Aupée, qui a créé sa première entreprise après avoir travaillé pendant cinq ans dans le recrutement.`,

  message: `Vous êtes un homme diplômé de l'une des meilleures écoles de commerce avec plusieurs années d'expérience et un vaste réseau professionnel.`,
  buttons: ['Ok'],
  when: (state) => state.difficulty === 'easy'
},
{
  message: `Vous êtes jeune diplômée ou d'une famille issue de l'immigration. Vous avez très peu d'expérience, mais un esprit entrepreneurial. Votre réseau professionnel doit encore être étendu...`,
  buttons: ['Ok'],
  when: (state) => state.difficulty === 'hard'
},
{
  advice: `Les points faibles du marché représentent des problèmes qui attendent une solution. Dans la FoodTech, il y a deux grandes filières de startup : celles qui proposent des produits alimentaires alternatifs, et celles qui offrent un service aux restaurateurs comme aux clients. 
`,
  message: `Vous vous lancez dans la FoodTech (technologie alimentaire), l'un des secteurs les plus prometteurs pour le marché et les investisseurs. Vous identifiez un point faible du marché : la livraison à domicile des boissons. Vous créez une plateforme pour répondre à ce marché gigantesque et prometteur.`,
  buttons: ['Je continue']
},
{
  message: (state) => `Votre fond initial est de ${state.money} pièces d'or. Vous pouvez désormais suivre le déroulement financier de votre projet.`,
  buttons: ['Je continue']
},
// 4
{
  advice: `Barthélemy Aupée, créatur de quatre entreprises, pense que l'autofinancement est au coeur de la réussite des projets: “ça permet de garder le contrôle de son entreprise.” Il conseille un modèle d'affaires qui ne se porte pas sur des campagnes de levée de fonds. En revanche, le principe de lever de fonds est d’émettre des titres de votre société et les vendre à des investisseurs pour avoir des fonds de financement de votre startup. Les investisseurs se rémunèrent sur les plus-values réalisées lors de la revente de leurs participations.`,
  message: `Vous avez de l'épargne, et vous souhaitez l'investir dans votre projet pour le lancer. Cela montre à vos partenaires, vos clients et vos éventuels financeurs que vous êtes sérieux. Combien d'argent voulez-vous consacrer à votre projet de startup ?`,
  buttons: [
    {
      label: 'Rien du tout',
      action: (commit) => {
        commit('setAutoFinance', 0)
      }
    },
    {
      label: '30%',
      action: (commit) => {
        commit('setAutoFinance', 0.3)
        commit('multiplyMoneyBy', 1.3)
      }
    },
    {
      label: '50%',
      action: (commit) => {
        commit('setAutoFinance', 0.5)
        commit('multiplyMoneyBy', 1.5)
      }
    },
    {
      label: '70%',
      action: (commit) => {
        commit('setAutoFinance', 0.7)
        commit('multiplyMoneyBy', 1.7)
      }
    },
    {
      label: 'Tout',
      action: (commit) => {
        commit('setAutoFinance', 1)
        commit('multiplyMoneyBy', 2)
      }
    }
  ]
},
// 3
{
  advice: `“II faut s’associer avec des personnes qu’on aime. Créer une startup est trop compliqué, trop difficile et trop intense pour s'associer avec des gens qu'on n'aime pas”, dit Maxime Blondel de The Family, investisseur leader dans les startups européennes. Selon William Bonutto, CEO de la startup I’m Ok Solutions: “Faites attention à ne pas travailler avec des copains, mais avec les gens dont vous avez vraiment besoin”.`,
  message: `Deux de vos meilleurs amis ont exprimé leur intérêt dans ce projet. Souhaitez-vous travailler en équipe avec eux ?`,
  buttons: [
    {
      label: `Oui, l'union fait la force`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Non, merci!`
    }
  ]
},
{
  message: `Le garage semble être la première pépinière des grandes réussites tech (prenez l’exemple de Bill Gates ou Steve Jobs). Souhaitez-vous leur emboîter le pas ?`,
  buttons: [
    {
      label: `Oui, je m'installe dans le garage de ma mère`
    },
    {
      label: 'Non, un bureau semble plus sérieux',
      action: (commit) => {
        commit('addInvestorPoints', 5)
        commit('multiplyMoneyBy', 0.9)
      }
    }
  ]
},
{
  message: `Vous avez parlé de votre idée avec votre famille, vos ami.e.s et votre réseau professionnel. Les grands esprits se rencontrent, et ils vous aident en vous donnant un premier soutien financier.`,
  buttons: [{
    label: 'Ok',
    action: (commit, state) => commit('addMoney', state.difficulty === 'hard' ? 250 : 500)
  }]
},
{
  advice: `Un modèle économique durable est très recherché par les investisseurs - mais, en même temps,cette "obsession" pour la rentabilité peut "tuer l'innovation", car "la réussite n'est jamais prévue au début", explique le directeur d'un fonds d'investissement à Paris.`,
  message: `Certes l'idée de révolutionner le monde est une bonne chose, mais il faut aussi trouver un modèle économique de l’entreprise rentable et durable pour que votre jeune pousse fonctionne. Il n'est jamais trop tôt pour commencer à y réfléchir.`,
  buttons: [
    {
      label: `Oui, je m'y mets dès maintenant`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Non, ce n'est pas le plus important pour le moment`
    }
  ]
},
// 12
{
  advice: `"Si on veut pas toucher à des papiers, il faut pas devenir chef d'entreprise", explique simplement une avocate spécialisée en droit des entreprises en difficulté.`,
  message: `Voulez-vous enregistrer formellement votre entreprise auprès du Centre de Formalités des Entreprises ?`,
  buttons: [
    {
      label: `Non, je reste auto-entrepreneur pour le moment.`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Oui, je régularise mes affaires`,
      action: (commit) => {
        commit('addInvestorPoints', 5)
        commit('multiplyMoneyBy', 0.85)
      }
    }
  ]
},
// 13
{
  message: `Il est vendredi soir à 18h30. Que souhaitez-vous faire en fin d'une semaine intense au travail?`,
  buttons: [
    {
      label: `Le weekend n'existe pas pour les startuppeurs`
    },
    {
      label: `Le week-end est sacré. Je rentre à la maison pour reposer`
    },
    {
      label: `Je vais à un événement destiné à aider les entrepreneurs comme moi-même`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Je sors avec des amis. J'en ai le droit!`
    }
  ]
},
// 15
{
  message: `Félicitations ! Vous venez de fabriquer le prototype de votre appli que vous intitulez <b>JustDrink</b>. Faites des tests avant de la lancer officiellement sur le marché. Vous pouvez désormais surveiller votre notoriété parmi les utilisateurs`,
  buttons: [
    {
      label: `J'ai hâte !`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.95)
      }
    }]
},
// 18
{
  advice: `La part de marché - ou market share - est un indicateur qui permet de préciser l’importance d’une entreprise sur son marché. Connaître notre part de marché est importante pour comprendre la compétitivité de notre offre.`,
  message: `Un essai gratuit pourrait être une bonne idée pour attirer plus de clients potentiels, mais il y aurait des coûts supplémentaires. Voulez-vous tenter le coup ? Vous pouvez désormais voir votre part de marché`,
  buttons: [{
    label: 'Très bonne idée !',
    action: (commit, state) => {
      commit('multiplyMoneyBy', state.difficulty === 'hard' ? 0.5 : 0.75)
      commit('addReputationPoints', state.difficulty === `hard` ? 5 : 7)
    }
  },
  {
    label: `Ce n'est pas la peine`
  }
  ]
},
// 16
{
  advice: `“Ne vous associez pas par compétence. Une équipe dont les membres ont des compétences identiques réussira mieux, car cela permettra de maintenir le niveau d'énergie sur un même axe,” dit Maxime Blondel de The Family, investisseur leader dans les startups européennes. “Trouve des partenaires qui aient des contacts. Le cash n’est pas tout ce dont on a besoin - il est plus important de construire un network quand on lance une entreprise”, conseille William Bonutto de I’m Ok Solutions. “Aie un vrai vivier des gens prêts à travailler avec toi”.`,
  message: `Souhaitez-vous recruter plus de membres dans votre équipe ?`,
  buttons: [
    {
      label: `Oui ! Plus on est de fous, plus on rit`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.75)
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Non, pas encore`
    }
  ]
},
// 19
{
  advice: `Un modèle économique durable est très recherché par les investisseurs - mais, en même temps,cette "obsession" pour la rentabilité peut "tuer l'innovation", car "la réussite n'est jamais prévue au début", explique le directeur d'un fonds d'investissement à Paris.`,
  message: `N'oubliez pas votre business plan (modèle économique) ! Le voulez-vous affiner avant de procéder à la prochaine étape ?`,
  buttons: [
    {
      label: `Oui !`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.98)
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Non...`
    }
  ]
},
// 20
{
  advice: `En France, il y a plein d’aides aux entreprises - mais, avant de pouvoir postuler pour des formes d’aide publiques, il faut avoir déjà assez des fonds propres. Les délais sont souvent très longs et il faut donc avoir d’autres autres moyens de financement en attendant les aides.

Quels choix?
Prêts d’honneur (financement privé pour les startups)
Subventions et avances remboursables pour les startups
Aides de BPI France 
Concours nationaux d’aide à la création d’entreprises
Prêts d’amorçage
Incubateurs, accélérateurs ou pépinières d’entreprises`,

  message: `Pensez à régulariser vos activités à tout moment. Votre conseiller vous donnera plus d'informations sur les différents dispositifs d'aides aux startups mis en place par l'État`,
  buttons: [
    {
      label: `Bah oui ! Il faut formaliser !`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.85)
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Les papiers, en France ? Sérieux ?!`
    }
  ]
},
// 21
{
  message: `Vos partenaires et vos employés vous ont soutenu.e.s depuis le début du projet. Ne méritent-ils pas une récompense pour leur contribution ?`,
  buttons: [
    {
      label: `Oui, je donne une prime à chaque employé.e`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.85)
        commit('addReputationPoints', 2)
      }
    },
    {
      label: `Oui, je donne action à celles et ceux avec qui j'ai toujours travaillé`,
      action: (commit) => {
        commit('multiplyMoneyBy', 1.15)
        commit('addReputationPoints', 1)
      }
    },
    {
      label: `J’aimerais bien, mais l'entreprise n'est pas encore à ce stade-là`
    }
  ]
},
// 22
{
  message: `Un bureau décent est non seulement plus agréable pour travailler, mais donne une meilleure image de votre jeune pousse. Êtes-vous prêt.e à mieux vous loger ?`,
  buttons: [
    {
      label: `Oui, un bureau au cœur de Paris me paraît une bonne solution`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.9)
        commit('addInvestorPoints', 3)
      }
    },
    {
      label: `Oui, je cherche un espace co-working, pas terrible mais le budget n'est pas sans limite`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.95)
        commit('addReputationPoints', 2)
        commit('addInvestorPoints', 3)
      }
    },
    {
      label: ` Non, le garage de ma mère est gratuit, de toute façon`,
      action: commit => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 23
{
  message: `Les premiers clients ont donné des retours d'information, positifs comme négatifs...`,
  buttons: [
    {
      label: ` J'optimise l'appli en fonction de leurs conseils`,
      action: (commit) => {
        commit('multiplyMoneyBy', 1.1)
        commit('addReputationPoints', 3)
      }
    },
    {
      label: `Qui serait plus intelligent que moi !?`,
      action: (commit) => {
        commit('multiplyMoneyBy', 1.1)
      }
    }
  ]
},
// turn 24 fun event
{
  message: `Votre mère est très préoccupée par votre santé: vous ne mangez pas assez et vous passez tout votre temps devant l'ordinateur. Elle vous conseille d'aller chez le médecin, qui vous conseille de faire une pause. `,
  buttons: [
    {
      label: `Je suis le conseil du médecin et prends quelques jours de congé`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.95)
      }
    },
    {
      label: `J'appelle ma mère pour lui dire de me laisser tranquille.`,
      action: (commit) => {
        commit('addReputationPoints', -2)
      }
    },
    {
      label: `J'ignore les conseils médicaux malgré ma santé dégradante.`
    },
    {
      label: `Je m'auto-diagnostique et prends les comprimés que j'avais achetés en ligne`,
      // find a way to go to another page that says "Turns out those weird pills were actually bad for your health. You have to stay home sick for two weeks."
      action: (commit) => {
        commit('multiplyMoneyBy', 0.90)
      }
    }
  ]
},
// Maybe instead of giving a balances heet from time to time we can generate another page at this stage
// {
//   message: `Votre deuxième bilan est désormais disponible. Cliquez ici pour voir plus de détails.`,
//   buttons: [`Parfait!`]
// },
// 25 On a dit qu'on le fait pas
// 26
{
  message: `Félicitations ! Vous venez de lancer la V2 de votre appli !`,
  buttons: [
    {
      label: 'Magnifique !',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.15)
      }
    }
  ]
},
// 27
{
  message: `Est-il venu le temps d'étendre l'équipe ?`,
  buttons: [
    {
      label: `Plus on est nombreux, mieux c'est`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
        commit('multiplyMoneyBy', 0.75)
      }
    },
    {
      label: 'Mieux d`être seul que mal accompagné',
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 28
{
  advice: `“On n’a pas intérêt à chercher des fonds si on n’a pas de clients! Les gens que je connais qui ont levé des fonds avant de trouver des clients ont très vite été à court de cash”, dit William Bonutto de I’m Ok Solutions. Mais “Prendre des actionnaires, c’est perdre toute autonomie”, estime l’entrepreneur accompli Barthélemy Aupée.“Dans les incubateurs on nous apprend plus à faire une levée de fonds qu'à gérer concrètement une entreprise”, commente Elodie Vermast, CEO d’une start-up française. Un venture capitalist est d’accord: “ le but pour eux c’est d’accélérer le moment de mise à l’échelle”.`,
  message: `Vous apprenez qu’il y a des spécialistes qui accompagnent les entrepreneurs comme vous dans leurs activités. Voulez-vous vous adresser à eux ?`,
  buttons: [
    {
      label: `Oui, je souhaite voir un.e spécialiste sur la levée de fonds`,
      action: (commit) => {
        commit('addInvestorPoints', 5)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Oui, je souhaite voir un.e spécialiste sur les aides du gouvernement',
      action: (commit) => {
        commit('addInvestorPoints', 2)
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 3)
      }
    },
    {
      label: `Oui, je souhaite voir un.e spécialiste sur l'incubation et l'accélération`,
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 4)
      }
    },
    {
      label: `Non, il faut mettre l'argent là où on a besoin`,
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 29
{
  message: `Un plan de promotion permettrait d'attirer de nouveaux clients et de fidéliser les anciens, mais il aurait des coûts supplémentaires. Voulez-vous le lancer ?
`,
  buttons: [
    {
      label: `Mais oui, à grande échelle d'ailleurs !`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('addMoney', -100)
      }
    },
    {
      label: 'Oui, mais de manière modeste',
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('addMoney', -50)
      }
    },
    {
      label: 'Non, je compte plus au bouche-à-oreille',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 30
{
  message: `Souhaitez-vous faire une campagne publicitaire pour permettre à un plus grand public de connaître votre entreprise ?`,
  buttons: [
    {
      label: `Oui, de manière virale, en plus !`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('addMoney', -100)
      }
    },
    {
      label: 'Pourquoi pas, mas on reste prudent',
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('addMoney', -50)
      }
    },
    {
      label: 'Non, ce n`est pas nécessaire',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 31
{
  advice: `“On n’a pas intérêt à chercher des fonds si on n’a pas de clients! Les gens que je connais qui ont levé des fonds avant de trouver des clients ont très vite été à court de cash”, dit William Bonutto de I’m Ok Solutions.`,

  message: `Votre entreprise marche bien telle qu'elle est, mais avec plus de ressources financières elle ira plus loin. L'heure est-elle venue de lever des fonds ?`,
  buttons: [
    {
      label: `Oui, d'autant plus que l'avis positif d'un investisseur veut dire que ma startup est en plein potentiel`,
      action: (commit) => {
        commit('addInvestorPoints', 3)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: `Non, je ne veux pas perdre l'autonomie dans mes activités`,
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 32
{
  message: `Voulez-vous postuler à un programme d'aide aux entrepreneurs ou à un concours ?`,
  buttons: [
    {
      label: `Mais oui !`,
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Non, le processus administratif sera un vrai cauchemar de toute façon !',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 33
{
  message: `Un.e journaliste travaillant pour un média économique est intéressé.e par votre profil et souhaite dialoguer avec vous. Le verrez-vous ?
`,
  buttons: [
    {
      label: `Oui, je l'invite à mon bureau avec plaisir`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Oui, je lui passe un coup de fil vite fait',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 3)
      }
    },
    {
      label: `Non, et s'il écrit des mauvaises choses sur l'entreprise ?`,
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', -5)
      }
    }
  ]
},

// 34 fun (or panick) event
{
  message: `URGENT ! Vous avez rendez-vous avec un investisseur dans une heure, mais votre collègue étourdi a perdu les slides que vous devrez présenter ! Que faire maintenant ?`,
  buttons: [
    {
      label: `Je le punit en l'envoyant parler avec l'investisseur`,
      action: (commit) => {
        // can we generate some random number here? Cuz it's really beyond our control haha
        commit('addInvestorPoints', 2)
        commit('addReputationPoints', 2)
      }
    },
    {
      label: `J'improvise. Mes cours de théâtre ne sont pas pour rien`
    },
    {
      label: `Je reporte le rendez-vous`
    }
  ]
},
// 35 rep*2
{
  message: `Félicitations ! Vous venez de lancer la V4 de votre appli`,
  buttons: [
    {
      label: 'Magnifique !',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.1)
      }
    }
  ]
},
// 36
{
  advice: `“Trouve des partenaires qui aient des contacts. Le cash n’est pas tout ce dont on a besoin - il est plus important de construire un network quand on lance un entreprise”, conseille William Bonutto de I’m Ok Solutions. “Aie un vrai vivier des gens prêts à travailler avec toi”.`,

  message: `Est-il venu le temps d'étendre l'équipe ?`,
  buttons: [
    {
      label: `Plus on est nombreux, mieux c'est`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
        commit('multiplyMoneyBy', 0.75)
      }
    },
    {
      label: 'Mieux d`etre seul que mal accompagné',
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 37
{
  message: `Des spécialistes accompagnent les entrepreneurs comme vous dans leurs activités. Voulez-vous vous adresser à eux ?`,
  buttons: [
    {
      label: `Oui, je souhaite voir un.e spécialiste sur la levée de fonds`,
      action: (commit) => {
        commit('addInvestorPoints', 5)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Oui, je souhaite voir un.e spécialiste sur les aides du gouvernement',
      action: (commit) => {
        commit('addInvestorPoints', 2)
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 3)
      }
    },
    {
      label: 'Oui, je souhaite voir un.e spécialiste sur l`incubation et l`accélération',
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 4)
      }
    },
    {
      label: 'Non, il faut mettre l`argent là où c`est nécessaire)',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 38
{
  advice: `a piece of advice`,
  message: `Un plan de réduction permettrait d'attirer de nouveaux clients et fidéliser les anciens, mais aurait des coûts supplémentaires. Voulez-vous vous y mettre ?`,
  buttons: [
    {
      label: `Mais oui, à grande échelle d'ailleurs !`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('addMoney', -100)
      }
    },
    {
      label: 'Oui, mais de manière modeste',
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('addMoney', -50)
      }
    },
    {
      label: 'Non, je compte plus au bouche-à-oreille',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 39
{
  message: `Faire une campagne publicitaire pour permettre à un plus grand public de connaître votre entreprise ?`,
  buttons: [
    {
      label: `Oui, de manière virale, en plus !`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('addMoney', -100)
      }
    },
    {
      label: 'Pourquoi pas, mas on reste prudent',
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('addMoney', -50)
      }
    },
    {
      label: 'Non, ce n`est pas nécessaire',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 40
{
  message: `Votre entreprise marche bien telle qu'elle est, mais avec plus de ressources financières elle ira plus loin. L'heure est-elle venue de lever des fonds ?`,
  buttons: [
    {
      label: `Oui, d'autant plus que l'avis positif d'un investisseur veut dire que ma startup est en plein potentiel`,
      action: (commit) => {
        commit('addInvestorPoints', 3)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: `Non, je ne veux pas perdre l'autonomie dans mes activités`,
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 41
{
  message: `Voulez-vous postuler à un programme d'aide aux entrepreneurs ou à un concours ? (cliquez sur le bouton conseiller pour plus d'informations)`,
  buttons: [
    {
      label: `Mais oui !`,
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Non, le processus administratif sera un vrai cauchemar de toute façon !',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 42
{
  message: `Un journaliste travaillant pour un média économique est intéressé par votre profile et souhaite avoir un dialogue avec vous. Le verrez-vous ?`,
  buttons: [
    {
      label: `Oui, je l'invite dans mon bureau avec plaisir`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Oui, je lui passe un coup de fil vite fait',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 3)
      }
    },
    {
      label: `Non, et s'il écrit des mauvaises choses sur l'entreprise ?`,
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', -5)
      }
    }
  ]
},
// 44 rep*3
{
  message: `Félicitations ! Vous venez de lancer la V3 de votre appli`,
  buttons: [
    {
      label: 'Magnifique !',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.1)
      }
    }
  ]
},
// 45
{
  message: `Est-il venu le temps d'étendre l'équipe ?`,
  buttons: [
    {
      label: `Plus on est nombreux, mieux c'est`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
        commit('multiplyMoneyBy', 0.75)
      }
    },
    {
      label: `Mieux d'etre seul que mal accompagné`,
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 46
{
  message: `Des spécialistes accompagnent les entrepreneurs comme vous dans leurs activités. Voulez-vous vous adresser à eux ?`,
  buttons: [
    {
      label: `Oui, je souhaite voir un.e spécialiste sur la levée de fonds`,
      action: (commit) => {
        commit('addInvestorPoints', 5)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Oui, je souhaite voir un.e spécialiste sur les aides du gouvernement',
      action: (commit) => {
        commit('addInvestorPoints', 2)
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 3)
      }
    },
    {
      label: 'Oui, je souhaite voir un.e spécialiste sur l`incubation et l`accélération',
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 4)
      }
    },
    {
      label: `Non, il faut mettre l'argent là où c'est nécessaire)`,
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 47
{
  message: `Un plan de réduction permettrait d'attirer de nouveaux clients et fidéliser les anciens, mais aurait des coûts supplémentaires. Voulez-vous vous y mettre ?`,
  buttons: [
    {
      label: `Mais oui, à grande échelle d'ailleurs !`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('addMoney', -100)
      }
    },
    {
      label: 'Oui, mais de manière modeste',
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('addMoney', -50)
      }
    },
    {
      label: 'Non, je compte plus au bouche-à-oreille',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 48
{
  message: `Faire une campagne publicitaire pour permettre à un plus grand public de connaître votre entreprise ?`,
  buttons: [
    {
      label: `Oui, de manière virale, en plus !`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('addMoney', -100)
      }
    },
    {
      label: 'Pourquoi pas, mas on reste prudent',
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('addMoney', -50)
      }
    },
    {
      label: 'Non, ce n`est pas nécessaire',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 49
{
  message: `Votre entreprise marche bien telle qu'elle est, mais avec plus de ressources financières elle ira plus loin. L'heure est-elle venue de lever des fonds ?`,
  buttons: [
    {
      label: `Oui, d'autant plus que l'avis positif d'un investisseur veut dire que ma startup est en plein potentiel`,
      action: (commit) => {
        commit('addInvestorPoints', 3)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: `Non, je ne veux pas perdre l'autonomie dans mes activités`,
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 50
{
  message: `Voulez-vous postuler à un programme d'aide aux entrepreneurs ou à un concours ? (cliquez sur le bouton conseiller pour plus d'informations)`,
  buttons: [
    {
      label: `Mais oui !`,
      action: (commit) => {
        commit('addReputationPoints', 3)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Non, le processus administratif sera un vrai cauchemar de toute façon !',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 51
{
  message: `Un journaliste travaillant pour un média économique est intéressé par votre profile et souhaite avoir un dialogue avec vous. Le verrez-vous ?`,
  buttons: [
    {
      label: `Oui, je l'invite à mon bureau avec plaisir`,
      action: (commit) => {
        commit('addReputationPoints', 5)
        commit('multiplyMoneyBy', 1.05)
      }
    },
    {
      label: 'Oui, je lui passe un coup de fil vite fait',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', 3)
      }
    },
    {
      label: 'Non, et s`il écrit des mauvaises choses sur l`entreprise ?',
      action: (commit) => {
        commit('multiplyMoneyBy', 1.05)
        commit('addReputationPoints', -5)
      }
    }
  ]
}]
