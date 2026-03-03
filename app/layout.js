export const metadata = {
  title: "MTECH Marketplace",
  description: "Secure Marketplace with Escrow Protection"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
