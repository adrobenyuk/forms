import { TextFieldValidationStatus } from '@shopmonkeyus/ui-kit/dist/components/forms/TextField/TextField';

export function getValidationStatus<T extends object>(
    errors: T,
    field: keyof T,
    defaultStatus: TextFieldValidationStatus | undefined = undefined
): TextFieldValidationStatus | undefined {
    if (field in errors) {
        return 'error';
    }
    return defaultStatus;
}

export { default } from './Form';
