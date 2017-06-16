
import { Message } from "../../models/message/message.model";
import { USER_LIST } from "../user/user.mock";

const messageList: Message[] = [
    {
        user: USER_LIST[0],
        date: new Date(),
        data: ''
    },
    {
        user: USER_LIST[1],
        date: new Date(),
        data: ''
    },
    {
        user: USER_LIST[2],
        date: new Date(),
        data: ''
    },
    {
        user: USER_LIST[3],
        date: new Date(),
        data: ''
    },

]

export const MESSAGE_LIST = messageList;