import "@provenme/styles";

export const metadata = {
  title: "ProvenMe Admin",
  description: "Admin panel placeholder",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-accent="violet"
      data-density="comfortable"
    >
      <body>{children}</body>
    </html>
  );
}
