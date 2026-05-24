import './globals.css';

export const metadata = {
  title: 'greatempire dev | Full Stack Developer',
  description: 'greatempire dev is a Full Stack Developer specialized in Python, AI engineering, and scalable web applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
