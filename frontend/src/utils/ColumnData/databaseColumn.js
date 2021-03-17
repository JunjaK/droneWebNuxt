export default [
  {
    title: 'No',
    dataIndex: 'id',
    key: 'id',
    scopedSlots: {
      customRender: 'id',
    },
    align: 'center',
    ellipsis: true,
    width: 70,
  },
  {
    title: '드론 이름',
    dataIndex: 'droneName',
    key: 'droneName',
    scopedSlots: {
      customRender: 'droneName',
    },
    align: 'center',
    ellipsis: true,
    width: 200,
  },
  {
    title: '드론제조사',
    dataIndex: 'droneMaker',
    key: 'droneMaker',
    scopedSlots: {
      customRender: 'droneMaker',
    },
    align: 'center',
    ellipsis: true,
    width: 120,
  },
  {
    title: '드론 종류',
    dataIndex: 'droneCategory',
    key: 'droneCategory',
    scopedSlots: {
      customRender: 'droneCategory',
    },
    align: 'center',
    ellipsis: true,
    width: 60,
  },
  {
    title: '시리얼넘버',
    dataIndex: 'droneSerial',
    key: 'droneSerial',
    scopedSlots: {
      customRender: 'droneSerial',
    },
    align: 'center',
    ellipsis: true,
    width: 100,
  },
];
