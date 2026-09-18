import Link from "next/link";
import { Orbit } from "@/components/site";
export default function NotFound() {
  return (
    <section className="container not-found">
      <Orbit />
      <span className="eyebrow">404 / A LITTLE OUTSIDE THE CIRCLE</span>
      <h1>
        Let’s find
        <br />
        your way back.
      </h1>
      <p>This page may have moved, but your people are still here.</p>
      <Link href="/" className="button button-blue">
        Back to the circle ↗
      </Link>
    </section>
  );
}
