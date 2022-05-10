import React, { useState, useEffect } from 'react'

const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  }
}
const useMediaQuery = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimension());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimension());
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  
  return windowDimensions;
}

export default useMediaQuery