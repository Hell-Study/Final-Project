import React, { Suspense } from 'react';
import { PAIR_DATA } from './Widget.constants';
import { Carousel } from './Carousel';
import { Card } from './Card';
import * as styled from './Widget.styles';

export const Widget: React.FC = () => {
  return (
    <Suspense fallback={<styled.SkeletonCard />}>
      <Carousel slidesToShow={4}>
        {Object.entries(PAIR_DATA).map(([ticker, { id }]) => (
          <Card key={ticker} ticker={ticker} id={id} />
        ))}
      </Carousel>
    </Suspense>
  );
};
