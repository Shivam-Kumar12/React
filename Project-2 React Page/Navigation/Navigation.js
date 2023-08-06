import styles from './Navigation.module.css';

const Navigation = () => {
    return (
      <nav className={`container ${styles.Navigation}`}>
        <div className="logo">
          <img src="images/Frame2.png" alt="logo" />
        </div>
        <ul>
           <li href="#">HOME</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;
  