const Modal = ({
  handleClose,
  show,
  children,
 }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-container">
          {children}
          <div className="modal-close" onClick={handleClose}>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
