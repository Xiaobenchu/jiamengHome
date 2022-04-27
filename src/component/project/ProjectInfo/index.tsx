import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import styles from './styles.module.css';

interface ProjectInfoProps {
  data: any;
  bigCategoryName: string;
  onClickBtn: (bool: boolean) => void;
}

export function ProjectInfo(props: ProjectInfoProps) {
  const { data, bigCategoryName, onClickBtn } = props;

  const scrollBanner = useRef<any>(null);
  const [selectImg, setSelectImg] = useState(
    data.photoList.length ? data.photoList[0] : '',
  );
  const [selectVideo, setSelectVideo] = useState(
    data.videoList.length ? data.videoList[0] : '',
  );
  const [imgIdx, setImgIdx] = useState(1);

  return (
    <>
      <div className={styles.topContent}>
        <span className={styles.categoryMenu}>
          首页&gt;{bigCategoryName}&gt;{data.category.name}&gt;{data.name}
        </span>
        <div className={styles.topMain}>
          <div className={styles.videoBox}>
            <div className={styles.imgBox}>
              {data.videoList.length && selectVideo ? (
                <video
                  src={data.videoList[0]}
                  controls
                  className={styles.projectImg}
                >
                  <track
                    src="/media/examples/friday.vtt"
                    kind="captions"
                    srcLang="en"
                  />
                </video>
              ) : (
                <img src={selectImg} className={styles.projectImg} />
              )}
            </div>

            <div className={styles.bannerList} ref={scrollBanner}>
              <a
                className={styles.hotIconLeft}
                onPointerUp={() => {
                  if (imgIdx > 0) {
                    setImgIdx((v) => v - 1);
                  }
                  scrollBanner.current?.scrollTo(95 * imgIdx, 0);
                }}
              >
                <span className={`iconfont iconfanhui ${styles.hotIcon}`}>
                  {' '}
                </span>
              </a>
              <a
                className={styles.hotIconRight}
                onPointerUp={() => {
                  if (imgIdx < data.photoList.length - 3) {
                    setImgIdx((v) => v + 1);
                  }
                  scrollBanner.current?.scrollTo(95 * imgIdx, 0);
                }}
              >
                <span className={`iconfont iconright ${styles.hotIcon}`}>
                  {' '}
                </span>
              </a>
              {data.videoList.length ? (
                <div className={styles.playBox}>
                  <img
                    src="/images/home/playCircle.png"
                    className={styles.play}
                    onPointerUp={() => {
                      setSelectImg('');
                      setSelectVideo(data.videoList[0]);
                    }}
                  />
                  <img
                    src={data.photoList[0]}
                    className={styles.bannerImg}
                    onPointerUp={() => {
                      setSelectImg('');
                      setSelectVideo(data.videoList[0]);
                    }}
                  />
                </div>
              ) : null}
              {data.photoList.map((item: any) => {
                return (
                  <img
                    src={item}
                    className={styles.bannerImg}
                    key={item}
                    onPointerUp={() => {
                      setSelectVideo('');
                      setSelectImg(item);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.nameBox}>
            <div>
              <img src={data.logo} className={styles.logo} />
              <div className={styles.titleBox}>
                <div className={styles.nameTitle}>
                  <span>{data.name}</span>
                  <div className={styles.stars}>3星认证</div>
                </div>
                <span>{data.company.name}</span>
              </div>
            </div>
            <span className={styles.tagTxt}>{data.brief}</span>
            <span className={styles.categoryTxt}>
              <span>项目类别</span> {data.category.name}
            </span>
            <div className={styles.moneyBox}>
              <span>
                投资金额
                <span className={`${styles.moneyColor}`}>
                  <span className={`${styles.moneySize}`}>
                    {data.minCost}-{data.maxCost}
                  </span>
                  万
                </span>
              </span>
              <span>
                品牌地址
                <span className={`${styles.addressColor}`}>{data.address}</span>
              </span>
              <span>
                成立时间
                <span className={`${styles.addressColor}`}>
                  {dayjs(data.brandStartTime).format('YYYY-MM-DD')}
                </span>
              </span>
              <span>
                门店总数
                <span className={`${styles.moneyColor}`}>
                  {data.franchiseNumber + data.directNumber}
                </span>
              </span>
              <span>
                项目关注
                <span className={`${styles.moneyColor}`}>
                  {data.projectData.following}
                </span>
              </span>
              <span>
                项目申请
                <span className={`${styles.moneyColor}`}>
                  {data.projectData.application}
                </span>
              </span>
            </div>
            <div className={styles.trainingContent}>
              <span>加盟支持</span>
              <div>
                {data.report.trainingContent.length > 0 &&
                  data.report.trainingContent.map((item: string) => {
                    return (
                      <div className={styles.trainingContentTxt} key={item}>
                        <span
                          className={`iconfont iconwode-zhengque ${styles.icon}`}
                        >
                          {' '}
                        </span>
                        <span>{item}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.buttonBox}>
              <div
                onPointerUp={() => {
                  onClickBtn(true);
                }}
              >
                <span
                  className={`iconfont icon8wode-goutongzhongxiangmu ${styles.btnIcon}`}
                >
                  {' '}
                </span>{' '}
                立即咨询
              </div>
              <div
                onPointerUp={() => {
                  onClickBtn(false);
                }}
              >
                <span
                  className={`iconfont iconshouye-360jiameng ${styles.btnIcon}`}
                >
                  {' '}
                </span>{' '}
                索要资料
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
