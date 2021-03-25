interface User{
    roles?: (string)[] | null;
    username: string;
    profilyazisi: string;
    email: string;
    password: string;
    phone: string;
    iban: string;
    FalciRutbesi: string;
    yediYirmidort: string;
    kazandigiKar: string;
    yaziliFalFiyat: string;
    canlifalFiyati: string;
    KahveFaliSayisi: string;
    adminFalciyaYorumlari?: null;
    baktigiFalAdi?: null;
    baktigiFalUcreti?: null;
    baktigiFalid?: null;
    cuzdan?: null;
    falbilgisi?: null;
    indirimkodu?: null;
    resimyolu?: null;
    yorumlar?: null;
    yorumsayisi?: null;
    id: string;
  }
  export default User;