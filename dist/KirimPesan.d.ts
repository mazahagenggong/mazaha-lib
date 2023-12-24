type KirimPesanType = {
    bot_token: string;
    id: string;
    pesan: string;
    pengirim?: string;
    waktu: string;
};
declare const KirimPesan: (data: KirimPesanType) => Promise<{
    success: boolean;
    data: {
        id: string;
        pesan: string;
        pengirim: string | undefined;
        waktu: string;
    };
    message?: undefined;
    error?: undefined;
} | {
    success: boolean;
    message: string;
    error: unknown;
    data?: undefined;
}>;
export default KirimPesan;
//# sourceMappingURL=KirimPesan.d.ts.map