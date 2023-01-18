import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div className="container-fluid header">
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2 mt-5 input"
        id="inlineFormInput"
        placeholder="Digite..."
      />
      <div direction="horizontal">
        <Button className="button mt-5" variant="dark">
          {<FaSearch />}
        </Button>
      </div>
    </div>
  );
}

export default App;
