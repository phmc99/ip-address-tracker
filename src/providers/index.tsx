import { ReactNode } from "react";
import { LocationProvider } from "./LocationProvider";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <LocationProvider>{children}</LocationProvider>
    </>
  );
};

export default Providers;
