import { PrimitiveProps } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: PrimitiveProps;
    }
  }
}
