export type UserDetails = {
    id: string;
    name: string;
    email: string;
}

export type UserState = {
    details: UserDetails | null;
}