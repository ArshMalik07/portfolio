declare module 'react-typewriter-effect' {
  import { FC } from 'react';

  interface TypewriterProps {
    text: string[];
    cursorColor?: string;
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
    loop?: boolean;
  }

  const Typewriter: FC<TypewriterProps>;
  export default Typewriter;
}
