/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface SettledInputProps {
  isCode?: boolean;
  isSex?: boolean;
  label: string;
  placeholder: string;
  errorMsg: string;
  disable?: boolean;
  changeValue: (val: string) => void;
  changeGender?: (val: string) => void;
  getCode?: () => void;
}

export function SettledInput(props: SettledInputProps) {
  const {
    isCode,
    isSex,
    label,
    placeholder,
    errorMsg,
    disable,
    changeValue,
    getCode,
  } = props;

  const [isShow, setIsShow] = useState<boolean>(true);
  const [value, setValue] = useState('');
  const [gender, setGender] = useState<string>('男');
  const [isDisable, setIsDisable] = useState<boolean | undefined>(disable);
  useEffect(() => {
    setIsDisable(disable);
  }, [disable]);

  const [count, setCount] = useState<number>(0);
  // eslint-disable-next-line no-underscore-dangle
  let _timer: any = null;
  const initTimer = () => {
    // console.log('initTimer');
    if (_timer) {
      clearInterval(_timer);
    }
    setCount(60);
    _timer = setInterval(() => {
      if (count < 0) {
        clearInterval(_timer);
        // setTimer(undefined);
        setCount(60);
      }
      setCount((v) => v - 1);
    }, 1000);
    // setTimer(_timer);
  };
  return (
    <>
      <div className={styles.box}>
        <div className={styles.topBox}>
          <span className={styles.componyName}>
            {label} <span className={styles.icon}>*</span>
          </span>
          {isSex ? (
            <div className={styles.sexContainer}>
              <div className={styles.sexBox}>
                {gender === '男' ? (
                  <span
                    className={`${styles.toTopIcon} iconfont icon30xuanzhong`}
                    style={{ color: '#F22C01' }}
                  />
                ) : (
                  <span
                    className={`${styles.toTopIcon} iconfont icon31weixuanzhong`}
                    onPointerUp={() => {
                      setGender('男');
                    }}
                  />
                )}
                <span className={styles.sex}>先生</span>
              </div>
              <div className={styles.sexBox}>
                {gender === '女' ? (
                  <span
                    className={`${styles.toTopIcon} iconfont icon30xuanzhong`}
                    style={{ color: '#F22C01' }}
                  />
                ) : (
                  <span
                    className={`${styles.toTopIcon} iconfont icon31weixuanzhong`}
                    onPointerUp={() => {
                      setGender('女');
                    }}
                  />
                )}
                <span className={styles.sex}>女士</span>
              </div>
            </div>
          ) : null}
        </div>
        {isCode ? (
          <div className={styles.inputBox}>
            <input
              className={styles.codeInput}
              placeholder={placeholder}
              maxLength={4}
              onBlur={() => {
                if (value.length === 4) {
                  setIsShow(false);
                }
                setIsShow(true);
              }}
              onChange={(text: any) => {
                changeValue(text.target.value);
                setValue(text.target.value);
              }}
            />
            <div
              className={styles.codeBtn}
              onPointerUp={() => {
                // eslint-disable-next-line no-unused-expressions
                getCode && getCode();
                if (count < 1 && !isDisable) {
                  initTimer();
                }
              }}
            >
              {count < 1 ? (
                <span
                  className={styles.btnTitle}
                  style={
                    isDisable ? { color: ' #666666' } : { color: '#F22C01' }
                  }
                >
                  获取验证码
                </span>
              ) : (
                <span className={styles.btnTitle} style={{ color: ' #666666' }}>
                  {count}S 后重发
                </span>
              )}
            </div>
          </div>
        ) : (
          <input
            maxLength={!isCode ? 11 : 20}
            className={styles.input}
            placeholder={placeholder}
            onBlur={() => {
              if (value.length < 1) {
                setIsShow(true);
              } else {
                setIsShow(false);
              }
            }}
            onChange={(text: any) => {
              changeValue(text.target.value);
              setValue(text.target.value);
            }}
          />
        )}
        {isShow ? <span className={styles.tips}>{errorMsg}</span> : null}
      </div>
    </>
  );
}
