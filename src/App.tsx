import "./index.css";
import { FC } from "react";
import { logo } from "./logo";

type HeaderProps = {
  children: React.ReactNode;
  logo?: string;
};

interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

function App() {
  return (
    <Header logo={logo}>
      <Links href="https://www.google.com/">Learn React</Links>

      <p className="not-italic text-gray-200 ">Yay</p>
    </Header>
  );
}

const Links: FC<LinkProps> = ({ children, ...restProps }) => {
  return (
    <a className="text-yellow-300   uppercase " {...restProps}>
      {children}
    </a>
  );
};

Links.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const Header: FC<HeaderProps> = ({ children, logo: newnamelogo }) => {
  return (
    <header className="flex flex-col  justify-center text-center text-2xl italic text-gray-500 mb-12">
      {Boolean(newnamelogo) ? (
        <img
          src={newnamelogo}
          alt="newnamelogop"
          srcSet={newnamelogo}
          className="my-5"
        />
      ) : (
        "There is no logo"
      )}
      {children}
    </header>
  );
};

export default App;
