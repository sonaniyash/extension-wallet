import { CREATE_TYPE } from "../const/forms";

export interface CreateAccountData {
    email?: string,
    phone?: string,
    type?: CREATE_TYPE,
    firstName?: string,
    nearAccountId?: string,
    phrase?: string,
    status?: STATUS_CREATE_ACCT,
}

export enum STATUS_CREATE_ACCT {
    NONE_CREATED,
    PENDING_VERIFICATION,
    PENDING_NEAR_ACCT,

}

