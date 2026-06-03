import Image from "next/image";
import { Button } from "@provenme/ui";

export default function Home() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <div>
          <h1>ProvenMe User Workspace</h1>
          <p>
            Your app is now running inside the Turborepo workspace at
            <code>apps/user</code>.
          </p>
        </div>
        <div className="hero-actions">
          <Button style={{ marginRight: 12 }}>Get started</Button>
          <a className="link-button" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Next.js Docs
          </a>
        </div>
      </main>
      <div className="hero-footer">
        <Image src="/vercel.svg" alt="Vercel logo" width={72} height={24} />
      </div>
    </div>
  );
}
