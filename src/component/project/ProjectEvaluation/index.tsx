// import { useState } from 'react';
import styles from './styles.module.css';

interface ProjectEvaluationProps {
  data: any;
}

export function ProjectEvaluation(props: ProjectEvaluationProps) {
  const { data } = props;

  //   const [show, setShow] = useState(false);
  const startImg = (val: any) => {
    const startYellowList: JSX.Element[] = [];
    const startGreyList: JSX.Element[] = [];
    const grey = 5 - val;
    for (let i = 0; i < val; i += 1) {
      startYellowList.push(
        <img
          // eslint-disable-next-line global-require
          src={require('@/images/projectDetails/start_yellow.png')}
          className={styles.startYellow}
        />,
      );
    }
    for (let i = 0; i < grey; i += 1) {
      startGreyList.push(
        <img
          // eslint-disable-next-line global-require
          src={require('@/images/projectDetails/start_gray.png')}
          className={styles.startYellow}
        />,
      );
    }

    return (
      <div className={styles.startYellowBox}>
        {startYellowList}
        {startGreyList}
      </div>
    );
  };

  return (
    <div className={styles.box}>
      <div className={styles.ProjectEvaluation}>
        <span>星级认证报告</span>
        <div className={styles.contentBox}>
          <div className={styles.star}>{data.star}星认证</div>
          <div className={styles.starContent}>
            <div className={styles.starListItem}>
              <span>企业资料完成度</span>
              <div>{startImg(data?.report.completion)}</div>
            </div>
            <div className={`${styles.starListItem} ${styles.longStar}`}>
              <span>项目加盟扶持力度</span>
              <div>{startImg(data?.report.support)}</div>
            </div>
            <div className={styles.starListItem}>
              <span>加盟网络覆盖度</span>
              <div>{startImg(data?.report.coverage)}</div>
            </div>
            <div className={`${styles.starListItem} ${styles.longStar}`}>
              <span>品牌影响力与成长性</span>
              <div>{startImg(data?.report.influence)}</div>
            </div>
          </div>
          <a
            href={`https://m.jm360.net/report?reportId=${data?.report.id}`}
            className={styles.starBtn}
          >
            查看详细报告 &gt;
          </a>
        </div>
      </div>
    </div>
  );
}
