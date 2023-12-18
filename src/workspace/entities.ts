export const formElements = [
  {
    type: 1,
    configuration: {
      placeholder: '请输入用户名',
      label: '用户名',
      field: 'username',
      maxlength: 10,
      clearable: true
    },
  },
  {
    type: 1,
    configuration: {
      placeholder: '请输入昵称',
      label: '昵称',
      field: 'nickname',
      maxlength: 10,
      clearable: true
    },
  },
  {
    type: 1,
    configuration: {
      placeholder: '请输入住址',
      label: '住址',
      field: 'address',
      maxlength: 10,
      clearable: true
    },
  },
  {
    type: 2,
    configuration: {
      placeholder: '请输入生日',
      label: '生日',
      field: 'birth',
      format: 'YYYY/MM/DD',
      valueFormat: 'YYYY/MM/DD',
    },
  },
  {
    type: 2,
    configuration: {
      placeholder: '请输入开始时间',
      label: '开始时间',
      field: 'startTime',
      format: 'YYYY/MM/DD',
      valueFormat: 'YYYY/MM/DD',
    },
  },
  {
    type: 3,
    configuration: {
      field: 'radio',
      label: '性别',
      options: [
        { label: '男', value: '1' },
        { label: '女', value: '2' },
        { label: '未知', value: '3' }
      ]
    },
  },
  {
    type: 4,
    configuration: {
      field: 'select',
      label: '年级',
      options: [
        { label: '一年级', value: '1' },
        { label: '二年级', value: '2' },
        { label: '三年级', value: '3' }
      ]
    },
  },
  
]