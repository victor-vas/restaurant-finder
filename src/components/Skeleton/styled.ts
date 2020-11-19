import styled, { keyframes } from 'styled-components';

interface LoadingSkeletonProps {
  width: string;
  height: string;
}

const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props: LoadingSkeletonProps) => props.width};
  height: ${(props: LoadingSkeletonProps) => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;
