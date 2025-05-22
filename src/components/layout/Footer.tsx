
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 text-center text-sm text-gray-600 mt-auto">
      <p>© {currentYear} PT Fairbanc Technologies Indonesia</p>
      <p className="mt-2">
        This website and its contents are protected by Indonesia and international copyright laws.
        <br />
        Reproduction and distribution of the contents of this website without written permission is prohibited.
      </p>
    </footer>
  );
};

export default Footer;
