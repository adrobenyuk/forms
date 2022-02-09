import { object, string, number, boolean } from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const billingFormSchema = object({
    firstName: string().min(5, "First name is lower than 5 chars").required(),
    lastName: string().max(125, "Last name is too long").required(),
    username: string().test(
        'username-rule',
        'Username should consists of letters and numbers only',
        (value) => new RegExp(/^[a-zA-Z0-9_-]*$/).test('' + value),
    ).required(),
    email: string().email().required(),
    address: string().required(),
    address2: string().test(
        'other-address',
        'Address must not be the same as the previous one',
        function (value) {
            if (value) {
                return value === this.parent.address;
            }
            return false;
        }
    ),
    country: string(),
    state: string(),
    zip: number().required(),
    payment: string().oneOf(['credit', 'debit', 'paypal']).required(),
    isSameAddress: boolean(),
    canSaveInfo: boolean(),
    ccName: string().required(),
    ccNumber: number().required(),
    ccExpiration: number().required(),
    ccCvv: number().required(),
});

export default yupResolver(billingFormSchema);