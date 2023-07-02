import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

const NotFound = () => {
  return (
    <Container>
      <EmptyState title="404" subtitle="That page that does not exist" />
    </Container>
  );
};

export default NotFound;
