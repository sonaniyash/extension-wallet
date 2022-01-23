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

export const TEST_COLLECTIBLES: Array<Collectibles> = [
  {
    id: "1",
    name: "Panda",
    imgUrl: "/assets/panda_collectible.png",
    owner: "Fede123",
    description: "string long long long"
  },
  {
    id: "2",
    name: "Other",
    imgUrl: "/assets/app-2.png",
    owner: "Kun123",
    description: "string long long long"
  },
  {
    id: "3",
    name: "NFT",
    imgUrl: "/assets/nft_collectible.png",
    owner: "Lea123",
    description: "string long long long"
  },
  {
    id: "4",
    name: "D3",
    imgUrl: "/assets/d3.png",
    owner: "Julio123",
    description: "string long long long"
  },
];

export const TEST_OFFERS: Array<any> = [
  {
    id: "136516",
    ammount: "20.055",
    date: "2021-06-07 09:22:06"
  },
  {
    id: "994654",
    ammount: "0.325",
    date: "2021-12-07 09:22:06"
  },
  {
    id: "55111",
    ammount: "1.231",
    date: "2022-01-07 09:22:06"
  },
  {
    id: "123561",
    ammount: "12.221",
    date: "2022-01-01 09:22:06"
  },
]