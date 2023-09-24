/* eslint-disable react/prop-types */

const Modal = ({ children, isOpen, onClose }) => {
    const modalClassName = isOpen
      ? "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      : "hidden";
  
    const handleOverlayClick = () => {
      if (onClose) {
        onClose();
      }
    };
  
    return (
      <div className={modalClassName}>
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={handleOverlayClick}
        ></div>
        <div className="relative z-50 mx-auto">
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;

  