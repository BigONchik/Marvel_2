import Form from 'react-bootstrap/Form';

function Sort() {
  return (
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

export default Sort;