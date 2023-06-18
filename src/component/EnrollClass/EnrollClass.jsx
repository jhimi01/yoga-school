import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EnrollClass = () => {
    const {id}= useParams();
    console.log(id)
    const [classInfo, setClassInfo] = useState(null);
    useEffect(() => {
        // Function to fetch class details by ID
        const fetchClassDetails = async () => {
          try {
            const response = await axios.get(`/api/classes/${id}`);
            const classData = response.data;
            setClassInfo(classData);
          } catch (error) {
            console.error('Error fetching class details:', error);
          }
        };
    
        fetchClassDetails();
      }, [id]);
    
      if (!classInfo) {
        return <div>Loading class details...</div>;
      }
    
    return (
        <div>
        <h2>{classInfo.className}</h2>
        <p>Price: ${classInfo.price}</p>
      </div>
    );
};

export default EnrollClass;