import Image from 'next/image';

export const SDGIcon = () => (
  <span className="inline-flex items-center align-middle mx-1">
    <Image 
      src="https://storage.googleapis.com/aai-web-samples/prakruthi-shaale/sdg4.png" 
      alt="SDG 4 Icon" 
      width={20} 
      height={20} 
      className="inline-block"
    />
  </span>
);
