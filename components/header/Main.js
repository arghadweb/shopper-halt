import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

export default function Main() {
  const { cart } = useSelector((state) => state);
  console.log(cart);

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/">
          <a>
            <span className={styles.logo}>
              SHOPPERS <span>.</span>
            </span>
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart">
          <a className={styles.cart}>
            <FaOpencart />
            <span>{cart.cartItems.length}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
