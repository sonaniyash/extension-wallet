import { ConnectedExp } from "../components/ConnectedExpItem";
import { Contact } from "../components/ContactItem";
import { Collectibles } from "../views/DetailCollectible";

export const TEST_CONTACTS: Array<Contact> = [
  {
    id: "7",
    first_name: "Esther",
    last_name: "Howard",
    fullName: "Esther Howard",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "ester.near",
    email: "ester@test.com",
    contact_id: "213dasd2121e21"
  },
  {
    id: "1",
    first_name: "Devon",
    last_name: "Lane",
    fullName: "Devon Lane",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "devon.near",
    email: "devon@test.com",
    contact_id: "12xe12e1c2e12"
  },
  {
    id: "2",
    first_name: "Scott",
    last_name: "Pilgrim",
    fullName: "Scott Pilgrim",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "scottyboy.near",
    email: "scottyboy@test.com",
    contact_id: "12e1c2e1c21x"
  },
  {
    id: "3",
    first_name: "Jhonny",
    last_name: "Wonder",
    fullName: "Jhonny Wonder",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "jwonder.near",
    email: "jwonder@test.com",
    contact_id: "12ex12c13412"
  },
  {
    id: "4",
    first_name: "Leslie",
    last_name: "Nope",
    fullName: "Leslie Nope",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "npleslie.near",
    email: "npleslie@test.com",
    contact_id: "112421dfdsfs"
  },
  {
    id: "5",
    first_name: "Guadalupe",
    last_name: "Mendez",
    fullName: "Guadalupe Mendez",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "mendezgd.near",
    email: "mendezgd@test.com",
    contact_id: "234325ewert34"
  },
];

export const CONTACTS: Array<any> = [
  {
      "job_title": "Mr",
      "contact_id": "2ZOuwYrXJ3uxLqpDhLOkt",
      "status": "active",
      "created": 1642447925298,
      "companies": [],
      "address": [],
      "email": ["hello@gmail.com"],
      "owner_id": "iU2RFCokK9_wQUQ55DPl_",
      "archived_date": "",
      "app_id": "24ouy682yt",
      "groups": [],
      "updated": 1642447925298,
      "import_source": "google",
      "last_name": "aguero",
      "wallet_id": "1",
      "dob": "1973-04-24",
      "first_name": "sergio",
      "phone": [
          {
              "type": "home",
              "number": "18088296213"
          }
      ],
      "modified": 1642447925298,
      "birthday": "04-24"
  },
  {
    "job_title": "Mr",
    "contact_id": "2ZOuwYrXJ3uxLqpDhLOk",
    "status": "active",
    "created": 1642447925298,
    "companies": [],
    "address": [],
    "email": ["hello@gmail.com"],
    "owner_id": "iU2RFCokK9_wQUQ55DPl_",
    "archived_date": "",
    "app_id": "24ouy682yt",
    "groups": [],
    "updated": 1642447925298,
    "import_source": "google",
    "last_name": "user",
    "dob": "1973-04-24",
    "first_name": "Guest",
    "phone": [
        {
            "type": "home",
            "number": "18088296213"
        }
    ],
    "modified": 1642447925298,
    "birthday": "04-24"
}
]

export const TEST_ACCOUNTS = [
  {
    image: "/assets/account-1.png",
    name: "jhonsdoe.near",
    ammount: 0.13,
    selected: true,
  },
  {
    image: "/assets/account-2.png",
    name: "jhons.near",
    ammount: 2.24,
    selected: false,
  },
  {
    image: "/assets/account-3.png",
    name: "mikse.near",
    ammount: 3.33,
    selected: false,
  },
];

export const TEST_EXPERIENCES: Array<ConnectedExp> = [
  {
    id: "1",
    imgUrl: "/assets/app-1.png",
    name: "Docu sign",
    metadata: "12/10/2021 12:30 PM",
    relatedAccounts: [1, 2, 3]
  },
  {
    id: "2",
    imgUrl: "/assets/app-2.png",
    name: "Defi swap",
    metadata: "12/10/2021 12:30 PM",
    relatedAccounts: [1, 2, 3, 4, 5, 6, 7]

  },
  {
    id: "3",
    imgUrl: "/assets/account-1.png",
    name: "Testing app",
    metadata: "12/10/2021 12:45 PM",
    relatedAccounts: [3]
  }
];

