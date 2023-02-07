import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDownSFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.top__listItem}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
              alt="flag"
            />
            <span>India / INR</span>
          </li>

          <li className={styles.top__listItem}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>

          <li className={styles.top__listItem}>
            <span>Customer Service</span>
          </li>
          <li className={styles.top__listItem}>
            <span>Help</span>
          </li>
          <li className={styles.top__listItem}>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>
          <li
            className={styles.top__listItem}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {loggedIn ? (
              <div className={styles.flex}>
                <img
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                  alt=""
                />
                <span>Argha</span>
                <RiArrowDownSFill />
              </div>
            ) : (
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDownSFill />
              </div>
            )}
            {visible && <UserMenu loggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
