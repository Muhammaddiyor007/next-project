import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Mini JSONPlaceholder',
  description: 'Simple project with Next.js and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-6">
        <Navbar />
        <main className="mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
