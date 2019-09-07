type TCredentials = {
    Email: string,
    Password: string
};

type TUserTicket = {
    accessToken: string,
    refreshToken: string
};

export {
    TCredentials,
    TUserTicket
};