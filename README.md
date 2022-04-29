# Shopmonkey & React hooks form

This repository was created as a simple example of how [React Hook Form](https://react-hook-form.com/) and Shopmonkey UI kit can be used to create forms.

## Form implementation
In [/src/components/Form](./tree/master/src/components/Form/Form.tsx) you will find an example of how you could use S2 UI kit component together with React hook form.

## Validation
We do not have a standard way of how forms should be validated on the frontend, but the frontend core team works on it.

The basic idea behind the validation of forms in the Shopmonkey application is to use JSON schema as a single source of truth during data validation. That's why we decided to choose React hook over other form libraries because it also provides a flexible way of implementing custom validation via creating [resolver function](https://github.com/react-hook-form/resolvers)
