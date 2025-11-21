const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 mt-auto border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">Made by <span className="font-semibold text-white">Aman Dhiman</span></p>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>© 2025 Cricket Scoreboard System</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
