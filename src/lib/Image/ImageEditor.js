
import Button from 'lib/Button';
import {ModalFix} from 'lib/Containers/Modal';
import FM from 'lib/fm';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';

import CropEditor from './CropEditor';
import ImageViewer from './ImageViewer';

const sizeDefault = {
  w: 100,
  h: 100,
};
function ImageEditor({size = sizeDefault, className, name, value, label, onChange, extra, allowMulti, classNameImage}, ref) {
  const [showFM, setShowFM] = useState(false);
  const _ref = useRef(null);
  const onClick = e => {
    if (e) e.stopPropagation();

    if (_ref?.current) {
      _ref.current.onUploadButtonClick();
    }
  };
  useImperativeHandle(ref, () => ({
    onClick
  }), [_ref]);

  const toggleFM = () => {
    setShowFM(f => !f);
  };

  const w = parseInt(size.w);
  const h = parseInt(size.h);
  const _size = {
    w,
    h
  };
  return (<div className={'img-editor ' + (className || '')} title={label || ''}>
    <div className=" self-center relative bg-gray-400 flex justify-center">
      <ImageViewer src={value} width={_size.w} height={_size.h} onClick={onClick} className={classNameImage} />
      <Button onClick={onClick} title="Chọn ảnh upload" className="bg-gray-500 bg-opacity-50 w-32 border-0 p-5 absolute inset-2/4 -translate-x-1/2 -translate-y-1/2">
        <span className='text-white'>Chọn ảnh</span>
      </Button>
    </div>
    {/* <div className="flex flex-col gap-2 p-3">
     
      <p className="line-clamp-2 text-help">Ảnh có kích thước {w} X {h}</p>
      <TextEditor
        placeholder="Link ảnh"
        container="flex rounded-none bg-gray-700 border-b border-gray-400 px-0"
        name={name} value={value} onChange={onChange}>
        <span title="Chọn ảnh từ máy chủ" onClick={toggleFM} className=" cursor-pointer rounded block py-2 px-4">...</span>
      </TextEditor>

    </div> */}
    <ModalFix visible={showFM} className="modal-80 flex flex-col" onClose={toggleFM}>
      <FM name={name} value={value} onChange={onChange} />
    </ModalFix>
    <CropEditor
      size={_size}
      ref={_ref}
      name={name}
      onChange={onChange}
      extra={extra}
      allowMulti={allowMulti} />
  </div >);
}
const ImageEditorWithRef = forwardRef(ImageEditor);
export default ImageEditorWithRef;