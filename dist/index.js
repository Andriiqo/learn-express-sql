"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// app.use(express.static(__dirname + "../public"))
// app.use('/', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })
app.use(express_1.default.static("../public/"));
app.use("/", function (_, response) {
    response.send("<h1>Главная страница</h1>");
});
app.listen(port, () => {
    console.log(`Server has been started on ${port} port`);
});
