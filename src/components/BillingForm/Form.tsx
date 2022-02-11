import React from "react";
import { useForm } from "react-hook-form";
import { Checkbox, Radio, TextField } from "@shopmonkeyus/ui-kit";

import validation from "./validation";
import { getValidationStatus } from "./";

const BillingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: validation,
  });

  const onSubmit = <T extends unknown>(data: T) => console.log(data);

  console.log({
    BillingForm: "rendered",
  });

  const sameAddressField = register("isSameAddress");
  const saveInfoField = register("canSaveInfo");
  const paymentField = register("payment", { required: true });

  const handleSameAddressChange = React.useCallback(
    (value: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
      sameAddressField.onChange(e);
    },
    [sameAddressField]
  );

  const handleSaveInfoChange = React.useCallback(
    (value: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
      saveInfoField.onChange(e);
    },
    [saveInfoField]
  );

  const handlePaymentChange = React.useCallback(
    (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
      paymentField.onChange(e);
    },
    [paymentField]
  );

  return (
    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
      <div className="row g-3">
        <div className="col-sm-6">
          <TextField
            {...register("firstName", { required: true })}
            label="First name"
            required={true}
            validationStatus={getValidationStatus(errors, "firstName")}
            errorMessage={errors.firstName?.message}
          />
        </div>

        <div className="col-sm-6">
          <TextField
            {...register("lastName", { required: true })}
            label="Last name"
            required={true}
            validationStatus={getValidationStatus(errors, "lastName")}
            errorMessage={errors.lastName?.message}
          />
        </div>

        <div className="col-12">
          <TextField
            {...register("username", { required: true })}
            required={true}
            label="Username"
            validationStatus={getValidationStatus(errors, "username")}
            iconBefore={() => (
              <span className="text-brand" style={{ lineHeight: 1 }}>
                @
              </span>
            )}
            errorMessage={errors.username?.message}
          />
        </div>

        <div className="col-12">
          <TextField
            {...register("email", { required: true })}
            type="email"
            label="Email"
            required={true}
            placeholder="you@example.com"
            validationStatus={getValidationStatus(errors, "email")}
            errorMessage={errors.email?.message}
          />
        </div>

        <div className="col-12">
          <TextField
            {...register("address", { required: true })}
            required={true}
            label="Address"
            placeholder="1234 Main St"
            validationStatus={getValidationStatus(errors, "address")}
            errorMessage={errors.address?.message}
          />
        </div>

        <div className="col-12">
          <TextField
            {...register("address2")}
            label="Address 2"
            placeholder="Apartment or suite"
            validationStatus={getValidationStatus(errors, "address2")}
            errorMessage={errors.address2?.message}
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select className="form-select" id="country" {...register("country")}>
            <option value="">Choose...</option>
            <option value="USA">United States</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select className="form-select" id="state" {...register("state")}>
            <option value="">Choose...</option>
            <option value="California">California</option>
          </select>
          <div className="invalid-feedback">Please provide a valid state.</div>
        </div>

        <div className="col-md-3">
          <TextField
            {...register("zip", { required: true })}
            label="Zip"
            required={true}
            validationStatus={getValidationStatus(errors, "zip")}
            errorMessage={errors.zip?.message}
          />
        </div>
      </div>

      <hr className="my-4" />

      <Checkbox {...sameAddressField} onChange={handleSameAddressChange}>
        Shipping address is the same as my billing address
      </Checkbox>
      <Checkbox {...saveInfoField} onChange={handleSaveInfoChange}>
        Save this information for next time
      </Checkbox>

      <hr className="my-4" />

      <h4 className="mb-3">Payment</h4>

      <div className="my-3">
        <Radio.Group>
          <Radio
            {...paymentField}
            value="credit"
            onChange={handlePaymentChange}
          >
            Credit card
          </Radio>
          <Radio {...paymentField} value="debit" onChange={handlePaymentChange}>
            Debit card
          </Radio>
          <Radio
            {...paymentField}
            value="paypal"
            onChange={handlePaymentChange}
          >
            PayPal
          </Radio>
        </Radio.Group>
      </div>

      <div className="row gy-3">
        <div className="col-md-6">
          <TextField
            {...register("ccName", { required: true })}
            label="Name on card"
            required={true}
            validationStatus={getValidationStatus(errors, "ccName")}
            errorMessage={errors.ccName?.message}
          />
          <small className="text-muted">Full name as displayed on card</small>
        </div>

        <div className="col-md-6">
          <TextField
            {...register("ccNumber", { required: true, valueAsNumber: true })}
            required={true}
            label="Credit card number"
            validationStatus={getValidationStatus(errors, "ccNumber")}
            errorMessage={errors.ccNumber?.message}
          />
        </div>

        <div className="col-md-3">
          <TextField
            {...register("ccExpiration", { required: true })}
            label="Expiration"
            required={true}
            validationStatus={getValidationStatus(errors, "ccExpiration")}
            errorMessage={errors.ccExpiration?.message}
          />
        </div>

        <div className="col-md-3">
          <TextField
            {...register("ccCvv", { required: true, valueAsNumber: true })}
            label="CVV"
            required={true}
            validationStatus={getValidationStatus(errors, "ccCvv")}
            errorMessage={errors.ccCvv?.message}
          />
        </div>
      </div>

      <hr className="my-4" />

      <button className="w-100 btn btn-primary btn-lg" type="submit">
        Continue to checkout
      </button>
    </form>
  );
};

export default BillingForm;
