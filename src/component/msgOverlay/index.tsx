import styles from './styles.module.scss';

type MsgOverlayProps = {
  onPress: () => void;
  visible: boolean;
  msg: string;
  isError?: boolean;
};
export function MsgOverlay(props: MsgOverlayProps) {
  const { onPress, msg, visible, isError } = props;
  return (
    <>
      {visible ? (
        <div
          className={styles.content}
          onPointerUp={() => {
            onPress();
          }}
        >
          <div className={styles.box}>
            <p
              className={styles.closure}
              onPointerUp={() => {
                onPress();
              }}
            >
              x
            </p>
            {isError ? (
              <img
                src="/images/settledPage/succes_icon.png"
                className={styles.img}
              />
            ) : (
              <img
                src="/images/settledPage/error_icon.png"
                className={styles.img}
              />
            )}
            <span className={styles.msg}>{msg}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
