import { Profile } from "../../models/profile/profile.interface";

const userList: Profile[] = [
    {
        firstName: 'Paul',
        lastName: 'Halliday',
        email: 'paul@paul.com',
        avatarPath: 'assets/img/AvatarTemp.jpg',
        dateOfBirth: new Date(),
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'paul@paul.com',
        avatarPath: 'assets/img/AvatarTemp.jpg',
        dateOfBirth: new Date(),
    },
    {
        firstName: 'Sara',
        lastName: 'Smith',
        email: 'sara@smith.com',
        avatarPath: 'assets/img/AvatarTemp.jpg',
        dateOfBirth: new Date(),
    },
    {
        firstName: 'Vernon',
        lastName: 'Burt',
        email: 'chargeriic@yahoo.com',
        avatarPath: 'assets/img/AvatarTemp.jpg',
        dateOfBirth: new Date(),
    },
]

export const USER_LIST = userList;