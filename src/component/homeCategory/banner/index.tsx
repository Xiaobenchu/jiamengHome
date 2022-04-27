import Link from 'next/link';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './styles.module.scss';

interface BannerProps {
  data?: any;
  style: any;
}
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function Banner(props: BannerProps) {
  const { data, style, ...otherProps } = props;
  return (
    <div className={`${styles.bannerBox} ${style}`} {...otherProps}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <AutoPlaySwipeableViews className={styles.box} interval={3500}>
        {data.map((item: any) => (
          <Link
            href={{
              pathname: '/project/[id]',
              query: { id: item.targetId },
            }}
            key={item.id}
          >
            <a href={`/project/${item.targetId}`}>
              <img
                // eslint-disable-next-line global-require
                src={item.photo}
                className={styles.banner}
              />
            </a>
          </Link>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}
