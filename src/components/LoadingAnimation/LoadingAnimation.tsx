import Loading from 'assets/images/Loading.json';
import Lottie from 'lottie-react';
import * as styled from './LoadingAnimation.styles';

function LoadingAnimation() {
  return (
    <styled.LoadingAnimationContainer>
      <styled.LottieContainer>
        <Lottie animationData={Loading} />
      </styled.LottieContainer>
    </styled.LoadingAnimationContainer>
  );
}

export default LoadingAnimation;
