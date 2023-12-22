export interface iUser {
  id: string;
  username: string;
  mobile: string;
  email: string;
  firstName: string;
  lastName: string;
  passwords: string;
  role: string;
  isVerified: boolean;
  status: UserStatus;
  DOB: Date;
  address: string;
  cratedAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  twoFactorEnabled: boolean;
  language: string;
  timeZone: string;
}

export enum UserStatus {
  ACTIVE,
  INACTIVE,
  PENDING,
  SUSPENDED,
}