import { Checkbox, Radio, TextField } from "@shopmonkeyus/ui-kit";
import { useFormik } from "formik";

import { PaymentType } from ".";
import validationSchema from "./validation";

interface BillingData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  address: string;
  address2?: string;
  country: string;
  state: string;
  zip: number;
  sameAddress: boolean;
  saveInfo: boolean;
  payment: PaymentType;
  ccName: string;
  ccNumber: number;
  ccExpiration: string;
  ccCvv: number;
}

const initialValues = {
  payment: "credit",
  sameAddress: false,
  saveInfo: true,
} as BillingData;
let counter = 0;

const BillingForm = () => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik<BillingData>({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log({ submit: values });
      },
    });

  counter++;

  console.log({ render: `BillingForm ${counter}`, errors, touched });

  return (
    <form className="needs-validation" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-sm-6">
          <TextField
            name="firstName"
            label="First name"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            validationStatus={
              touched.firstName && errors.firstName ? "error" : undefined
            }
            errorMessage={errors.firstName}
          />
        </div>

        <div className="col-sm-6">
          <TextField
            name="lastName"
            label="Last name"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            validationStatus={
              touched.lastName && errors.lastName ? "error" : undefined
            }
            errorMessage={errors.lastName}
          />
        </div>

        <div className="col-12">
          <TextField
            name="username"
            label="Username"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            iconBefore={() => (
              <span className="text-brand" style={{ lineHeight: 1 }}>
                @
              </span>
            )}
            validationStatus={
              touched.username && errors.username ? "error" : undefined
            }
            errorMessage={errors.username}
          />
        </div>

        <div className="col-12">
          <TextField
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            validationStatus={
              touched.email && errors.email ? "error" : undefined
            }
            errorMessage={errors.email}
          />
        </div>

        <div className="col-12">
          <TextField
            name="address"
            label="Address"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="1234 Main St"
            validationStatus={
              touched.address && errors.address ? "error" : undefined
            }
            errorMessage={errors.address}
          />
        </div>

        <div className="col-12">
          <TextField
            name="address2"
            label="Address 2"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Apartment or suite"
            validationStatus={
              touched.address2 && errors.address2 ? "error" : undefined
            }
            errorMessage={errors.address2}
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            className="form-select"
            id="country"
            required={true}
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="state"
            required={true}
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Choose...</option>
            <option>California</option>
          </select>
          <div className="invalid-feedback">Please provide a valid state.</div>
        </div>

        <div className="col-md-3">
          <TextField
            name="zip"
            label="Zip"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            validationStatus={touched.zip && errors.zip ? "error" : undefined}
            errorMessage={errors.zip}
          />
        </div>
      </div>

      <hr className="my-4" />

      <Checkbox
        name="sameAddress"
        value=""
        checked={values.sameAddress}
        onChange={(val, e) => handleChange(e)}
        onBlur={handleBlur}
      >
        Shipping address is the same as my billing address
      </Checkbox>
      <Checkbox
        name="saveInfo"
        value=""
        // It is necessary to provide default values for checkboxes
        checked={values.saveInfo}
        onChange={(val, e) => handleChange(e)}
        onBlur={handleBlur}
      >
        Save this information for next time
      </Checkbox>

      <hr className="my-4" />

      <h4 className="mb-3">Payment</h4>

      <div className="my-3">
        <Radio.Group>
          <Radio
            name="payment"
            value="credit"
            checked={values.payment === "credit"}
            onChange={(val, e) => handleChange(e)}
            onBlur={handleBlur}
          >
            Credit card
          </Radio>
          <Radio
            name="payment"
            value="debit"
            checked={values.payment === "debit"}
            onChange={(val, e) => handleChange(e)}
            onBlur={handleBlur}
          >
            Debit card
          </Radio>
          <Radio
            name="payment"
            value="paypal"
            checked={values.payment === "paypal"}
            onChange={(val, e) => handleChange(e)}
            onBlur={handleBlur}
          >
            PayPal
          </Radio>
        </Radio.Group>
      </div>

      <div className="row gy-3">
        <div className="col-md-6">
          <TextField
            name="ccName"
            label="Name on card"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            validationStatus={
              touched.ccName && errors.ccName ? "error" : undefined
            }
            errorMessage={errors.ccName}
          />
          <small className="text-muted">Full name as displayed on card</small>
        </div>

        <div className="col-md-6">
          <TextField
            name="ccNumber"
            label="Credit card number"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            validationStatus={
              touched.ccNumber && errors.ccNumber ? "error" : undefined
            }
            errorMessage={errors.ccNumber}
          />
        </div>

        <div className="col-md-3">
          <TextField
            name="ccExpiration"
            label="Expiration"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            validationStatus={
              touched.ccExpiration && errors.ccExpiration ? "error" : undefined
            }
            errorMessage={errors.ccExpiration}
          />
        </div>

        <div className="col-md-3">
          <TextField
            name="ccCvv"
            label="CVV"
            required={true}
            onChange={handleChange}
            onBlur={handleBlur}
            validationStatus={
              touched.ccCvv && errors.ccCvv ? "error" : undefined
            }
            errorMessage={errors.ccCvv}
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
