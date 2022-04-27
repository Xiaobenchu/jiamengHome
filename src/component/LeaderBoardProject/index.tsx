/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ApplyProjectOverlay } from '../project/applyProjectOverlay';
import styles from './styles.module.scss';

interface LeaderBoardProjectProps {
  data: any;
  noLeader?: boolean;
}

export function LeaderBoardProject(props: LeaderBoardProjectProps) {
  const { data, noLeader } = props;
  const cssList = [
    { background: 'linear-gradient(-30deg, #f5ce93, #d1a14f)' },
    {
      background: 'linear-gradient(-30deg, #72716e, #d7d2d2)',
    },
    {
      background: 'linear-gradient(-30deg, #a06d57, #f6d8c5)',
    },
    {
      background: 'linear-gradient(-30deg, #f5ce93, #d1a14f)',
    },
  ];

  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className={styles.container}>
        <Link
          href={{
            pathname: '/project/[id]',
            query: { id: data.projectId },
          }}
        >
          <a href={`/project/${data.projectId}`}>
            <div className={styles.leftBox}>
              <div className={styles.imgContainer}>
                <img className={styles.img} src={data.project.thumb} />
                {noLeader ? null : (
                  <div
                    className={styles.imgBox}
                    style={
                      data?.displayOrder <= 2
                        ? cssList[data?.displayOrder - 1]
                        : cssList[3]
                    }
                  >
                    <span className={styles.number}>
                      TOP{data?.displayOrder}
                    </span>
                  </div>
                )}
              </div>

              <div className={styles.projectContent}>
                <div className={styles.nameBox}>
                  <span className={styles.name}>{data.project.name}</span>
                  {data.project.star >= 3 ? (
                    <div className={styles.starBox}>
                      <span className={styles.star}>3星认证</span>
                    </div>
                  ) : null}
                </div>
                {data.project.feature ? (
                  <div className={styles.projectLabel}>
                    {data.project.feature.map((item: any, index: any) => (
                      <div className={styles.labelBox} key={index.toString()}>
                        <span className={styles.label}>{item}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <span className={styles.brief}>{data.project.brief}</span>

                <div className={styles.industryBox}>
                  <span className={styles.industry}>所属行业:</span>
                  <span className={styles.industryInfo}>
                    {data.project.category.name}
                  </span>
                </div>

                {/* <div className={styles.componyBox}>
                  <span className={styles.compony}>公司名称:</span>
                  <span className={styles.componyName}>
                    中国国际金融股份有限公司
                  </span>
                </div> */}

                <div className={styles.investBox}>
                  <span className={styles.invest}>投资金额:</span>
                  <span className={styles.amount}>
                    {data.project.minCost}-{data.project.maxCost}
                    <span
                      className={styles.invest}
                      style={{ color: '#FA2B1E' }}
                    >
                      万
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </Link>

        <div
          className={styles.btn}
          onPointerUp={() => {
            setShow(true);
          }}
        >
          <span className={styles.title}>加盟咨询</span>
        </div>
      </div>

      {show ? (
        <ApplyProjectOverlay
          data={data.project}
          close={() => {
            setShow(false);
          }}
        />
      ) : null}
    </>
  );
}
