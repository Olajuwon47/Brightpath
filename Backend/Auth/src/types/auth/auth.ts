import { Role } from '@prisma/client';

export interface RegisterRequestBody {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    phone: string;
    state: string;
    region: string;
    role?: Role;
    active: boolean;
    createdAt: Date;
    authProvider: 'email' | 'google' | 'facebook' | 'microsoft' | 'apple';
}

export interface loginRegisterRequestBody {
    email: string;
    username:string;
    password: string;
    provider?: 'google' | 'facebook' | 'microsoft' | 'apple';
}


