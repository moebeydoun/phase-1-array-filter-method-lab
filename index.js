function findMatching(drivers, name) {
   
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    );
  
    return matchingDrivers;
  }
  function fuzzyMatch(drivers, query) {
    
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  
    return matchingDrivers;
  }
  function matchName(drivers, name) {
   
    const matchingDrivers = drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  
    return matchingDrivers;
  }