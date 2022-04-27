import { useState } from 'react';
import styles from './styles.module.scss';

interface CategoryCenterComponentProps {
  data?: any;
  categoryIndex: number;
  focus: () => void;
  blur: () => void;
  style: any;
  hotProject: any;
}

export function CategoryCenterComponent(props: CategoryCenterComponentProps) {
  const { data, categoryIndex, focus, blur, style, hotProject } = props;

  return (
    <>
      <div className={`${styles.container} ${style}`}>
        {data.map((item: any, index: number) => {
          const div = item.map((item1: any, index1: number) => (
            <div className={styles.box} key={index1.toString()}>
              <span className={styles.title}>{item1.name}</span>
              <div className={styles.categoryBox}>
                {item1.children.map((ite: any, idx: number) => (
                  <div className={styles.categoryInfo} key={idx.toString()}>
                    <a
                      href={`/categorySearch/${ite.id}`}
                      aria-label={ite.seoKeywords}
                      title={ite.seoTitle}
                    >
                      <span className={styles.category}>{ite.name}</span>
                    </a>
                    {item.children && idx !== item.children.length - 1 ? (
                      <span className={styles.line}>|</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ));
          return (
            // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
            <div
              className={
                categoryIndex === index
                  ? styles.entireBox
                  : styles.entireBoxHidden
              }
              onMouseOver={() => {
                focus();
              }}
              onMouseLeave={() => {
                blur();
              }}
              key={index.toString()}
            >
              {div}
              <div className={styles.projectBox}>
                <span className={styles.title}>热门项目</span>
                <div className={styles.projectList}>
                  {hotProject.map((hotItem: any, hitIndex: number) => (
                    <a
                      key={hitIndex.toString()}
                      href={`/project/${hotItem.id}`}
                    >
                      <img
                        className={styles.img}
                        src={hotItem.thumb}
                        alt={item.name}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
