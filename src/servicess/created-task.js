import { LoremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from 'uuid';


const lorem = new LoremIpsum();

export default function createdtask () {
    return {
        id: uuidv4(),
        text: lorem.generateSentences(5),
        completed:false,
    }
}