export default [{
  message: `Ce jeu d'actualités est basé sur de vrais reportages, y compris des interviews avec des entrepreneurs, des investisseurs et des conseillers en création d'entreprise. Nous avons simplifié ce processus afin de mieux expliquer les étapes et les enjeux de l'entreprenariat. Or, dans la vraie vie, l'ambition entrepreneuriale implique bien plus de labeur et de savoir-faire...`,
  buttons: [`J'ai compris`]
},
{
  message: `Le celèbre entrepreneur Steve Blank l'explique simplement: "Une startup est une organisation temporaire à la recherche d'un business model industrialisable, rentable et permettant la croissance". En France, on a commencé a en entendre parler de plus en plus depuis la campagne electorale d'Emmanuel Macron, qui promettait de transformer le pays dans une "startup nation". Aujourd'hui, le monde des startups en France est plein d'incertitudes mais aussi d'opportunités. Voici où cet petit jeu entre en scène: pour vous aider à mieux comprendre ce que cela implique de lancer une startup!`,
  buttons: ['Je continue']
},
{
  message: `Choisissez votre niveau de difficulté. Cela affectera les évènements que vous rencontrerez dans votre aventure à venir.`,
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
{
  message: `Vous êtes un homme diplômé de l'une des meilleures école commerce mondiales avec plusieurs années d'expériences de travail et un vaste réseau professionnel.`,
  buttons: ['Ok'],
  when: (state) => state.difficulty === 'easy'
},
{
  message: `Vous êtes un.e jeune diplômé.e issu.e d'une famille d'immigration. Vous avez très peu d'expérience, mais de l'esprit entrepreneurial. Votre réseau professionnel reste à s'étendre.`,
  buttons: ['Ok'],
  when: (state) => state.difficulty === 'hard'
},
{
  message: `Vous vous êtes lancé.e dans la FoodTech (technologie alimentaire), l'un des secteurs les plus prometteurs et séduisants vis-à-vis du marché et des investisseurs. Vous avez identifié le market pains (douleur du marché) : la livraison à domicile des boissons. Vous créerez une plateforme pour adresser ce marché gigantesque et prometteur.`,
  buttons: ['Je continue']
},
{
  message: (state) => `Votre fond initial est de ${state.money} pièces d'or. Vous pouvez désormais suivre le déroulement financier de votre projet.`,
  buttons: ['Je continue']
},
{
  message: `Vous avez de l'épargne, et vous souhaitez en retirer une partie à votre projet pour le lancer. Cela montre à vos partenairs, vos clients et vos éventuels financeurs que vous êtes un bosseur sérieux. Combien d'argent voulez-vous consacrer à votre super projet startup ?`,
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
{
  message: `La réussite ne se fait guère seule. Deux de vos meilleurs amis ont exprimé leur intérêt à ce projet. Souhaitez-vous travaillez en équipe avec eux ?`,
  buttons: [
    {
      label: `Oui, l'union fait la force`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Non, mieux vaut être seul que mal accompagné`
    }
  ]
},
{
  message: `Le garage semble être la première pépinière des grandes réussites tech (prenez example de Bill Gates et Steve Jobs). Souhaitez-vous leur emboîter le pas ?`,
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
  message: `Vous avez parlé de votre géniale idée avec votre famille, vos ami.e.s et votre réseau professionnel. Les grands esprits se rencontrent, et ils vous ont aidé.e en vous donnant un premier soutien financier.`,
  buttons: [{
    label: 'Ok',
    action: (commit, state) => commit('addMoney', state.difficulty === 'hard' ? 500 : 250)
  }]
},
{
  message: `Certes l'idée de révolutionner le monde est une bonne chose, mais il faut aussi trouver un business model (modèle économique) rentable et durable pour que votre jeune pousse fonctionne, et il n'est jamais trop tôt de commencer à y réfléchir.`,
  buttons: [
    {
      label: `Oui, je m'y mets dès maintenant`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Non, c'est moins important pour le moment`
    }
  ]
},
// 12
{
  message: `Enregistrer formellement votre entreprise chez le Centre de Formalités des Entreprises ? Votre conseiller vous donnera plus d'informations sur les différents dispositifs d'aides aux startups mis en place par l'État`,
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
      label: `Le week-end est sacre. Je rentre à la maison pour reposer`
    },
    {
      label: `Je vais à un évènement destiné à aider les entrepreneurs comme moi-même`,
      action: (commit) => {
        commit('addInvestorPoints', 2)
      }
    },
    {
      label: `Je sors avec des amis. J'ai le droit, enfin !`
    }
  ]
},
// 15
{
  message: `Félicitations ! Vous venez de fabriquer l'appli JustDrink ! Faites des testes avant de la lancer officiellement dans le marché.`,
  buttons: [`Très bien !`]
},
// 16
{
  message: `Souhaitez-vous recruiter plus de membres dans votre équipe ?`,
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
// 17
{
  message: `WE NEED MORE INFO ON THIS, OR JUST LISTEN TO OUR ITWS`,
  buttons: [
    {
      label: `J'ai hâte !`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.95)
      }
    }
  ]
},
// 18
{
  message: `Un essai gratuit pourrait être bonne idée pour attirer plus de clients potentiels, mais aurait des coûts supplémentaires. Voulez-vous vous y mettre ? Vous pouvez désormais voir votre part de marché; conseils what is market share`,
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
// 19
{
  message: `N'oubliez pas votre business plan (modèle économique) ! Le voulez-vous raffiner avant de procéder à la prochaine étape ?`,
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
      label: `Les papiers, en France ? Sérieur ?!`
    }
  ]
},
// 21
{
  message: `Vos partenaires et vos employés vous ont soutenu.e depuis le début du projet. Ne méritent-ils pas une récompense pour leur contribution ?`,
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
      label: `Je voudrais bien, mais l'entreprise n'est pas encore à ce stade-là`
    }
  ]
},
// 22
{
  message: `Un bureau décent est non seulement plus agréable pour le travail, mais donne une image meilleure de votre jeune pousse. Êtes-vous prêt.e à vous loger mieux ?`,
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
      label: ` J'optimise l'appli en focntion de leurs conseils`,
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
// turn 24
{
  message: `Votre mère est très préoccupée: vous ne mangez pas assez, vous passez tout le temps à l'ordinateur, et ça fait longtemps qu'elle ne vous entend parler de quelque chose d'autre que le boulot. Elle en a parlé avec votre médicin conseil et il vous conseille de prendre une petite pause santé.`,
  buttons: [
    {
      label: `Je suive le conseil du médicin et je prends quelque jour de pause du travail.`,
      action: (commit) => {
        commit('multiplyMoneyBy', 0.95)
      }
    },
    {
      label: `J'appelle ma mère et je lui crie dessus parce-que je n'ai marre de ses préoccupations inutiles. Tout mes collègues m'entendent.`,
      action: (commit) => {
        commit('addReputationPoints', -2)
      }
    },
    {
      label: `J'ignore tout simplement les conseils (et aussi les petits symptomes de la fatigue que effectivement je sent)`
    },
    {
      label: `J'achète en ligne des bizarres pillules que promettent de me faire oublier la fatigue tout de suite.`,
      // find a way to go to another page that says "Turns out those weird pills were actually bad for your health. You have to stay home sick for two weeks."
      action: (commit) => {
        commit('multiplyMoneyBy', 0.90)
      }
    }
  ]
},
{
  message: `Votre deuxième bilan est désormais disponible. Cliquez ici pour voir plus de détails.`,
  buttons: [`Parfait!`]
},
// 25 On a dit qu'on le fait pas
// 26
{
  message: `Félicitations ! Vous venez de lancer la V2 de votre appli`,
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
      label: 'Mieux d`etre seul que mal accompagné',
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 28
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
      label: 'Oui, je souhaite voir un.e spécialite sur l`inculbation et l`accélération',
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
// 29
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
// 30
{
  message: `Faire une campaigne publicitaire pour permettre à un plus grand public de connaître votre entreprise ?`,
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
      label: 'Non, je ne veux pas perdre l`autonomie dans mes activités',
      action: (commit) => {
        commit('addInvestorPoints', 1)
        commit('multiplyMoneyBy', 1.05)
      }
    }
  ]
},
// 32
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
// 33
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
}
]
