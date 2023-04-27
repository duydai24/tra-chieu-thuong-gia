
import {gateAPI} from 'core/gateAPI';
import Button, {ButtonCircle} from 'lib/Button';
import ListVirtual from 'lib/Containers/ListHeader';
import {ModalCustom} from 'lib/Containers/Modal';
import MemoEditor from 'lib/MemoEditor';
import {CellCheckRender} from 'lib/Table/CellCheckRender';
import {CellTextRender} from 'lib/Table/CellTextRender';
import TextEditor from 'lib/TextEditor';
import LayoutAdmin from 'modules/layout/LayoutAdmin';
import {authDirectSelector} from 'modules/user/selectors';
import React, {useState} from 'react';
import {MdDelete, MdEmail, MdRefresh, MdSend} from 'react-icons/md';
import {useSelector} from 'react-redux';

const INIT_STATE = {
  title: 'CHỈ VỚI 10K – GỌI NGAY, GIAO LUÔN',
  body: `Unicar giao hàng trong TP chỉ với 10k.
Dùng app Unicar ngay để kịp giao hàng bạn nhé
  `,
};
const NotificationMan = () => {
  const {isSa: isAdmin, isViewer: isSupporter} = useSelector(
    authDirectSelector
  );
  const [data, setData] = useState([]);

  const [postData, setPost] = useState(INIT_STATE);
  const [notiOpen, setNoti] = useState(false);
  const toggleNoti = () => setNoti((noti) => !noti);

  const sendToAll = async () => {
    if (!isAdmin) return;
    await gateAPI('device/sendtoall', postData);
  };
  //const listMobile = async () => {
  //  //if (!isAdmin) return;

  //  const data = await gateAPI('device/test', {});
  //  console.log(data?.length);
  //  setData(data);
  //};
  const listMobile = async () => {
    if (!isAdmin) return;

    const data = await gateAPI('device/listMobile', {});
    setData(data);
  };

  const listDelete = async () => {
    if (!isAdmin) return;

    const data = await gateAPI('device/listdelete', {});
    setData(data);
  };

  const onChange = (name, value) => {
    setPost((p) => ({...p, [name]: value}));
  };

  const sendCheck = (id) => async () => {
    if (!isSupporter) return;

    await gateAPI('device/sendFCM', {
      id,
      body: 'test device ok',
    });
  };
  const restoreDevice = (id) => async () => {
    if (!isAdmin) return;

    await gateAPI('device/restoreDevice', {
      id,
      body: 'test device ok',
    }).then(listDelete);
  };
  const trySend = async () => {
    if (!isAdmin) return;
    await gateAPI('device/trySendFCM', {
      users: data.map((item) => item.ownerId),
      body: 'test device ok',
    });
  };
  const CellKeyRender = ({value}) => (
    <div className="-col flex gap-1">
      <Button title='Thử gửi' onClick={sendCheck(value)}>
        Thử gửi
      </Button>

      <Button title='Phục hồi' onClick={restoreDevice(value)}>
        Phục hồi
      </Button>
    </div>
  );
  const columnSetting = [
    {
      accessor: 'displayName',
      Header: 'Họ tên',
      Cell: CellTextRender,
    },
    {
      accessor: 'phoneNumber',
      Header: 'Điện thoại',
      Cell: CellTextRender,
    },

    {
      accessor: 'block',
      Header: 'Khóa',
      Cell: CellCheckRender,
    },
    {
      accessor: 'isDelete',
      Header: 'Xóa',
      Cell: CellCheckRender,
    },
    {
      accessor: 'isActive',
      Header: 'OK',
      Cell: CellCheckRender,
    },
    {
      accessor: 'systemName',
      Header: 'OS',
      Cell: CellTextRender,
    },
    {
      accessor: 'systemVersion',
      Header: 'Ver',
      Cell: CellTextRender,
    },
    {
      accessor: 'deviceId',
      Header: 'Id',
      Cell: CellTextRender,
    },

    {
      accessor: 'id',
      Cell: CellKeyRender,
    },
  ];

  if (!isSupporter) return null;
  return (
    <LayoutAdmin title="Thông báo">
      <div className={'flex justify-end gap-2 my-2'}>
        <ButtonCircle onClick={toggleNoti} title="Gửi tin nhắn toàn hệ thống" >
          <MdSend />
          <span>Gửi tin toàn bộ hệ thống</span>
        </ButtonCircle>
        <ButtonCircle
          onClick={listMobile}
          title='Điện thoại - load chậm lắm nha'

        >
          <MdRefresh />
          <span>Nạp tất cả thiết bị</span>
        </ButtonCircle>
        <ButtonCircle onClick={listDelete} title='Đã xóa'  >
          <MdDelete />
          <span>Đã xóa</span>
        </ButtonCircle>
        <ButtonCircle onClick={trySend} title='Thử gửi lại' >
          <MdEmail />
          <span>Thử gửi lại</span>
        </ButtonCircle>
      </div>
      <ModalCustom visible={notiOpen} onClick={toggleNoti}>
        <div className={''}>
          <TextEditor
            label='Tiêu đề'
            name='title'
            value={postData.title}
            onChange={onChange}
          />
          <MemoEditor
            label='Nội dung'
            name='body'
            value={postData.body}
            onChange={onChange}
          />
          <Button
            color='secondary'
            variant='contained'
            onClick={sendToAll}
            title='Gửi cho toàn bộ tài khoản trong hệ thống'
          >
            Gửi toàn bộ
          </Button>
        </div>
      </ModalCustom>

      <ListVirtual data={data} total={data?.length} cols={columnSetting} itemHeight={120} className="noti-man" />
    </LayoutAdmin>

  );
};
export default NotificationMan;
