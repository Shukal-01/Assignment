import { useState } from 'react';
import Sidebar from '@/component/Sidebar';
import Layout from '@/component/Layout';
import "../app/globals.css"
import TextEditor from '@/component/FileTypes/TextEditor';

const initialStructure = {
  files: [],
  folders: {
    src: {
      files: [],
      folders: {}
    }
  },
};

const Home = () => {
  const [structure, setStructure] = useState(initialStructure);

  return (
    <Layout>
      <Sidebar structure={structure} setStructure={setStructure} />
      {/* Main content area */}
      <div className="flex-1 p-4">
      <TextEditor/>
        
      </div>
    </Layout>
  );
};

export default Home;
