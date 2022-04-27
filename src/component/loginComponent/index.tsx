import styles from './styles.module.css';

const listC = [
  {
    index: 0,
    img: '/images/login/login_1.png',
    text: '找项目',
    tip: ' 与老板直接谈',
  },
  {
    index: 1,
    img: '/images/login/login_2.png',
    text: '海量项目',
    tip: ' 精准匹配',
  },
  {
    index: 2,
    img: '/images/login/login_3.png',
    text: '在线沟通',
    tip: ' 商家在握',
  },
];
const listB = [
  {
    index: 0,
    img: '/images/login/login_1.png',
    text: '全球招商',
    tip: ' 与创业者直接谈',
  },
  {
    index: 1,
    img: '/images/login/login_5.png',
    text: '招商效果好',
    tip: ' 与创业者在线开聊',
  },
  {
    index: 2,
    img: '/images/login/login_4.png',
    text: '更多在线创业者获取',
    tip: ' 更适合的创业者',
  },
  {
    index: 3,
    img: '/images/login/login_2.png',
    text: '创业者匹配度更高',
    tip: ' 合作速度更快',
  },
];

type LoginComponentProps = {
  isBoss: boolean;
};

export function LoginComponent(props: LoginComponentProps) {
  const { isBoss } = props;
  return (
    <>
      {isBoss ? (
        <div className={styles.bossBox}>
          {listB.map((item) => (
            <div key={item.index} className={styles.iconBox}>
              <img src={item.img} className={styles.icon} />
              <div className={styles.textBox}>
                <p className={styles.text}>{item.text}</p>
                <p className={styles.boosTip}>{item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.box}>
          {listC.map((item) => (
            <div key={item.index} className={styles.iconBox}>
              <img src={item.img} className={styles.icon} />
              <div className={styles.textBox}>
                <p className={styles.text}>{item.text}</p>
                <p className={styles.tip}>{item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
