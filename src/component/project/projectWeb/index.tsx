import { useState } from 'react';
import styles from './styles.module.css';

interface ProjectWebProps {
  data: any;
}

export function ProjectWeb(props: ProjectWebProps) {
  const { data } = props;

  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.projectWeb}>
        <div className={styles.projectWebLeft}>
          {show ? null : (
            <div
              className={styles.showMoreBox}
              onPointerUp={() => {
                setShow(true);
              }}
            >
              <div>
                展示更多{' '}
                <span className={`iconfont icondown ${styles.showMore}`}>
                  {' '}
                </span>
              </div>
            </div>
          )}
          <div
            className={`${styles.leftContent} ${show ? styles.showAll : ''}`}
          >
            <span className={styles.projectTitle}>项目介绍</span>
            <div
              className={styles.container}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>
        <div className={styles.projectWebRight}>
          <span className={styles.rightTitle}>立即咨询，获取加盟资料</span>
          <input placeholder="*称呼" className={styles.input} />
          <input
            placeholder="*手机号"
            maxLength={11}
            className={styles.input}
          />
          <input
            placeholder="*留言"
            defaultValue={`我想要咨询${data.name}加盟`}
            className={`${styles.input} ${styles.inputTxtColor}`}
          />
          <div className={styles.rightBtn}>同意并提交</div>
          <span className={styles.agree}>
            点击提交代表您同意
            <a href="/userPolicy" className={styles.rightColor}>
              《用户协议》
            </a>
            和
            <a href="/privacyPolicy" className={styles.rightColor}>
              《隐私政策》
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
