import { FC } from "react";
import { Editor, widgetsCenter } from '../src';

const App: FC = () => {
  return <div>
    <Editor widgetsCenter={ widgetsCenter } />
  </div>;
};

export default App;