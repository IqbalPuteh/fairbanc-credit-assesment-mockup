
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className = "" }: PageContainerProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;
