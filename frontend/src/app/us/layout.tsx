import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Radius us",
  description: "Provided consultingservices",
};

const Layout = ({ children, }: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Layout;
