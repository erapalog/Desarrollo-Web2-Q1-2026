'use client'
import NavBar from "../components/NavBar";
import ProviderProducto from "../providers/ProviderProducto";
import ProviderUsuario from "../providers/ProviderUsuario";

export default function  NameLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
          
            <ProviderProducto>
                <NavBar></NavBar>
                {children}
            </ProviderProducto>
          
    
    </div>
  );
}