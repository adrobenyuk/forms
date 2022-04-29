import Form from "../Form";
import "./styles.css";

function App() {
  return (
    <main className="container">
      <header className="py-5 text-center">
        <h2>Form example</h2>
        <p className="lead">
          This is a simle example of how to use the <code>UI kit</code> and{" "}
          <code>React hook form</code>
        </p>
      </header>

      <div className="row g-5 justify-content-center">
        <div className="col-md-7 col-lg-8">
          <Form />
        </div>
      </div>
      <footer className="pb-5" />
    </main>
  );
}

export default App;
