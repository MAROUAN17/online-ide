import axios from "axios";
import { Languages } from "./constants.js";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})

export const executeCode = async (language, code) => {
    console.log(language);
    console.log(Languages[language])
    const res = await API.post("/execute", {
        "language": language,
        "version": Languages[language],
        "files": [
           {
            "content": code,
           },
        ],
    });
    return res.data;
}