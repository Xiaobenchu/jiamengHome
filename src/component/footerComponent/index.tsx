import dayjs from 'dayjs';
import styles from './styles.module.css';

const list = [
  {
    index: 0,
    text: '关于我们',
    router: '/aboutUs',
  },
  {
    index: 1,
    text: '新闻中心',
    router: '/newsSpotlight/0',
  },
  {
    index: 2,
    text: '服务条款',
    router: '/termsService',
  },
  {
    index: 3,
    text: '隐私协议',
    router: '/privacyPolicy',
  },
  {
    index: 4,
    text: '客服中心',
    router: '/contactUs',
  },
];
const imgList = [
  {
    index: 0,
    img: '/images/home/weChat_code.jpg',
    text: '时代加盟网公众号',
  },
  {
    index: 1,
    img: '/images/home/app_code.jpg',
    text: '时代加盟网app下载',
  },
];
type FooterInfoProps = {
  showImg?: boolean;
};
export function FooterComponent(props: FooterInfoProps) {
  const { showImg } = props;
  return (
    <>
      {showImg ? null : (
        <img src="/images/home/home_8.png" className={styles.bottomPoster} />
      )}

      <div className={styles.footerTip}>
        <p className={styles.navText}>
          时代加盟网提醒您：多做项目考察，投资有风险，加盟需谨慎～
        </p>
      </div>
      <div className={styles.footerBox}>
        <div className={styles.contentBox}>
          <div className={styles.topBox}>
            <div className={styles.brandBox}>
              <p className={styles.brandText}>®</p>
              <p className={styles.brandText}>品牌入驻</p>
              <p className={styles.phone}>13424306126</p>
            </div>
            <div className={styles.brandBox1}>
              <span
                className={`${styles.brandText} iconfont icon14-wode-wodekefu`}
              />
              <p className={styles.brandText}>客服热线</p>
              <p className={styles.phone}>15219457680</p>
            </div>
          </div>

          <div className={styles.bottomBox}>
            <div className={styles.bottomJump}>
              {list.map((item) => (
                <a
                  href={item.router ? item.router : ''}
                  key={item.index}
                  className={item.index === 0 ? styles.jump : styles.jumpLast}
                >
                  <p className={styles.word}>{item.text}</p>
                </a>
              ))}
            </div>
            <a>
              <p
                className={styles.bottomText}
                onPointerUp={() => {
                  window.location.href = 'https://beian.miit.gov.cn';
                }}
              >
                时代加盟网© {dayjs().format('YYYY')} 粤ICP备2021029846号-1
              </p>
            </a>
          </div>
        </div>
        <div className={styles.codeBox}>
          {imgList.map((item) => (
            <div className={styles.codeContentBox} key={item.index}>
              <img src={item.img} className={styles.codeImg} />
              <p className={styles.codeText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
