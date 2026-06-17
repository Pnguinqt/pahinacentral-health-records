import React from 'react';
import Button from './components/button';
import Input from './components/Input';
import { useState } from "react";
import  {FaEye, FaEyeSlash} from "react-icons/fa";
function App() {

  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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


        <div className="flex gap-2">
            <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            className="w-full"
            />

            <Input 
            label="Password"
            type={showPassword ? "password" : "text"}
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            rightIcon={showPassword ? <FaEye /> : <FaEyeSlash />}
            onRightIconClick={() => setShowPassword(!showPassword)}
             />

         </div>
    </div>

  
  )
  
}

export default App
