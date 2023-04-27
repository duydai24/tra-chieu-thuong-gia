import {processCDN} from 'core/processCDN';
import Button, {ButtonGroup} from 'lib/Button';
import ImageViewer from 'lib/Image/ImageViewer';
import TextEditor from 'lib/TextEditor';
import React, {useEffect, useState} from 'react';
import {MdCreateNewFolder, MdDescription, MdFolder, MdRefresh} from 'react-icons/md';

export default function FM({name, value, onChange, className}) {
  const [data, setData] = useState({});
  const [curPath, setCurPath] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [view, setView] = useState(null);
  const [newName, setNewName] = useState(null);
  const onClosePreview = () => {
    setView(null);
    setNewName(null);
  };
  const gotoParent = () => {
    if (curPath) {
      const arr = (curPath + '').split('/');
      arr.splice(arr.length - 1, 1);
      setCurPath(arr.join('/'));
    }
    onClosePreview();
  };
  const onChangeNewName = (name, value) => setNewName(value);
  const onSelectFolder = (folder) => {
    setCurPath(c => !c ? folder : c + '/' + folder);
  };
  const onSelect = () => {
    if (onChange) {
      onChange(name, view);
    }
  };
  const onOpenView = (folder) => {
    //if (onChange) {
    //  onChange(name, '/data/' + (!curPath ? folder : curPath + '/' + folder));
    //}
    setView('/data/' + (!curPath ? folder : curPath + '/' + folder));
  };

  const reloadData = () => setRefresh(new Date());
  const onRename = async () => {
    const postData = {id: view, search: newName};

    const serverData = await processCDN('home/rem', postData);
    if (serverData?.id) {
      reloadData();
    }

  };
  const onDelete = async () => {
    const serverData = await processCDN('home/del', {id: view});
    if (serverData) {
      reloadData();
    }

  };
  const onCopy = async () => {
    const serverData = await processCDN('home/cp', {id: view});
    if (serverData) {
      reloadData();
    }

  };
  const onOptimazer = async () => {
    const serverData = await processCDN('home/op', {id: view});
    if (serverData?.id) {
      reloadData();
    }

  };
  const onAddFolder = async () => {
    const serverData = await processCDN('home/addFolder', {id: curPath});
    if (serverData?.id) {
      reloadData();
    }

  };

  useEffect(() => {
    let _mounted = true;
    const loadData = async () => {
      const serverData = await processCDN('home/dir', {id: curPath});
      if (_mounted)
        setData(serverData || {});
    };
    loadData();
    return () => {
      _mounted = false;
    };
  }, [curPath, refresh]);
  useEffect(() => {
    const _path = value + '';
    if (_path.startsWith('/data/')) {
      const _file = _path.substr(6, _path.length - 6);
      setCurPath(_file);
      setView(_path);
    }
  }, [value]);
  const {childs} = data;
  return <div className={'fm ' + className}>
    <div className={'-top'}>
      <h4>/{curPath}</h4>
      <ButtonGroup className="bar">
        <Button
          onClick={reloadData}
        >
          <MdRefresh />
        </Button>
        <Button
          onClick={onAddFolder}
        >
          <MdCreateNewFolder />
        </Button>
      </ButtonGroup>
    </div>

    <div className={'fm-con'}>
      <div className={'fm-explorer'}>
        <button
          onClick={gotoParent}>
          <span className="font-bold text-2xl">..</span>
        </button>
        {childs?.filter(x => x.isExits && x.isDir)?.map(item => <button
          onClick={() => onSelectFolder(item.path)}
          title={item.path}
          key={item.path} >
          <MdFolder />
          <span className="line-clamp-1">{item.path}</span>
          <p className={'-size'}><span>{item.size}</span></p>
        </button>)}
      </div>
      {view ? <div className={'fm-viewer'}>
        <div className="-img">
          <ImageViewer src={view} />
        </div>
        <div className="-act">
          <TextEditor container="-file" value={newName || view} onChange={onChangeNewName}
            name="newName"
          />
          <ButtonGroup className="gap-1">
            <Button onClick={onSelect} disabled={!onChange}>
              <span>Chọn ảnh</span>
            </Button>
            <Button onClick={onOptimazer}>
              <span>Tối ưu</span>
            </Button>
            <Button onClick={onRename} disabled={!newName}>
              <span>Đổi tên</span>
            </Button>
            <Button onClick={onCopy}  >
              <span>Copy</span>
            </Button>
            <Button onClick={onDelete} disabled={newName}>
              <span>Xóa</span>
            </Button>
            <Button onClick={gotoParent} >
              <span>Đóng</span>
            </Button>
          </ButtonGroup>
        </div>
      </div> :
        <div className={'fm-content'}>
          {childs?.filter(x => x.isExits)?.map(item => <button
            onClick={() => item.isDir ? onSelectFolder(item.path) : onOpenView(item.path)}
            title={item.path}
            className={'fm-item'}
            key={item.path} >
            {item.isDir ? <MdFolder className={'iconFolder'} /> :
              <MdDescription className={'iconFile'} />}
            <span className="line-clamp-1">{item.path}</span>
          </button>)}
        </div>}
    </div>
  </div>;
}