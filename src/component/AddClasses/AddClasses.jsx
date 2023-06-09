import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddClasses = () => {

    const { user} = useContext(AuthContext)
    const [className, setClassName] = useState('');
    const [classImage, setClassImage] = useState('');
    const [availableSeats, setAvailableSeats] = useState(0);
    const [price, setPrice] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a class object with the form values
      const newClass = {
        className,
        classImage,
        instructorName: user.displayName,
        instructorEmail: user.email,
        availableSeats,
        price,
        status: 'pending',
      };
  
      // Send the newClass object to your backend for database insertion
      // Example: sendToBackend(newClass);
      
      // Clear the form after submission
      setClassName('');
      setClassImage('');
      setAvailableSeats(0);
      setPrice(0);
    };

    return (
        <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-5xl font-semibold text-center">Add class</h2>
      <div className="flex items-center justify-between">
        <div>
          <label htmlFor="className" className="block text-sm font-medium text-gray-700">
            Class Name
          </label>
          <div className="mt-1">
            <input 
              id="className"
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
              className="input  input-bordered rounded-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="classImage" className="block text-sm font-medium text-gray-700">
            Class Image
          </label>
          <div className="mt-1">
            <input 
              id="classImage"
              type="text"
              value={classImage}
              onChange={(e) => setClassImage(e.target.value)}
              required
              className="input  input-bordered rounded-none"
            />
          </div>
        </div>
      </div>

<div className="flex items-center justify-between">
        <div>
          <label htmlFor="instructorName" className="block text-sm font-medium text-gray-700">
            Instructor Name
          </label>
          <div className="mt-1">
            <input 
              id="instructorName"
              type="text"
              value={user.displayName}
              readOnly
              className="input input-bordered rounded-none bg-gray-100"
            />
           </div>
        </div>

        <div>
          <label htmlFor="instructorEmail" className="block text-sm font-medium text-gray-700">
            Instructor Email
          </label>
          <div className="mt-1">
            <input 
              id="instructorEmail"
              type="text"
              value={user.email}
              readOnly
              className="input input-bordered rounded-none bg-gray-100"
            />
           </div>
        </div>
</div>
<div className="flex items-center justify-between">
  
        <div>
          <label htmlFor="availableSeats" className="block text-sm font-medium text-gray-700">
            Available Seats
          </label>
          <div className="mt-1">
            <input 
              id="availableSeats"
              type="number"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(Number(e.target.value))}
              required
              className="input input-bordered rounded-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <div className="mt-1">
            <input 
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
              className="input input-bordered rounded-none"
            />
          </div>
        </div>
</div>


        <div className="text-center">
          <button type="submit" className="btn bg-base-300">
            Add class
          </button>
        </div>
      </form>
    </div>
    );
};

export default AddClasses;