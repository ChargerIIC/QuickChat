
import { Message } from "../../models/message/message.interface";
import { USER_LIST } from "../user/user.mock";

const messageList: Message[] = [
    {
        user: USER_LIST[0],
        date: new Date(),
        lastMessage: 'Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot back in time? We are going to Starbase Montgomery for Engineering consultations prompted by minor read-out anomalies. Probes have recorded unusual levels of geological activity in all five planetary systems. Assemble a team. Look at records of the Drema quadrant. Would these scans detect artificial transmissions as well as natural signals?'
    },
    {
        user: USER_LIST[1],
        date: new Date(),
        lastMessage: 'We are acquainted with the wormhole phenomenon, but this... Is a remarkable piece of bio-electronic engineering by which I see much of the EM spectrum ranging from heat and infrared through radio waves, et cetera, and forgive me if Ive said and listened to this a thousand times. This planets interior heat provides an abundance of geothermal energy. We need to neutralize the homing signal.'
    },
    {
        user: USER_LIST[2],
        date: new Date(),
        lastMessage: 'Exceeding reaction chamber thermal limit. We have begun power-supply calibration. Force fields have been established on all turbo lifts and crawlways. Computer, run a level-two diagnostic on warp-drive systems. Antimatter containment positive. Warp drive within normal parameters. I read an ion trail characteristic of a freighter escape pod. The bomb had a molecular-decay detonator. Detecting some unusual fluctuations in subspace frequencies.'
    },
    {
        user: USER_LIST[3],
        date: new Date(),
        lastMessage: 'Sensors indicate no shuttle or other ships in this sector. According to coordinates, we have travelled 7,000 light years and are located near the system J-25. Tractor beam released, sir. Force field maintaining our hull integrity. Damage report? Sections 27, 28 and 29 on decks four, five and six destroyed. Without our shields, at this range it is probable a photon detonation could destroy the Enterprise'
    },

]

export const MESSAGE_LIST = messageList;