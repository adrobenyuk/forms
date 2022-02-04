import { Checkbox, Radio, TextField } from "@shopmonkeyus/ui-kit";

const BillingForm = () => {
  return (
    <form className="needs-validation">
      <div className="row g-3">
        <div className="col-sm-6">
          <TextField
            name="firstName"
            label="First name"
            required={true}
            errorMessage="Valid first name is required."
          />
        </div>

        <div className="col-sm-6">
          <TextField
            name="lastName"
            label="Last name"
            required={true}
            errorMessage="Valid last name is required."
          />
        </div>

        <div className="col-12">
          <TextField
            name="username"
            label="Username"
            required={true}
            iconBefore={() => (
              <span className="text-brand" style={{ lineHeight: 1 }}>
                @
              </span>
            )}
            errorMessage="Your username is required."
          />
        </div>

        <div className="col-12">
          <TextField
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            errorMessage="Please enter a valid email address for shipping updates."
          />
        </div>

        <div className="col-12">
          <TextField
            name="address"
            label="Address"
            required={true}
            placeholder="1234 Main St"
            errorMessage="Please enter your shipping address."
          />
        </div>

        <div className="col-12">
          <TextField
            name="address2"
            label="Address 2"
            required={true}
            placeholder="Apartment or suite"
            errorMessage="Please enter your shipping address."
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select className="form-select" id="country" required={true}>
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select className="form-select" id="state" required={true}>
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
            errorMessage="Zip code required."
          />
        </div>
      </div>

      <hr className="my-4" />

      <Checkbox name="same-address">
        Shipping address is the same as my billing address
      </Checkbox>
      <Checkbox name="save-info">Save this information for next time</Checkbox>

      <hr className="my-4" />

      <h4 className="mb-3">Payment</h4>

      <div className="my-3">
        <Radio.Group>
          <Radio name="payment" value="credit">
            Credit card
          </Radio>
          <Radio name="payment" value="debit">
            Debit card
          </Radio>
          <Radio name="payment" value="paypal">
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
            errorMessage="Name on card is required"
          />
          <small className="text-muted">Full name as displayed on card</small>
        </div>

        <div className="col-md-6">
          <TextField
            name="ccNumber"
            label="Credit card number"
            required={true}
            errorMessage="Credit card number is required"
          />
        </div>

        <div className="col-md-3">
          <TextField
            name="ccExpiration"
            label="Expiration"
            required={true}
            errorMessage="Expiration date required"
          />
        </div>

        <div className="col-md-3">
          <TextField
            name="ccCvv"
            label="CVV"
            required={true}
            errorMessage="Security code required"
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
