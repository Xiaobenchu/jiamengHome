import styles from './styles.module.css';

type CodeOverlayProps = {
  onPress: (val: any) => void;
  visible: boolean;
};
export function CodeOverlay(props: CodeOverlayProps) {
  const { onPress, visible } = props;
  return (
    <>
      {visible ? (
        <div className={styles.content}>
          <div className={styles.box}>
            <p
              className={styles.closure}
              onPointerUp={(val) => {
                onPress(val);
              }}
            >
              x
            </p>
            <p>立即下载时代加盟网APP，开启创业之旅</p>
            <img src="/images/home/app_code.jpg" className={styles.codeImg} />
            <p>时代加盟网APP</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
