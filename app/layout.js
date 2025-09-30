import "./globals.css";

export const metadata = {
  title: "SteelEngrave - Confecții Metalice de Precizie",
  description: "Transformăm viziunea ta în realitate prin tehnologie avansată CNC, gravare laser și sudură profesională. De la prototip la serie mică și medie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
