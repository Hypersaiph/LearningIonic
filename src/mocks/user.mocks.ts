import { User } from '../models/user.interface';

const userList: User[] = [
  {
    name: 'PaulHaliday',
    company: 'PWH',
    location: 'Durham, UK',
    bio: 'I make videos on my favourite technologies, Go Angular!',
    avatar_url: 'http://i.imgur.com/jav62p6.jpg',
    email: 'paul@paul.com',
  },
  {
    name: 'JhonDoe',
    company: 'Doe and Co.',
    location: 'London, UK',
    bio: 'I love Ionic!',
    avatar_url: 'http://i.imgur.com/TzWcihb.png',
    email: '',
  }
];
export const USER_LIST = userList;
