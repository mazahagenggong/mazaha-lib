"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const moment_1 = __importDefault(require("moment"));
const KirimPesan = function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { bot_token, id, pesan, pengirim, waktu } = data;
        const apiUrl = `https://api.telegram.org/bot${bot_token}/sendMessage`;
        const date = (0, moment_1.default)().format('DD-MM-YYYY : HH:mm:ss');
        const garis = "-------------------------";
        let newPesan = "";
        if (pengirim) {
            newPesan = `Pesan dari : ${pengirim}\n${garis}\n`;
        }
        else {
            newPesan = `${pesan}\n`;
        }
        newPesan = newPesan + `${garis}\n${date}\n${garis}\n`;
        const params = {
            chat_id: id,
            pesan,
        };
        try {
            yield axios_1.default.post(apiUrl, params);
            return {
                success: true,
                data: {
                    id,
                    pesan,
                    pengirim,
                    waktu,
                }
            };
        }
        catch (error) {
            return {
                success: false,
                message: "Internal server error, koneksi ke telegram gagal",
                error
            };
        }
    });
};
exports.default = KirimPesan;