export const EXPERIENCES = {
  recent: [
    {
      name: 'DeFi Swap',
      description: 'Swap your digital assets',
      image: './assets/mock/images/defi.svg',
      subscribeAmount: '+200',
    },
    {
      name: 'Docu sign',
      description: 'sign smart contracts seamlessly',
      image: './assets/mock/images/docu.svg',
      subscribeAmount: '+1k',
    },
  ],
  other: [
    {
      name: 'DeFi Swap',
      description: 'Invest in digital assets',
      image: './assets/mock/images/defi.svg',
      subscribeAmount: '+200',
    },
    {
      name: 'DeFi Invest',
      description: 'Swap your digital assets',
      image: './assets/mock/images/defi-invest.svg',
      subscribeAmount: '+15k',
    },
    {
      name: 'DeFolio',
      description: 'Track your DeFi assets',
      image: './assets/mock/images/defolio.svg',
      subscribeAmount: '+12k',
    },
    {
      name: 'Docu sign',
      description: 'sign smart contracts seamlessly',
      image: './assets/mock/images/docu.svg',
      subscribeAmount: '+1k',
    },
  ],
};

export const TEST_COLLECTIBLES: Array<any> = [
  {
    nft_id: "thHkGvISXhucKPxr9BvB4",
    updated: 1642181349003,
    status: "active",
    category: "Digital Arts",
    created: 1642181349003,
    attributes: [
        {}
    ],
    description: "Al diego le gusta esto",
    owner_id: "wQWFNYPkTYy5rRzmWnO76",
    file_url: "/assets/panda_collectible.png",
    title: "medabot trucho"
  }
];

export const TEST_OFFERS: Array<any> = [
  {
    id: "136516",
    ammount: "20.055",
    date: "2021-06-07 09:22:06",
    owner: 'El kun'
  },
  {
    id: "994654",
    ammount: "0.325",
    date: "2021-12-07 09:22:06",
    owner: 'Lea'
  },
  {
    id: "55111",
    ammount: "1.231",
    date: "2022-01-07 09:22:06",
    owner: 'Julio'
  },
  {
    id: "123561",
    ammount: "12.221",
    date: "2022-01-01 09:22:06",
    owner: 'Fede'
  },
];

export const CATEGORIES: Array<any> = [
  {
    name: 'Exchanges',
    icon: './assets/experience/categories/exchanges.svg',
    backgroundColor: '#EAEFFF',
  },
  {
    name: 'Games',
    icon: './assets/experience/categories/games.svg',
    backgroundColor: '#F5F5F5',
  },
  {
    name: 'Marketplaces',
    icon: './assets/experience/categories/marketplaces.svg',
    backgroundColor: '#E2F9F3',
  },
  {
    name: 'Defi',
    icon: './assets/experience/categories/defi.svg',
    backgroundColor: '#FFF3EC',
  },
  {
    name: 'Collectibles',
    icon: './assets/experience/categories/collectibles.svg',
    backgroundColor: '#EBF5FF',
  },
  {
    name: 'Utilities',
    icon: './assets/experience/categories/utilities.svg',
    backgroundColor: '#F0EBFF',
  },
];

export const TEST_HISTORY: Array<any> = [
  {
    type: 'send',
    owner: 'Fede.near',
    id: "123",
    to: 'Lea.near',
    date: "2022-01-07 09:22:06",
    image: "/assets/account-1.png",

  },
  {
    type: 'mint',
    owner: 'kun.near',
    id: "124",
    to: '',
    date: "2022-01-07 09:22:06",
    image: "/assets/account-1.png",

  },
  {
    type: 'send',
    owner: 'Fede.near',
    id: "125",
    to: 'Lea.near',
    date: "2022-01-07 09:22:06",
    image: "/assets/account-1.png",

  }
];
