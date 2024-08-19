import React from "react";
import nacional from "../assets/nacional.jpg";


type Props = {
  src: string;
  titulo: string;
  descripcion: string;
  
};

function ItemAlbum(props: Props) {
  const { src, titulo, descripcion } = props;
  return (
    <div className="flex items-center justify-between">
      <img 
        src={nacional} 
        alt="" 
        className="w-40 object-cover p-[1px] bg-white" 
      />
      <div className="">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
      
      
    </div>
  );
}
const datos = [
  { titulo: 'Soda Stereo - Canción animal ', descripcion: 'Sony Music - 1990', src: nacional },
  { titulo: 'Fito Páez - El amor después del amor', descripcion: 'Warner - 1992', src: 'Roberto' },
  { titulo: 'Charly García - Piano Bar', descripcion: 'SG Discos - 1984', src: 'Sergio' },
  { titulo: 'Patricio Rey y sus Redonditos de Ricota', descripcion: 'Wormo - 1986', src: 'Javier' },
  { titulo: 'Los Autenticos Decadentes', descripcion: 'SG Discos - 1992', src: 'Banderas' },
];

function Album() {
  return (
    <div className="text-white px-4 mx-auto mt-40">
      <p className="text-[20px] font-bold">CLÁSICOS ROCK ARGENTINO</p>
      <div className="">
      {datos?.map(({ titulo, descripcion, src }) => {
        return <ItemAlbum titulo={titulo} descripcion={descripcion} src={src} />;
      })}
      </div>

    </div>
    
  );
}

export default Album;