import Link from "next/link";

export default function FeatureCard({ name, href, icon }) {
  return (
    <Link href={href}>
      <a className="card">
        <h3>
          {icon} &nbsp; {name} &rarr;
        </h3>
      </a>
    </Link>
  );
}
