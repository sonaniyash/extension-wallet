import { ConnectedExp } from "../components/ConnectedExpItem";
import { Contact } from "../components/ContactItem";

export const TEST_CONTACTS: Array<Contact> = [
  {
    id: "7",
    firstName: "Esther",
    lastName: "Howard",
    fullName: "Esther Howard",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "ester.near",
    email: "ester@test.com"
  },
  {
    id: "1",
    firstName: "Devon",
    lastName: "Lane",
    fullName: "Devon Lane",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "devon.near",
    email: "devon@test.com"
  },
  {
    id: "2",
    firstName: "Scott",
    lastName: "Pilgrim",
    fullName: "Scott Pilgrim",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "scottyboy.near",
    email: "scottyboy@test.com"
  },
  {
    id: "3",
    firstName: "Jhonny",
    lastName: "Wonder",
    fullName: "Jhonny Wonder",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "jwonder.near",
    email: "jwonder@test.com"
  },
  {
    id: "4",
    firstName: "Leslie",
    lastName: "Nope",
    fullName: "Leslie Nope",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "npleslie.near",
    email: "npleslie@test.com"
  },
  {
    id: "5",
    firstName: "Guadalupe",
    lastName: "Mendez",
    fullName: "Guadalupe Mendez",
    phone: "+3346 44446464",
    imgUrl: "",
    account: "mendezgd.near",
    email: "mendezgd@test.com"
  },
];

export  const TEST_ACCOUNTS = [
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

export const TEST_EXPERIENCES : Array<ConnectedExp>= [
  {
    id: "1",
    imgUrl: "/assets/app-1.png",
    name:"Docu sign",
    metadata:"12/10/2021 12:30 PM",
    relatedAccounts:[1,2,3]
  },
  {
    id: "2",
    imgUrl: "/assets/app-2.png",
    name:"Defi swap",
    metadata:"12/10/2021 12:30 PM",
    relatedAccounts:[1,2,3,4,5,6,7]
    
  },
  {
    id: "3",
    imgUrl: "/assets/account-1.png",
    name:"Testing app",
    metadata:"12/10/2021 12:45 PM",
    relatedAccounts:[3]
  }
]