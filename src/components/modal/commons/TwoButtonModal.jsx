import React from "react";

const TwoButtonModal = ({
  children,
  onCancel,
  onConfirm,
  cancelText = "취소",
  confirmText = "확인",
}) => {
  return (
    <div className="w-full fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg px-4 py-6">
        <div className="w-72">{children}</div>
        <div className="w-72 pt-4 flex gap-4 justify-center items-center">
          <button
            className="px-11 py-3 rounded-lg bg-unddisabled text-undtextgray text-und18 font-bold"
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            className="px-11 py-3 rounded-lg bg-undpoint text-white text-und18 font-bold"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoButtonModal;
