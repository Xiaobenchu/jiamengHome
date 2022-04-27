import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface CategoryBoxProps {
  category?: any;
  focus: (val: any) => void;
  blur: () => void;
  isFocus: boolean;
  idx: number;
}

export function CategoryBox(props: CategoryBoxProps) {
  const { category, focus, blur, isFocus, idx } = props;
  const [checked, setChecked] = useState<number>(-1);
  const categoryData = [...category];
  const length = Math.round(category.length / 2);
  const categoryList = [];
  for (let i = 0; i < length; i += 1) {
    if (categoryData.length >= 2) {
      categoryList.push(categoryData.slice(0, 2));
      categoryData.splice(0, 2);
    }
    if (categoryData.length < 2 && categoryData.length) {
      categoryList.push(categoryData.slice(0, categoryData.length));
      categoryData.splice(0, categoryData.length);
    }
  }
  useEffect(() => {
    setChecked(idx);
  }, [idx]);

  return (
    <>
      <div className={`${styles.box} `}>
        {categoryList.map((item, index) => (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <div
            className={`${styles.container}`}
            style={
              index === idx
                ? {
                    borderLeft: '0.01rem solid #FA2B1E',
                    borderTop: '0.01rem solid #FA2B1E',
                    borderBottom: '0.01rem solid #FA2B1E',
                    borderRight: '0.01rem solid #ffffff',
                    marginLeft: '0.01rem',
                    position: 'relative',
                    zIndex: 999,
                    background: '#ffffff',
                  }
                : { borderBottom: '0.01rem solid #E8E8E8' }
            }
            key={index.toString()}
            onMouseOver={() => {
              focus(index);
              setChecked(index);
            }}
            onMouseLeave={() => {
              blur();
              // setChecked(-1);
            }}
          >
            <div className={styles.categoryBox}>
              <Link
                href={{
                  pathname: '/categorySearch/[id]',
                  query: { id: item[0].id },
                }}
              >
                <a
                  href={`/categorySearch/${item[0].id}`}
                  aria-label={item[0].seoKeywords}
                  title={item[0].seoTitle}
                >
                  <span className={styles.leftText}>{item[0].name}</span>
                </a>
              </Link>

              {item.length > 1 ? <span className={styles.text}>/</span> : null}
              {item.length > 1 ? (
                <Link
                  href={{
                    pathname: '/categorySearch/[id]',
                    query: { id: item[1].id },
                  }}
                >
                  <a
                    href={`/categorySearch/${item[0].id}`}
                    aria-label={item[1].seoKeywords}
                    title={item[1].seoTitle}
                  >
                    <span className={styles.rightText}>{item[1].name}</span>
                  </a>
                </Link>
              ) : null}
            </div>
            <div className={styles.iconBox}>
              {checked === index && isFocus ? null : (
                <span className={`${styles.toTopIcon} iconfont iconright`} />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
