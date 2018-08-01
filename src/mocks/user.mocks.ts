import { User } from '../models/user.interface';

const userlist: User[] = [{
    name: 'Janhavi',
    company: 'Northeastern',
    location: 'Boston',
    bio: 'Web Developer | Software Engineer | Front end Developer',
    avatar_url: 'https://www.publicdomainpictures.net/pictures/200000/velka/woman-typing-office-computer.jpg',
    email: 'parulekar.j@husky.neu.edu'
},
{
    name: 'Pranjal',
    company: 'Northeastern',
    location: 'Boston',
    bio: 'Fullstack Developer',
    avatar_url: 'https://cdn.pixabay.com/photo/2018/06/23/01/59/desk-3491990_1280.png',
    email: 'maheshwari.p@husky.neu.edu'
}]

export const USER_LIST = userlist;