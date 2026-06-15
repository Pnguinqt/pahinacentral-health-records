import React from 'react';
import Button from './components/button';

function App() {
  
  return(

    <div className="mt-10 mx-10 gap-5 flex">
      <Button variant="primary" size="md">
      Save Patient
      </Button>

      <Button variant="secondary" size="md">
       Cancel
      </Button>

      <Button variant="danger" size="md">
        Delete Patient
      </Button>

      <Button variant="outline" size="md">
        View Details
      </Button>
    </div>
  )
  
}

export default App
