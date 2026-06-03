export const metadata = {
  title: "ProvenMe Admin",
  description: "Admin panel placeholder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
