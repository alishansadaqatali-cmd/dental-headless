export default function Footer() {
    return (
      <footer className="bg-gray-100 py-12 px-6 mt-20 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-bold text-lg">Coding Dudees</h3>
            <p className="text-gray-500 text-sm">Headless WordPress & React Specialist</p>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }