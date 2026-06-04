import Image from "next/image";
import { Button } from "@provenme/ui";

export default function Home() {
  return (
    <div className="w-full max-w-md rounded-[32px] border border-pm-l2 bg-pm-s1 p-10 shadow-pm-lg">
      <main className="page-main">
        <div className="w-full max-w-md rounded-[32px] border border-pm-l2 bg-pm-s2 p-10 shadow-pm-lg">
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
