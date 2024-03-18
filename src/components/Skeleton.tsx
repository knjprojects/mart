import React from 'react'

type Props = {}
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';



const Skeletontest = (props: Props) => {
    
  return (
    <div>
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton count={5}  />
    </p>
    <h1>{'this is thing' || <Skeleton />}</h1>
  </SkeletonTheme></div>
  )
}

export default Skeletontest