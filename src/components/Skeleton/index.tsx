import { LoadingSkeleton } from './styled';

interface SkeletonProps {
  width: string;
  height: string;
}

const Skeleton = ({ width, height }: SkeletonProps) => (
  <LoadingSkeleton width={width} height={height} />
);

export default Skeleton;
