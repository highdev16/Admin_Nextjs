import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext({
  isMobile: false,
  setMobile: async (mobile) => null,
});

export function AppWrapper({ children }) {
  const [isMobile, setMobile] = useState(false);
  const cxt = useAppContext();
  const onResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  console.log("parent", isMobile);
  return (
    <AppContext.Provider value={{ isMobile, setMobile }}>
      <AppContext.Consumer>
        {context => {
          cxt.isMobile = context.isMobile;
          cxt.setMobile = context.setMobile;
          return children;
        }}
      </AppContext.Consumer>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}