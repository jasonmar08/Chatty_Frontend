export interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
  passwordDigest: string;
  phoneNumber?: string;
  profilePhoto?: string;
  verified: boolean;
}
