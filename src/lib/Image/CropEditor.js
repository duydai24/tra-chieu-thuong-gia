import 'cropperjs/dist/cropper.css';

import {trackerError} from 'core/trackerError';
import {uploadFile} from 'core/uploadFile';
import {ButtonCircle} from 'lib/Button';
import Modal, {ModalFull} from 'lib/Containers/Modal';
import isArray from 'lodash/isArray';
import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import Cropper from 'react-cropper';
import {IoIosClose, IoIosCloudUpload, IoIosCrop} from 'react-icons/io';

import {resizeImage} from './resizeImage';

function CropEditor({name, extra, onChange, size, allowMulti}, ref) {
  const [actions, setActions] = useState({
    isShowModal: false,
    isShowQuestion: false
  });
  const [stateFile, setFiles] = useState({
    files: null,
    fileIndex: 0,
    file: null,
  });
  const _crop = useRef(null);
  const refUpload = useRef(null);
  useImperativeHandle(ref, () => ({
    onUploadButtonClick() {
      refUpload?.current?.click();
    }
  }), []);

  const _onChange = (name, value) => {
    if (!onChange) return;
    if (extra || extra === 0 || extra === '0') {
      onChange(extra, name, value);
    }
    else onChange(name, value);
  };

  const onChangeSelectFile = e => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.files.length < 1) {
      return;
    }

    const files = [];
    if (!allowMulti) files.push(e.target.files[0]);
    else
      for (var i = 0; i < e.target.files.length; i++) {
        files.push(e.target.files[i]);
      }
    if (files.length < 1) {
      return;
    }

    setFiles(d => ({
      ...d,
      files,
      fileIndex: 0,
      totalFile: files?.length || 0,
      fileType: files[0].type,
    }));
    setActions(d => ({
      ...d,
      isShowQuestion: true
    }));

  };

  const startCroping = () => {
    if (stateFile.totalFile > stateFile.fileIndex) {
      setActions(d => ({
        ...d,
        isShowQuestion: false,
        isShowModal: true
      }));
      var reader = new FileReader();
      reader.onload = ({target: {result}}) => {
        var img = new Image();
        img.onload = () => {
          let imageSize = {
            iW: img.width,
            iH: img.height,
          };
          setFiles(d => ({...d, imageSize}));
        };
        img.onerror = () => {
          trackerError('web-loadimage-crop');
        };
        img.src = result;

        setFiles(d => ({
          ...d,
          file: result,
        }));
        refUpload.current.value = ''; //Hủy state nội bộ của input file
      };
      const file = stateFile.files[stateFile.fileIndex];
      reader.readAsDataURL(file);
    }

  };
  const onResizeComplete = data => {
    const newFiles = [...stateFile.files];
    newFiles[stateFile.fileIndex] = data;
    if (stateFile.fileIndex < stateFile.totalFile - 1) {
      setFiles(d => ({
        ...d,
        fileIndex: d.fileIndex + 1,
        fileType: newFiles[d.fileIndex + 1].type,
        files: newFiles
      }));
    }
    else {

      if (stateFile.fileIndex === stateFile.totalFile - 1) {
        setActions(d => ({...d, isShowModal: false, file: null, fileIndex: 0, totalFile: 0, files: null}));
        if (!allowMulti && isArray(newFiles)) {
          _onChange(name, newFiles[0]);
        }
        else _onChange(name, newFiles);
      }

    }

  };
  useEffect(() => {
    if (stateFile.fileIndex > 0 && stateFile.fileIndex < stateFile.totalFile) {
      startCroping();
    }
  }, [stateFile.fileIndex, stateFile.totalFile]);
  const onCropImage = () => {
    if (!onChange) return;
    const canvas = _crop.current.cropper.getCroppedCanvas();//cropper.getCroppedCanvas();
    if (!canvas) {
      alert('Không hỗ trợ định dạng');
      return;
    }
    const {fileType, imageSize: {iW, iH}} = stateFile;
    const cropData = canvas.toDataURL();
    const intW = parseInt(size.w);
    const intH = parseInt(size.h);
    resizeImage(cropData, intW, intH, fileType, iW, iH, onResizeComplete);
  };

  const startUploading = async () => {
    setActions(d => ({...d, isShowQuestion: false}));
    if (!onChange) return;
    const {files} = stateFile;

    try {
      const data = await Promise.all(files.map(item => uploadFile(item)));

      if (!allowMulti && isArray(data)) {
        _onChange(name, data[0][0], extra);
      }
      else _onChange(name, data[0], extra);
    }
    catch (e) {
      trackerError('web-upload', e);
    }
  };

  const onCloseImageWithCropper = () => {
    setActions(d => ({...d, isShowModal: false}));
  };

  const onUploadButtonClick = () => {
    refUpload?.current?.click();
  };

  if (!onChange) return null;
  const {isShowModal, isShowQuestion} = actions;
  const intW = parseInt(size.w);
  const intH = parseInt(size.h);
  const ratio = intW / intH;
  return (
    <>
      <Modal
        visible={!!isShowQuestion && !isShowModal} title="Bạn muốn cắt ảnh không ?"
        cancelText="Upload Trực tiếp" confirmText="Mở trình cắt ảnh"
        onAccept={startCroping}
        onCancel={startUploading}
      />

      <input
        id="myInput"
        type="file"
        multiple={allowMulti}
        accept='image/*'
        ref={refUpload}
        style={{display: 'none'}}
        onChange={onChangeSelectFile}
      />
      <ModalFull visible={isShowModal}     >
        <Cropper
          ref={_crop}
          src={stateFile.file}
          style={{height: '100vh', width: '100vw'}}
          cropBoxData={{w: intW, h: intH}}
          ViewMode={1}
          aspectRatio={ratio}
          zoomable={false}
          autoCropArea={1}
        />
        <div className="fixed right-2 bottom-2 flex gap-2 z-10">
          <ButtonCircle
            className="bg-gray-100"
            onClick={onCropImage}
            title="Lưu"
          >
            <IoIosCrop />
          </ButtonCircle>
          <ButtonCircle
            className="bg-gray-100"
            title="Ảnh khác"
            onClick={onUploadButtonClick}
          >
            <IoIosCloudUpload />
          </ButtonCircle>
          <ButtonCircle
            className="bg-gray-100"
            title="Quay lại"
            onClick={onCloseImageWithCropper}
          >
            <IoIosClose />
          </ButtonCircle>
        </div>
      </ModalFull>
    </>
  );

}
export default forwardRef(CropEditor);