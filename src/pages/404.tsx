import { Link } from "react-router-dom";
import { Page404Styles } from "../types/types";

export default function Page404() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go to Home</Link>
    </div>
  );
}

const styles: Page404Styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  header: {
    fontSize: '8rem',
    WebkitBackgroundClip: 'text',
    color: 'orange',
    fontFamily: '"Press Start 2P", monospace',


    fontWeight: 'bold',
    letterSpacing: '5px',
  },
  message: {
    fontSize: '1rem',
    margin: '20px 0',
    color: '#333',
  },
  link: {
    fontSize: '1rem',
    color: 'red',
    textDecoration: 'none',
  },
};
