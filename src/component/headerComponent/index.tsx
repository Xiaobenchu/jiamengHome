import { ProjectInterface } from '@/jmlib/types';
import { useState } from 'react';
import { CodeOverlay } from '../codeOverlay';
import styles from './styles.module.css';

interface HeaderComponentProps {
  isProject?: boolean;
  hotProject?: ProjectInterface[];
  title?: string;
}

export function HeaderComponent(props: HeaderComponentProps) {
  const { isProject, hotProject, title } = props;
  const [show, setShow] = useState(false);
  const [blur, setBlur] = useState(false);

  const [value, setValue] = useState('');

  return (
    <>
      <CodeOverlay
        visible={show}
        onPress={(val) => {
          setShow(!show);
        }}
      />
      <div className={styles.navBox}>
        <div className={styles.centerBox}>
          <div className={styles.navLeftBox}>
            <p className={styles.welcomeText}>欢迎来到时代加盟网～</p>
            <div className={styles.iconBox}>
              <span
                className={`${styles.icon} iconfont icon2-shenqing-dianhua`}
              />
              <p className={styles.navText}>7*9小时客服热线：15219457680</p>
            </div>
          </div>
          <div className={styles.navRightBox}>
            <div className={styles.iconBox}>
              <span className={`${styles.icon} iconfont  icon1-wode-vip`} />
              <p
                className={styles.navText}
                onPointerUp={() => {
                  setShow(true);
                }}
              >
                下载APP
              </p>
            </div>
            <p
              className={styles.joinText}
              onPointerUp={() => {
                setShow(true);
              }}
            >
              立即加入
            </p>
            <div
              className={styles.navBtn}
              onPointerUp={() => {
                window.location.href = '/login';
              }}
            >
              <p className={styles.navBtnText}>登录</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        {!isProject ? (
          <div className={styles.logBox}>
            <img
              src="/images/home/logo.png"
              className={styles.logo}
              onPointerUp={() => {
                window.location.href = '/';
              }}
            />
            <div>
              <div className={styles.topBox}>
                <div className={styles.searchBox}>
                  {/* <div className={styles.inputContainer}> */}
                  <div className={styles.inputBox}>
                    <input
                      className={styles.input}
                      onFocus={() => {
                        setBlur(true);
                      }}
                      onBlur={() => {
                        setBlur(false);
                      }}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                    />
                    {blur ? null : (
                      <div className={styles.tipsBox}>
                        <span
                          className={`${styles.toTopIcon} iconfont iconsousuo-copy`}
                        />
                        <span className={styles.tips}>请输入你想搜的项目</span>
                      </div>
                    )}
                  </div>
                  {/* </div> */}
                  <a href={`/categorySearch?keyword=${value}`}>
                    <div className={styles.searchBtn}>
                      <span className={styles.btnTitle}>搜索</span>
                    </div>
                  </a>
                </div>

                <div className={styles.topRightBox}>
                  <a href="/settledPage">
                    <span className={styles.rightText}>引爆商机</span>
                  </a>
                  <a href="/settledPage">
                    <span className={styles.rightText}>发布招商</span>
                  </a>
                </div>
              </div>

              {hotProject ? (
                <div className={styles.bottomBox}>
                  <span className={styles.hotText}>热搜:</span>
                  {hotProject.map((item, index) => (
                    <a key={index.toString()} href={`project/${item.id}`}>
                      <span className={styles.project}>{item.name}</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            <div className={styles.codeBox}>
              <span className={styles.codeTips}>手机找项目</span>
              <img
                src="/images/home/down_codeImg.png"
                className={styles.start}
              />
            </div>
          </div>
        ) : (
          <div className={styles.logBox}>
            <img
              src="/images/home/logo.png"
              className={styles.logo}
              onPointerUp={() => {
                window.location.href = '/';
              }}
            />
            <div>
              <div className={styles.topBox}>
                <div className={styles.searchBox}>
                  {/* <div className={styles.inputContainer}> */}
                  <div className={styles.inputBox}>
                    <input
                      className={styles.input}
                      onFocus={() => {
                        setBlur(true);
                      }}
                      onBlur={() => {
                        setBlur(false);
                      }}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                    />
                    {blur ? null : (
                      <div className={styles.tipsBox}>
                        {title && title.length > 0 ? (
                          <span className={styles.tips}>{title}</span>
                        ) : (
                          <>
                            <span
                              className={`${styles.toTopIcon} iconfont iconsousuo-copy`}
                            />
                            <span className={styles.tips}>
                              请输入你想搜的项目
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  {/* </div> */}
                  <a href={`/categorySearch?keyword=${value}`}>
                    <div className={styles.searchBtn}>
                      <span className={styles.btnTitle}>搜索</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.rightBtn}>
              <span className={styles.rightTitle}>快速推广企业品牌</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
