const Footer = () => {
    return (
      <footer className="bg-forestGreen text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Digital Kisan Market</p>
          <div className="mt-2">
            <a
              href="/terms"
              className="hover:underline mx-2"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="hover:underline mx-2"
            >
              Privacy Policy
            </a>
          </div>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;
  