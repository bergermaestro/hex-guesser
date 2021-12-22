function Settings() {
  return (
      <div className="text-white px-32 py-4 absolute bg-black opacity-95 rounded-2xl left-1/4 right-1/4 top-1/4 z-50 shadow-2xl">
          <h1 className="text-8xl font-bold my-6 text-center">Settings</h1>
          <div className="flex flex-row justify-between">    
            <p className="text-2xl">Dark Mode</p>
            <input type="checkbox" checked="false"/>
          </div>
      </div>
    );
  }
  
  export default Settings;
  