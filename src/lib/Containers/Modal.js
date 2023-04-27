import React from 'react';

export default function Modal({visible, onAccept, onCancel = () => { }, title, text, cancelText = 'Đóng', confirmText = 'Xác nhận', children}) {
  if (!visible) return null;
  return <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" onClick={onCancel}>

      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:max-w-lg sm:w-full" onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}>
        <div className="bg-white px-2 pt-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {title}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {text}
                </p>
              </div>
              <div className="mt-2">
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={onAccept}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            {confirmText}
          </button>
          <button
            onClick={onCancel}
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  </div>;
}
export function ModalCustom({children, visible, onClick}) {
  if (!visible) return null;
  return <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={onClick} >
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={e => {
        e.stopPropagation();
        e.preventDefault();
      }}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          {children}
        </div>
      </div>
    </div>
  </div>;
}
export function ModalFull({children, visible}) {
  if (!visible) return null;
  return <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    {children}

  </div>;
}
export function ModalFix({children, className, onClose = () => { }, visible}) {
  if (!visible) return null;
  return <div className={'fixed z-50 inset-0 overflow-y-hidden '} aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={onClose}>
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className={'bg-white transform p-4 overflow-y-auto ' + (className || '')} onClick={(e) => {
        e.stopPropagation();
      }}>
        {children}
      </div>
    </div>
  </div>;
}
