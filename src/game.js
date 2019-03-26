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
        commit('multiplyMoneyBy', 0)
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
  message: `La réussite ne se fait guère seule. Deux de vos meilleurs amis ont exprimé leur intérêt à ce projet. Souhaitez-vous travaillez en équipe avec eux?`,
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
  message: `Le garage semble être la première pépinière des grandes réussites tech (prenez example de Bill Gates et Steve Jobs). Souhaitez-vous leur emboîter le pas? `,
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
}
]
