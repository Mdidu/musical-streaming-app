import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../../stores/modal/modal.action";
import { selectModal } from "../../../stores/modal/modal.selector";

const portalElement = document.getElementById("overlays");

export const Modal = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modal.isShowing) setTimeout(() => dispatch(hideModal()), 5000);
  }, [dispatch, modal.isShowing]);

  return modal.isShowing
    ? ReactDOM.createPortal(<div id="modal">{modal.text}</div>, portalElement)
    : null;
};

export default Modal;
