import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links() {
  return (
    <div className={styles.footer__links}>
      {links.map((link) => (
        <ul key={link.heading}>
          <b>{link.heading}</b>
          {link.links.map((nestedLink) => (
            <li key={nestedLink.name}>
              <Link href={nestedLink.link}>{nestedLink.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

const links = [
  {
    heading: "SHOPPER HALT",
    links: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Social Responsibility",
        link: "",
      },
      {
        name: "",
        link: "",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        name: "Shipping Info",
        link: "",
      },
      {
        name: "Returns",
        link: "",
      },
      {
        name: "How To Order",
        link: "",
      },
      {
        name: "How To Track",
        link: "",
      },
      {
        name: "Size Guide",
        link: "",
      },
    ],
  },
  {
    heading: "Customer service",
    links: [
      {
        name: "Customer service",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Consumers (Transactions)",
        link: "",
      },
      {
        name: "Take our feedback survey",
        link: "",
      },
    ],
  },
];
