export interface IUser {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    role: any;
    confirmed: boolean;
    profilePicture: string;
    companyIds?: string[];
    branchIds?: string[];
    companies?: any[];
    socialUsername?: string;
    staffPermissions?: any;
    street?: string;
    streetNo?: number;
    postalCode?: number;
    organisation?: any;
    diet?: any;
    administeredCompany: any;
    branches: any[];
}
