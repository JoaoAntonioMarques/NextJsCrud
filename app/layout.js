import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD | Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container-fluid mt-4">{children}</div>
      </body>

<head>
             <meta name="description" content="Explore o mundo do tênis, um esporte emocionante e cheio de história." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href={inter.cssHref} rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <style>
          {`
            .carousel-item {
              height: 400px;
            }

            .image-container {
              position: relative;
            }
            
            .overlay-text {
              position: absolute;
              bottom: 20px; /* Ajuste conforme necessário */
              left: 20px; /* Ajuste conforme necessário */
              color: white;
              font-size: 18px;
              font-weight: bold;
            }            

            .carousel-item img {
              object-fit: cover;
              height: 100%;
              width: 100%;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Início</a>
              </li>
              
            </ul>
          </nav>
        </header>
        {children}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}