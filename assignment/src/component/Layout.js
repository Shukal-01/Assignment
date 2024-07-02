const Layout = ({ children }) => {
    return (
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-800 text-white">
          {children[0]}
        </aside>
        <main className="flex-1 bg-gray-100">
          {children[1]}
        </main>
      </div>
    );
  };
  
  export default Layout;
  